
let currentPage = 1;

function fetchPosts(page) {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
    .then(response => response.json())
    .then(posts => {
      document.body.innerHTML = '';
      posts.forEach(post => {
        document.body.innerHTML += `<p>${post.title}</p>`;
      });
      document.body.innerHTML += `
        <button onclick="changePage(-1)">Предыдущая страница</button>
        <button onclick="changePage(1)">Следующая страница</button>
      `;
    })
    .catch(error => console.error('Ошибка:', error));
}

function changePage(direction) {
  currentPage += direction;
  fetchPosts(currentPage);
}

fetchPosts(currentPage);
    