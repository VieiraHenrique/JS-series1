// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel

let gallery = [
    "bell.svg",
    "clock.svg",
    "compass.svg",
    "lemon.svg",
    "map.svg",
];

const next = document.getElementById('next');
const img = document.querySelector('.material figure img');

let pos = 1
next.addEventListener('click', () => {
    img.setAttribute('src', gallery[pos]);
    if (pos === gallery.length - 1) {
        pos = 0;
    } else {
        pos++;
    }
});