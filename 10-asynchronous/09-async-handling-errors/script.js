// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)

const run = document.getElementById('run');

async function printPersons (getPersons) {
    try {
        const persons = await getPersons();
        console.log(persons);
    }
    catch {
        console.log('Could not fetch the data');
    }
}

run.addEventListener('click', ()=>{
    printPersons(lib.getPersons)
})