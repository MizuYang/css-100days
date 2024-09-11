





const btnMenu = document.querySelector('.btn-menu')
const container = document.querySelector('.container')
const menu = document.querySelector('.menu')

btnMenu.addEventListener('click', menuToggle)






function menuToggle () {
  container.classList.toggle('menu-show')
  menu.classList.toggle('menu-show')
}