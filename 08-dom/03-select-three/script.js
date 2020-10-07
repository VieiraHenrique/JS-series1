// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector

const target = document.querySelectorAll('.target');

target.forEach((e) => {
    e.innerHTML = 'owned';
})

target[2].innerHTML = 'specially selected... OWNED !'