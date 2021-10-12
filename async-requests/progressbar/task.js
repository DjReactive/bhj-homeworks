const progress = document.getElementById( 'progress' );
document.getElementById("form").addEventListener('submit', e => {
  progress.value = 0;
  e.preventDefault();
  let formData = new FormData(document.forms.form);
  formData.append("file", file);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
  xhr.upload.addEventListener('progress', progressBar);
  xhr.addEventListener('loadend', loadingEnd);

  xhr.send(formData);
  return false;
});

function loadingEnd() {
  console.log('Загрузка завершена!');
}

function progressBar(event) {
  let percent = (event.loaded / event.total) * 100;
  progress.value = Math.floor(percent) / 100;
}
