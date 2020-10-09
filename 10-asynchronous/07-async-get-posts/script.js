// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


const run = document.getElementById('run');

async function posts (request) {
    const response = await request();
    console.log(response);
}

run.addEventListener('click', ()=>{
    
    posts(lib.getPosts);

})