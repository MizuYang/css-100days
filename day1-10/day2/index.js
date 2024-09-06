

let menuWrapper = null

document.addEventListener('DOMContentLoaded', () => {
  menuWrapper = document.querySelector('.menu-wrapper')
  if (menuWrapper) menuWrapper.addEventListener('click', menuToggle)
})


function menuToggle () {
  if (menuWrapper) {
    const childrens = [...menuWrapper.children]
    childrens.forEach(el => el.classList.remove('no-animatetion'))

    menuWrapper.classList.toggle('active')
  }
}


