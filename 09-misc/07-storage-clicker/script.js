// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


const increment = document.getElementById('increment');
const target = document.getElementById('target');

let count = localStorage.getItem('number');
if (count == undefined) {
    count = 0;
}

target.innerHTML = count;

increment.addEventListener('click', () => {

    count++;
    target.innerHTML = count;
    localStorage.setItem('number', count);
})