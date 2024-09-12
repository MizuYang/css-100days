












const masks = [...document.querySelectorAll('.mask')]
const doorTop = document.querySelector('.door-top')
const doorBottom = document.querySelector('.door-bottom')

masks.forEach(el => el.addEventListener('click', doorShowToggle))

function doorShowToggle() {
  doorTop.classList.toggle('show')
  doorBottom.classList.toggle('show')
}

