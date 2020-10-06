// 05-arrays/01-get-element/script.js - 5.1: item in array

(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here

    const run = document.getElementById('run');

    run.addEventListener('click', function () {
        console.log(fruits[3]);
    })

})();