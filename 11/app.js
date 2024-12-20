
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, userId: 1 })
    })
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML += `ID созданного поста: ${data.id}`;
      })
      .catch(error => console.error('Ошибка:', error));
  });
    