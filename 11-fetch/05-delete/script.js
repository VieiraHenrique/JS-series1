// 11-fetch/05-delete/script.js - 11.5: supprimer un élément

const run = document.getElementById('run');
const input = document.getElementById('hero-id');
const url = 'http://127.0.0.1:3000/heroes/1';

run.addEventListener('click', delItem);

function delItem() {

    const url = `http://127.0.0.1:3000/heroes/${input.value}`;

    fetch(url, {
        method: 'DELETE',
        headers: { 
            "Content-type": "application/json"
        },
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
}