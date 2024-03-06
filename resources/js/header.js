const burgerBtn = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const header = document.querySelector('header')

const activeMenuClass = 'hidden'

menu.style.top = `${header.offsetHeight}px !important`
menu.style.height = window.screen.height - header.offsetHeight + 'px'
console.log(menu.style.top, `${header.offsetHeight}px !important`)

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger-active')
  menu.classList.toggle(activeMenuClass)
})
