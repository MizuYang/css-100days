








const btnUpload = document.querySelector('.btn-upload')
const uploadInput = document.querySelector('.upload-input')


btnUpload.addEventListener('click', upload)

function upload () {
  console.log('uploadInput', uploadInput.value)
  if (uploadInput.value) {
    btnUpload.classList.remove('is-invalid')
    btnUpload.textContent = 'Upload file'
  } else {
    btnUpload.classList.add('is-invalid')
    btnUpload.textContent = 'No file selected!'
  }

    // No file selected!
}


