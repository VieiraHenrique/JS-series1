// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


const run = document.getElementById('run');

run.addEventListener('click', ()=> {

    lib.getPosts(callbackPost);

    function callbackPost(err, articles) {

        articles.forEach((art)=> {
            lib.getComments(art.id, callbackComm);

            function callbackComm(err, comms) {
                art.comments = comms;
                console.log(art)
            }

        })
    }

    
})