// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    let opOne = document.getElementById("op-one");
    let opTwo = document.getElementById("op-two");




    document.getElementById("addition").addEventListener("click", function () {
        // perform an addition
        alert(parseInt(opOne.value) + parseInt(opTwo.value))

    });

    document.getElementById("substraction").addEventListener("click", function () {
        // perform an substraction
        alert(parseInt(opOne.value) - parseInt(opTwo.value))
    });

    document.getElementById("multiplication").addEventListener("click", function () {
        // perform an multiplication
        alert(parseInt(opOne.value) * parseInt(opTwo.value))
    });

    document.getElementById("division").addEventListener("click", function () {
        // perform an division
        alert(parseInt(opOne.value) / parseInt(opTwo.value))
    });
})();