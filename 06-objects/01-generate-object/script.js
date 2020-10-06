// 06-objects/01-generate-object/script.js - 6.1: genererate an object

const run = document.getElementById('run');
run.addEventListener('click', () => {
    let me = {
        firstname: 'Henrique',
        lastname: 'Vieira',
        age: 32,
        city: 'Brussels',
        country: 'Belgium'
    }
    console.log(me);
    console.log(`Hi ! I am ${me.firstname} ${me.lastname}. I am ${me.age} years old and I live in ${me.city}, ${me.country}. Nice to meet you !`);
})