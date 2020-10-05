// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {


    const run = document.getElementById('run');
    const body = document.body;

    function randInt(min, max) {
        // max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function randRGB() {
        return `rgb(${randInt(1,255)},${randInt(1,255)},${randInt(1,255)})`
    }
    // your code here

    run.addEventListener('click', function () {
        body.style.background = randRGB();
    })

})();