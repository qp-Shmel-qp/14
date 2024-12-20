
let timer;

document.getElementById('startButton').addEventListener('click', function() {
  timer = setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Ошибка:', error));
  }, 5000);
});

document.getElementById('cancelButton').addEventListener('click', function() {
  clearTimeout(timer);
});
    