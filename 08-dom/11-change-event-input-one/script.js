// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)

const password = document.getElementById('pass-one');
const counter = document.getElementById('counter');
let maxLength = 15;
password.setAttribute('maxlength', maxLength);
counter.innerText = `${password.value.length}/${maxLength}`;

password.addEventListener('input', () => {
    counter.innerText = `${password.value.length}/${maxLength}`;
    count++;
})