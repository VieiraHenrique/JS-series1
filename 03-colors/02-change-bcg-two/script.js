// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // your code here
    const body = document.body;
    const input = document.getElementById('color');
    const run = document.getElementById('run');

    run.addEventListener('click', function () {
        body.style.background = input.value;
    })



})();