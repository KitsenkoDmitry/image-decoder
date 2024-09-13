
const base64RegExp = /[a-z0-9+/]{10,}/gi

export function setupDecoder(textarea: HTMLTextAreaElement, container: HTMLElement ) {
  const cleanContainer = () => {
     container.innerHTML = ''
  }

  document.getElementById('clear')?.addEventListener('click', () => {
    textarea.value = ''
    cleanContainer()
  })

  textarea.addEventListener('input', (e: any) => {
    const value = (e.target?.value || '').trim()
    const base64string = value.match(base64RegExp)[0]

    if(!base64string) return

    const src = 'data:image/png;base64,' + base64string
    const img = document.createElement('img')
    img.src = src
    
    cleanContainer()
    container.append(img)
  })
}
