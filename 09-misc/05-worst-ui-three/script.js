// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

const target = document.getElementById('target');
const inputs = document.querySelectorAll('.slot input');

target.innerHTML = `0${inputs[0].value}-${inputs[1].value}.${inputs[2].value}.${inputs[3].value}`

function randInt(min, max) {
    // max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function doubleDigits(n) {
    n = parseInt(n);
    if (n <= 9) {
        return '0' + n;
    }
    return '' + n;
}

inputs.forEach((input) => {
    input.parentElement.querySelector('button').addEventListener('click', () => {
        input.value = randInt(parseInt(input.getAttribute('data-min')), parseInt(input.getAttribute('data-max')));
        target.innerHTML = `0${inputs[0].value}-${doubleDigits(inputs[1].value)}.${doubleDigits(inputs[2].value)}.${doubleDigits(inputs[3].value)}`
    })
})