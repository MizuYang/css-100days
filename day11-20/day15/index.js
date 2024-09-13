








const btnUpload = document.querySelector('.btn-upload')
const uploadInput = document.querySelector('.upload-input')
const uploadLabel = document.querySelector('.upload-label')


btnUpload.addEventListener('click', upload)

function upload () {
  console.log('uploadInput', uploadInput.value)
  if (uploadInput.value) {
    btnUpload.textContent = 'Upload file'
    btnUpload.classList.remove('is-invalid')
    uploadLabel.classList.remove('is-invalid')
  } else {
    btnUpload.textContent = 'No file selected!'
    btnUpload.classList.add('is-invalid')
    uploadLabel.classList.add('is-invalid')
  }

    // No file selected!
}


