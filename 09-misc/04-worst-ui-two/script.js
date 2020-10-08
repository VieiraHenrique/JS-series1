// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker

// VARIABLES
const target = document.getElementById('target');
const buttons = document.querySelectorAll('.actions button');

const btnOne = buttons[0];
const btnTwo = buttons[1];
const btnThree = buttons[2];
const btnFour = buttons[3];

let btnOneVal = parseInt(btnOne.getAttribute('data-min'));
let btnTwoVal = parseInt(btnTwo.getAttribute('data-min'));
let btnThreeVal = parseInt(btnThree.getAttribute('data-min'));
let btnFourVal = parseInt(btnFour.getAttribute('data-min'));

target.innerHTML = `0${btnOne.innerHTML}-${btnTwo.innerHTML}.${btnThree.innerHTML}.${btnFour.innerHTML}`

function doubleDigits(n) {
    if (n <= 9) {
        return '0' + n;
    } else {
        return '' + n;
    }
}

btnOne.addEventListener('click', () => {
    if (btnOneVal < parseInt(btnOne.getAttribute('data-max'))) {
        btnOneVal++;
        btnOne.innerHTML = doubleDigits(btnOneVal);
        target.innerHTML = `0${btnOne.innerHTML}-${btnTwo.innerHTML}.${btnThree.innerHTML}.${btnFour.innerHTML}`
    }
})

btnTwo.addEventListener('click', () => {
    if (btnTwoVal < parseInt(btnTwo.getAttribute('data-max'))) {
        btnTwoVal++;
        btnTwo.innerHTML = doubleDigits(btnTwoVal);
        target.innerHTML = `0${btnOne.innerHTML}-${btnTwo.innerHTML}.${btnThree.innerHTML}.${btnFour.innerHTML}`
    }
})

btnThree.addEventListener('click', () => {
    if (btnThreeVal < parseInt(btnThree.getAttribute('data-max'))) {
        btnThreeVal++;
        b3 = doubleDigits(btnThreeVal)
        btnThree.innerHTML = b3;
        target.innerHTML = `0${btnOne.innerHTML}-${btnTwo.innerHTML}.${btnThree.innerHTML}.${btnFour.innerHTML}`
    }
})

btnFour.addEventListener('click', () => {
    if (btnFourVal < parseInt(btnFour.getAttribute('data-max'))) {
        btnFourVal++;
        btnFour.innerHTML = doubleDigits(btnFourVal);
        target.innerHTML = `0${btnOne.innerHTML}-${btnTwo.innerHTML}.${btnThree.innerHTML}.${btnFour.innerHTML}`
    }
})