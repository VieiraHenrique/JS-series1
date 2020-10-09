// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles

const run = document.getElementById('run');

run.addEventListener('click', ()=>{
    lib.getPosts(callback);
    function callback (err, articles) {
        console.log(articles);
    }
})