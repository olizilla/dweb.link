import { Logo } from './logo'

// Strip subdomains when fetched from *.dweb.link
// otherwise just use the current origin.
function getProtocolHandlerUrl() {
  if (window.location.hostname.match('(\\.)+dweb\\.link')) {
    return 'https://dweb.link?uri=%s'
  }
  return `${window.location.origin}?uri=%s`
}

function registerProtocol() {
  const handlerUrl = getProtocolHandlerUrl()
  console.log('registerProtocolHandler', 'ipfs', handlerUrl)
  navigator.registerProtocolHandler('ipfs', handlerUrl, 'IPFS')
}

function unregisterProtocol() {
  const handlerUrl = getProtocolHandlerUrl()
  console.log('registerProtocolHandler', 'ipfs', handlerUrl)
  navigator.unregisterProtocolHandler('ipfs', handlerUrl)
}

export function App(props) {
  return (
    <div class="sans-serif pv3 ph3">
      <header class="lh-copy">
        <h1 class="ma0 fw6 f4">
          <a class="link black" href=".">dweb.link ✨🔗</a>
        </h1>
        <p class=" ma0 silver f5">Let's co-host the internet</p>
      </header>

      <section class="pt4 tc ">
        <div class='dib'>
          <p class="f3 fw4">Open <a class="link" href="ipfs://bafkreigh2akiscaildcqabsyg3dfr6chu3fgpregiymsck7e7aqa4s52zy"><code class="blue">ipfs://</code></a> links with <strong>dweb.link</strong></p>
          <button class="pv2 ph4 ba bg-blue b--white br2 white fw6 f4 pointer" onClick={registerProtocol}>Enable</button>
          {window.navigator.unregisterProtocolHandler ? (
            <button class="pv2 ph4 ba bg-gray b--white br2 white fw6 f4 ml4 pointer" onClick={unregisterProtocol}>Disable</button>
          ) : null}
        </div>
      </section>

      <section class="">
        <div class="browser ma4 center" style={{maxWidth: 900}}>
          <div class="browser-bar br-pill bg-near-white">
            <a class="link silver db center f5 fw4 pv3 ph3 br2 truncate" href="ipfs://bafkreigh2akiscaildcqabsyg3dfr6chu3fgpregiymsck7e7aqa4s52zy" target='_blank'>
              <span class="light-blue f5" style={{verticalAlign: 1}}>⬢ </span>
              <span class="code fw6 f6 blue ph1">ipfs://</span>
              <span class="">bafkreigh2akiscaildcqabsyg3dfr6chu3fgpregiymsck7e7aqa4s52zy</span>
              <span class="fr">✨🔗</span>
            </a>
          </div>
          <div class="browser-content mt2 bg-near-white">
            <iframe class="db w-100 bn bt b--silver" style={{height: 600}} src="ipfs://bafkreigh2akiscaildcqabsyg3dfr6chu3fgpregiymsck7e7aqa4s52zy"></iframe>
          </div>
        </div>
      </section>


      <section class="mw8 center pb5 ph5 mt6 bg-near-white f5 br2">

        <div class="pt5">
          <h2 class="fw4 f3 tc lh-copy">
            <a class="blue link fw4" href="https://ipfs.io">IPFS</a> let's us host files we care about, <a class="underline link black" href="https://docs.ipfs.io/concepts/what-is-ipfs/"><em class="fs-normal">together</em></a>.
          </h2>
          <div class="tc f2">
            🔗<br />
              ✨👯 🌐 👯✨<br />
              💕
          </div>
        </div>

        <div class="fw4 f3 tc lh-copy pt5">
          <p>
            IPFS links look like this
          </p>
          <a class="link blue db mw7 center f5 fw6 bg-white pv3 ph4 br2 truncate" href="ipfs://bafkreigh2akiscaildcqabsyg3dfr6chu3fgpregiymsck7e7aqa4s52zy">
            <code class="fw6 blue">ipfs://</code>bafkreigh2akiscaildcqabsyg3dfr6chu3fgpregiymsck7e7aqa4s52zy
          </a>
          <p class="fw4 f5 tc">
            It's <code class="fw6 blue">ipfs://</code> then the signature of the file, called it's <a class="link blue" href="https://docs.ipfs.io/concepts/content-addressing/">Content ID</a> ✨🔗.
          </p>
        </div>

        <div class="fw4 f3 tc lh-copy pt5">
          <p>An IPFS link let you fetch the file from anyone who has it</p>
          <div class="f1">
            💾 🤝 ✨
          </div>
          <p>and verify that it's the real thing.</p>
        </div>
      </section>


      <footer class="mt6">
        <h2 class="fw4 f5 silver tc">Let's co-host the internet ✨🔗</h2>
      </footer>
    </div>
  )
}
