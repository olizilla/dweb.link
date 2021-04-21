/* eslint-env serviceworker */

/*
 * The install event is your chance to cache everything you need before being able to control clients.
 * The promise you pass to event.waitUntil() lets the browser know when your install completes, and if it was successful.
 * https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
 *
 * This function must be sync, any async work needs to be done in the function passed to event.waitUntil
 *
 * @param {LifecycleEvent} event
 */
const oninstall = (event) => {
  event.waitUntil(event.target.skipWaiting())
}

/*
 * Once your service worker is ready to control clients and handle functional events like push and sync,
 * you'll get an activate event. But that doesn't mean the page that called .register() will be controlled.
 * @param {LifecycleEvent} event
 */
const onactivate = (event) => {
  console.log('🤖 onactivate', event)
  // We want to start handling requests right away, so that requests from the
  // very first page will be handled by service worker. Which is why we claim
  // clients.
  event.waitUntil(event.target.clients.claim())
}

/*
* An event handler called whenever a fetch event occurs
* "Alternatively, simply don't call event.respondWith, which will result in default browser behaviour."
* @param {Fetch} event
*/
const onfetch = (event) => {
  // console.log('onfetch', event.request.url)
  // if (event.request.mode === 'navigate') {
  //   console.log('onfetch ignored', event.request.mode)
  //   return // skip page requests... for now
  // }
  const url = new URL(event.request.url)
  switch (url.origin) {
    // Only handle pages for the current origin
    // Requests to other origins are left to the browser default
    case location.origin: {
      const params = new URLSearchParams(url.search)
      const uri = params.get('uri')
      if (uri) {
        console.log('onfetch', uri)
        if (uri.startsWith('ipfs://') || uri.startsWith('ipns://')) {
          event.respondWith(redirectToIpfsGatewayUrl(params.get('uri')))
        } else {
          console.warn('unknown protocol', uri)
        }
      }
    }
  }
}

async function redirectToIpfsGatewayUrl (urlStr) {
  let [scheme, path] = urlStr.split('://')
  if (path.startsWith('ipfs/') || path.startsWith('ipns/')) {
    // trim redundent prefixes if presnet
    path = path.substring(5)
  }
  const gatewayUrl = `https://dweb.link/${scheme}/${path}`
  console.log(`🤖 ${urlStr} → ${gatewayUrl} (${scheme}, ${path})`)
  return Response.redirect(gatewayUrl, 303)
}

/**
 * Sets up service worker event handlers.
 * @param {any} self
 */
const setup = (self) => {
  self.oninstall = oninstall
  self.onactivate = onactivate
  self.onfetch = onfetch
}

setup(self)
