import 'virtual:windi.css'

import bgUrl from './img/bg.jpg'
import logoUrl from './img/logo.jpg'
document.querySelector('#main_bg').style.background = `url(${bgUrl})`
document.querySelector('#logo_bg').src = logoUrl

const links = document.querySelectorAll('.links')
const soon = document.querySelector('#soon')

links.forEach(el => {
  el.addEventListener('click', (event) => {
    const url = event.target.dataset.url
    if (url) {
      const a = document.createElement('a')
      a.target = '__blank'
      a.href = url
      a.click()
    }
    else {
      soon.style.display = ''
      setTimeout(() => {
        soon.style.display = 'none'
      }, 3500)
    }
  })
})