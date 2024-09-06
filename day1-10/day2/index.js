

let menuWrapper = null

document.addEventListener('DOMContentLoaded', () => {
  menuWrapper = document.querySelector('.menu-wrapper')
  if (menuWrapper) menuWrapper.addEventListener('click', menuToggle)
})


function menuToggle () {
  if (menuWrapper) menuWrapper.classList.toggle('active')
}
