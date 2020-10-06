// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


const people = new Set([
    "Nicolas",
    "Nick",
    "Leny",
    "Alexandre",
    "Charlène",
    "Laureline",
    "Esther",
    "Simon",
    "Lucas",
]);

// your code here

const run = document.getElementById('run');
run.addEventListener('click', () => {

    console.log(people.size);

    if (people.has('Alexandre')) {
        console.log('Alexandre is part of the set');
    } else {
        console.log('Alexandre is not part of the set');
    }
})