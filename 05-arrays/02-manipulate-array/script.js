// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    console.log(fruits)

    const run = document.getElementById('run');

    run.addEventListener('click', function () {
        fruits.shift();
        fruits.pop();
        fruits.unshift('banana');
        fruits.push('kiwi');
        console.log(fruits);

    })

})();