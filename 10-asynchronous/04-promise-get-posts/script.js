// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)

const run = document.getElementById('run');

run.addEventListener('click', ()=>{

    lib.getPosts()
    .then((i)=> {
        console.log(i);
    })
    .catch(()=>{
        console.log('could not fetch data')
    })

})