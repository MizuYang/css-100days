

let menuWrapper = null

document.addEventListener('DOMContentLoaded', () => {
  menuWrapper = document.querySelector('.menu-wrapper')
  if (menuWrapper) menuWrapper.addEventListener('click', menuToggle)

  //! 測試
  menuWrapper.classList.toggle('active')
  // menuWrapper.classList.add('line-cross-1-pre')
  
  setTimeout(() => {
    menuWrapper.classList.toggle('active')
    menuWrapper.classList.toggle('line-cross-1-pre')
    // setTimeout(() => {
    //   // menuWrapper.classList.toggle('active')
    //   menuWrapper.classList.remove('line-cross-1-pre')
    // }, 4500)
  }, 1000)
})


function menuToggle () {
  const line1 = document.querySelector('.line-1')
  const line2 = document.querySelector('.line-2')
  const line3 = document.querySelector('.line-3')
  // if (line1 && line2 && line3) {
  //   line1.classList.remove('no-animation')
  //   line2.classList.remove('no-animation')
  //   line3.classList.remove('no-animation')
  // }
  if (menuWrapper) menuWrapper.classList.toggle('active')
}

