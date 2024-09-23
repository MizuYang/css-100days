




const checkbox = document.querySelector('.checkbox')
const menu = document.querySelector('.menu')
const links = [...document.querySelectorAll('.menu a')]

links.forEach(el => el.addEventListener('click', menuToggle))
menu.addEventListener('click', removeAnimationNone)

function removeAnimationNone () {
  if (menu) menu.classList.remove('animation-none')
}

function menuToggle () {
  if (checkbox) checkbox.checked = !checkbox.checked
}
