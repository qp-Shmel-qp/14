
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      document.body.innerHTML += 'Пост успешно удалён.';
    }
  })
  .catch(error => console.error('Ошибка:', error));