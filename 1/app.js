
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
  const userList = document.createElement('ul');
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
  });
  document.body.appendChild(userList);
})
.catch(error => console.error('Ошибка:', error));
  