
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Учебный пост',
    body: 'Это пример POST-запроса.',
    userId: 2
  })
})
  .then(response => response.json())
  .then(data => {
    document.body.innerHTML += `Пост создан: ${data.title}`;
  })
  .catch(error => console.error('Ошибка:', error));
    