








const btnUpload = document.querySelector('.btn-upload')
const uploadInput = document.querySelector('.upload-input')
const uploadLabel = document.querySelector('.upload-label')
const uploadFileName = document.querySelector('.upload-file-name')


btnUpload.addEventListener('click', upload)
uploadInput.addEventListener('change', upload)

function upload (e) {
  checkFile(e)
  uploading()
}

function checkFile (e) {
  if (uploadInput.value) {
    if (e.target.files) {
      uploadFileName.textContent = e.target.files[0].name
    }
    btnUpload.textContent = 'Upload file'
  
    uploadLabel.classList.add('is-valid')
    
    uploadLabel.classList.remove('is-invalid')
    btnUpload.classList.remove('is-invalid')
  } else {
    uploadFileName.textContent = '未上傳任何檔案'
    btnUpload.textContent = 'No file selected!'
    btnUpload.classList.add('is-invalid')
    uploadLabel.classList.add('is-invalid')
  
    uploadLabel.classList.remove('is-valid')
  }
}
function uploading () {
  
  setTimeout(() => {
    
  }, 3000);
}
