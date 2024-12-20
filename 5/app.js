
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(user => {
  document.body.innerHTML += `<h2>${user.name}</h2>`;
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
})
.then(response => response.json())
.then(posts => {
  posts.forEach(post => {
    document.body.innerHTML += `<p>${post.title}</p>`;
  });
})
.catch(error => console.error('Ошибка:', error));
  