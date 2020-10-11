// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


const run = document.getElementById('run');

run.addEventListener('click',()=>{

   fetch('http://127.0.0.1:3000/heroes')
   .then((response)=>{
    return response.json();
   })
   .then(data=>console.log(data))
   .catch(()=>{
    console.log('error')
   })

})