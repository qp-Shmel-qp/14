
const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => {
  controller.abort();
}, 3000);

fetch('https://jsonplaceholder.typicode.com/photos', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Запрос отменён из-за тайм-аута.');
    } else {
      console.error('Ошибка:', error);
    }
  });
    