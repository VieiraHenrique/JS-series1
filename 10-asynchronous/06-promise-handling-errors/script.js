// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


const run = document.getElementById('run');

run.addEventListener('click', ()=>{

    lib.getPersons()
    .then((i)=>{
        console.log(i);
    })
    .catch((i)=>{
        console.log(i)
        console.log('error')
    })

})
