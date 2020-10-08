// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)

const passOne = document.getElementById('pass-one');
const passTwo = document.getElementById('pass-two');
const run = document.getElementById('run');

function checkPass(pass1, pass2) {
    if (pass1.value === pass2.value) {
        greenBox(pass1)
        greenBox(pass2);
    } else {
        redBox(pass1);
        redBox(pass2)
    }
}

function greenBox(box) {
    box.style.border = '2px solid green'
}

function redBox(box) {
    box.style.border = '2px solid red'
}

run.addEventListener('click', () => {
    checkPass(passOne, passTwo)
})