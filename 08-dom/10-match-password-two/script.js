// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)

const passOne = document.getElementById('pass-one');
const passTwo = document.getElementById('pass-two');
const run = document.getElementById('run');

function checkPass(pass1, pass2) {
    if (pass1.value !== pass2.value) {
        pass1.classList.add('error');
        pass2.classList.add('error');
    }
}

run.addEventListener('click', () => {
    checkPass(passOne, passTwo);
})