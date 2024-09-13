import './style.css'

import { setupDecoder } from './decoder.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Base64 PNG Image decoder</h1>
   
    <div>
      <label for="textarea">Paste data here</label>
      <button id="clear">Clear</button>
    </div>
    <textarea id="textarea" rows="10"></textarea>

    <div id="image-container"></div>
  </div>
`

setupDecoder(document.querySelector<HTMLTextAreaElement>('#textarea')!,
document.getElementById('image-container')!)
