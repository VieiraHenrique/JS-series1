// 09-misc/01-waving-text/script.js - 9.1: waving text


const target = document.querySelector('#target');

function randInt(min, max) {
    // max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

arr = ['WWOOOoohh ', 'HAaaeiiii ', 'GLUAAAA ', 'Ippiiyy ']

function addText(n) {
    for (let i = 0; i < n; i++) {
        let tempText = document.createElement('span');
        tempText.innerHTML = arr[randInt(0, arr.length - 1)]
        tempText.style.fontSize = `${randInt(10, 100)}px`
        target.appendChild(tempText);
    }
}

addText(10);