




const checkbox = document.querySelector('.checkbox')
const links = [...document.querySelectorAll('.menu a')]

links.forEach(el => el.addEventListener('click', menuToggle))

function menuToggle () {
  if (checkbox) checkbox.checked = !checkbox.checked
}
