import './style.css'

import { setupDecoder } from './decoder.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="main">
    <h1>Base64 PNG Image decoder</h1>
   
    <div class="stack">
      <label for="textarea">Paste base64 string here:</label>
      <button id="clear">Clear</button>
    </div>
    <textarea id="textarea" rows="5"></textarea>

    <div id="image-container" class="image"></div>
  </main>
`

setupDecoder(
  document.querySelector<HTMLTextAreaElement>('#textarea')!,
  document.getElementById('image-container')!
)
