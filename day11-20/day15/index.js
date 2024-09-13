








const btnUpload = document.querySelector('.btn-upload')
const uploadInput = document.querySelector('.upload-input')
const uploadLabel = document.querySelector('.upload-label')
const uploadFileName = document.querySelector('.upload-file-name')
const progressBar = document.querySelector('.progress-bar')


btnUpload.addEventListener('click', upload)
uploadInput.addEventListener('change', checkFile)

function upload (e) {
  const result = checkFile(e)
  if (result) uploading()
}

function checkFile (e) {
  let result = false
  if (uploadInput.value) {
    if (e.target.files) {
      uploadFileName.textContent = e.target.files[0].name
    }
    btnUpload.textContent = 'Upload file'
  
    uploadLabel.classList.add('is-valid')
    
    uploadLabel.classList.remove('is-invalid')
    btnUpload.classList.remove('is-invalid')
    result = true
  } else {
    uploadFileName.textContent = '未上傳任何檔案'
    btnUpload.textContent = 'No file selected!'
    btnUpload.classList.add('is-invalid')
    uploadLabel.classList.add('is-invalid')
  
    uploadLabel.classList.remove('is-valid')
    result = false
  }
  return result
}
function uploading () {
  progressBar.classList.add('is-valid')
}
