// 11-fetch/04-add/script.js - 11.4: ajouter un élément

////////////// VARIABLES //////////////

const run = document.getElementById('run');
const heroName = document.getElementById('hero-name');
const alterEgo = document.getElementById('hero-alter-ego');
const powers = document.getElementById('hero-powers');

const url = 'http://127.0.0.1:3000/heroes';

run.addEventListener('click', postHero);

function postHero(){
    fetch(url, {
        method:'POST',
        headers: { 
            "Content-type": "application/json"
        } ,
        body: JSON.stringify ({
            name: heroName.value,
            alterEgo: alterEgo.value,
            abilities: [powers.value.split(',')]
        })
    })
    .then(response=>{return response.json()})
    .then(data=>{console.log(data)})
    .then(
        fetch(url)
        .then(response=>{return response.json()})
        .then(data=>{console.log(data)})
    )
}
