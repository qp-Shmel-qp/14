
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
  const table = document.createElement('table');
  const header = table.createTHead();
  const row = header.insertRow();
  row.insertCell().textContent = 'Имя';
  row.insertCell().textContent = 'Email';
  row.insertCell().textContent = 'Город';

  const body = table.createTBody();
  users.forEach(user => {
    const row = body.insertRow();
    row.insertCell().textContent = user.name;
    row.insertCell().textContent = user.email;
    row.insertCell().textContent = user.address.city;
  });

  document.body.appendChild(table);
})
.catch(error => console.error('Ошибка:', error));
  