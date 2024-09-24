




const card = document.querySelector('.card')
const btnClose = document.querySelector('.btn-close')

btnClose.addEventListener('click', cardHide)

function cardHide () {
  if (card) card.classList.add('hide')
}