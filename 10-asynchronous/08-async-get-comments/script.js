// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)

const run = document.getElementById('run');

async function getPostsWithComments (getPosts, getComments) {
    const posts = await getPosts();
    posts.forEach(async (post)=>{
        post.comments = await getComments(post.id);
    })
    console.log(posts)
}

run.addEventListener('click', ()=> {
    getPostsWithComments(lib.getPosts, lib.getComments);
})