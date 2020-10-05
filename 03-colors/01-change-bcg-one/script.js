// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here
    const body = document.getElementById('body');
    const red = document.getElementById('red');
    const blue = document.getElementById('blue');
    const green = document.getElementById('green');
    const yellow = document.getElementById('yellow');

    red.addEventListener('click', function () {
        body.style.background = 'red';
    })
    blue.addEventListener('click', function () {
        body.style.background = 'blue';
    })
    green.addEventListener('click', function () {
        body.style.background = 'green';
    })
    yellow.addEventListener('click', function () {
        body.style.background = 'yellow';
    })

})();