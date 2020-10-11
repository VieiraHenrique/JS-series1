const run = document.getElementById('run');
const target = document.getElementById('target');
const template = document.getElementsByTagName('template')[0];

run.addEventListener('click', ()=>{

    fetch('http://127.0.0.1:3000/heroes')
    .then((response)=>{
        return response.json();
    })
    .then ((data)=>{
        displayInfo(data);
    })

})

function displayInfo(data) {
    for (let i = 0 ; i < data.length ; i++) {
        let divHero = document.createElement('div');
        divHero.innerHTML = template.innerHTML;
        target.appendChild(divHero);
        divHero.querySelector('.name').innerText = data[i].name;
        divHero.querySelector('.alter-ego').innerText = data[i].alterEgo;
        divHero.querySelector('.powers').innerText = data[i].abilities;
    }
}