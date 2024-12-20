
fetch('https://api.publicapis.org/entries')
.then(response => response.json())
.then(data => {
  const randomAPIs = data.entries.slice(0, 5);
  randomAPIs.forEach(api => {
    document.body.innerHTML += `<p>${api.API}: ${api.Description} (${api.Category})</p>`;
  });
})
.catch(error => console.error('Ошибка:', error));
  