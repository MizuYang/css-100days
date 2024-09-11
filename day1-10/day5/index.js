











const productA = document.querySelector('.parameter .red')
const productB = document.querySelector('.parameter .blue')
const redLine = document.querySelector('.container .red svg')
const blueLine = document.querySelector('.container .blue svg')

productA.addEventListener('mouseenter', addHightlight)
productA.addEventListener('mouseleave', removeHightlight)

productB.addEventListener('mouseenter', addHightlight)
productB.addEventListener('mouseleave', removeHightlight)

function addHightlight (e) {
  const isRed = [...e.target.classList].includes('red')
  // 改變折線高亮樣式
  isRed ? redLine.classList.add('heightlight')
  : blueLine.classList.add('heightlight')
  
  // 改變文字高亮樣式
  isRed ? productA.classList.add('heightlight')
  : productB.classList.add('heightlight')

}
function removeHightlight (e) {
  const isRed = [...e.target.classList].includes('red')
  // 改變折線高亮樣式
  isRed ? redLine.classList.remove('heightlight')
  : blueLine.classList.remove('heightlight')

  // 改變文字高亮樣式
  isRed ? productA.classList.remove('heightlight')
  : productB.classList.remove('heightlight')
}

