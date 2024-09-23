




const imgs = [...document.querySelectorAll('.pics img')] 

imgs.forEach(img => img.addEventListener('click', lightboxToggle))

function lightboxToggle (e) {
  e.target.classList.toggle('lightbox')
}
