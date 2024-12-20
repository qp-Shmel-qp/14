fetch('https://jsonplaceholder.typicode.coa/posts/l', {
    method:	'PUT',
    headers:{
        'Content-Type': 'application/json',
        },
        body: JS0N.stringify({
        "id": 1,
        "title": "Обновлённый заголовок",
        "body": "Обновлённый текст поста",
        "userId": 1
    }),
})
.then(response => response.json())
.then(data => console.log(data));
    