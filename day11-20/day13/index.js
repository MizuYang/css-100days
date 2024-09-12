












const masks = [...document.querySelectorAll('.mask')]
const doorTop = document.querySelector('.door-top')
const doorBottom = document.querySelector('.door-bottom')
const btnClose = document.querySelector('.btn-close')
const info = document.querySelector('.info')

masks.forEach(el => el.addEventListener('click', doorShowToggle))

btnClose.addEventListener('click', doorShowToggle)

function doorShowToggle() {
  doorTop.classList.toggle('show')
  doorBottom.classList.toggle('show')
  info.classList.toggle('show')
}

