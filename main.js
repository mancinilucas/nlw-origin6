// abre e fecha o menu quando clica no icone //
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const elemento of toggle) {
  elemento.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// quando clica em um item do menu, esconder menu //
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// mudar o header da página quando der scroll //
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
