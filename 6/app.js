
fetch('https://jsonplaceholder.typicode.com/nonexistent')
.then(response => {
  if (!response.ok) {
    throw new Error('Ресурс не найден (код 404)');
  }
  return response.json();
})
.catch(error => {
  document.body.innerHTML += `Ошибка: ${error.message}`;
}); 
  