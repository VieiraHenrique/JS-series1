// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


const source = document.getElementById('source');
const src = source.getAttribute('data-image')

const target = document.getElementById('target');

target.innerHTML = `<img src="${src}"></img>`;

source.parentNode.removeChild(source);