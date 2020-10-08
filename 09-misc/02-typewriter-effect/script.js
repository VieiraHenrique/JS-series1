// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect

function randInt(min, max) {
    // max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const target = document.getElementById('target')
let text = target.innerHTML;
target.innerHTML = ' ';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        target.innerHTML += text[i];
        i++;
        setTimeout(typeWriter, randInt(20, 60));
    }
}