
fetch('https://via.placeholder.com/150')
.then(response => response.blob())
.then(imageBlob => {
  const img = document.createElement('img');
  img.src = URL.createObjectURL(imageBlob);
  document.body.appendChild(img);

  const downloadBtn = document.createElement('a');
  downloadBtn.href = img.src;
  downloadBtn.download = 'image.png';
  downloadBtn.textContent = 'Скачать';
  document.body.appendChild(downloadBtn);
})
.catch(error => console.error('Ошибка:', error));
  