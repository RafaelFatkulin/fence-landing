const burgerBtn = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const header = document.querySelector('header')
const menuLinks = document.querySelectorAll('.menu-link')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger-active')
  menu.classList.toggle('menu-active')
  header.classList.toggle('header-active')
  document.body.classList.toggle('overflow-hidden')
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-active')
    menu.classList.toggle('menu-active')
    document.body.classList.toggle('overflow-hidden')
  })
})
