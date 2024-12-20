
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(user => {
  document.body.innerHTML += `
    <p>Имя: ${user.name}</p>
    <p>Email: ${user.email}</p>
    <p>Адрес: ${user.address.city}, ${user.address.street}</p>
  `;
})
.catch(error => console.error('Ошибка:', error));
  