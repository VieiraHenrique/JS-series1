// 08-dom/05-hover-image/script.js - 8.5: image hover


const img = document.querySelector('.material figure img');
const original = document.querySelector('.material figure img').getAttribute('src');

img.addEventListener('mouseover', () => {
    img.setAttribute('src', img.getAttribute('data-hover'));
})

img.addEventListener('mouseout', () => {
    img.setAttribute('src', original);
})