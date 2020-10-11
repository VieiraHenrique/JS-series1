// 11-fetch/03-details/script.js - 11.3: details


const run = document.getElementById('run');
const target = document.getElementById('target');
const template = document.getElementsByTagName('template')[0];
const idSelect = document.getElementById('hero-id');

run.addEventListener('click', ()=>{

    fetch('http://127.0.0.1:3000/heroes')
    .then((response)=>{
        return response.json();
    })
    .then ((data)=>{
        displayHero(data);
    })

})

function displayHero(data) {
    let divHero = document.createElement('div');
    divHero.innerHTML = template.innerHTML;
    divHero.querySelector('.name').innerText = data[idSelect.value].name;
    divHero.querySelector('.alter-ego').innerText = data[idSelect.value].alterEgo;
    divHero.querySelector('.powers').innerText = data[idSelect.value].abilities;
    target.appendChild(divHero);
}