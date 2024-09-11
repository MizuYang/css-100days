





const btnMenu = document.querySelector('.btn-menu')
const container = document.querySelector('.container')
const menu = document.querySelector('.menu')
const btnSearch = document.querySelector('.btn-search')
const searchInput = document.querySelector('.search-input')

btnMenu.addEventListener('click', menuToggle)
btnSearch.addEventListener('click', searchInputToggle)

function menuToggle () {
  container.classList.toggle('menu-show')
  menu.classList.toggle('menu-show')
}
function searchInputToggle () {
  searchInput.classList.toggle('search-input-show')
  if(searchInput.classList.contains('search-input-show')) {
    searchInput.focus()
  }
}