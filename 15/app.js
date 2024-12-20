
const logError = (error) => {
    fetch('/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: error.message })
    });
  };
  
  fetch('https://jsonplaceholder.typicode.com/nonexistent')
    .catch(error => {
      logError(error);
      console.error('Ошибка:', error);
    });
      