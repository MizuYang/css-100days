



const btnLose = document.querySelector('.btn-lose')
const btnAdd = document.querySelector('.btn-add')
const countText = document.querySelector('.count')

let count = 0

btnLose.addEventListener('click', clickHandler)
btnAdd.addEventListener('click', () => clickHandler('add'))

function clickHandler (action) {
  action === 'add' ? 
    count++ :
    count--

  countText.textContent = count
  countText.classList.add('animate')
  setTimeout(() => {countText.classList.remove('animate')}, 100)
}



