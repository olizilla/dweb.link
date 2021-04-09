import { Logo } from './logo'

function registerProtocol () {
  console.log('registerProtocol')
  
  navigator.registerProtocolHandler(
    'ipfs',
    `${window.location.origin}/ipfs/?uri=%s`,
    'IPFS'
  );
}

function unregisterProtocol () {
  navigator.unregisterProtocolHandler('ipfs', `${window.location.origin}/ipfs/?uri=%s`)
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
          <button class="pv2 ph4 ba bg-blue b--white br2 white fw6 f4" onClick={registerProtocol}>Enable</button>
          <button class="pv2 ph4 ba bg-gray b--white br2 white fw6 f4 ml4" onClick={unregisterProtocol}>Disable</button>
        </div>
      </section>

      <section class="mw8 center pb5 ph5 mt6 bg-near-white f5 br2">

        <div class="pt5">
          <h2 class="fw4 f3 tc lh-copy">
            <a class="blue link fw4" href="https://ipfs.io">IPFS</a> let's us host files we care about, <a class="underline link black" href="https://docs.ipfs.io/concepts/what-is-ipfs/"><em class="fs-normal">together</em></a>.
          </h2>
          <div class="tc f2">
            🔗<br/>  
              ✨👯 🌐 👯✨<br/>
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
