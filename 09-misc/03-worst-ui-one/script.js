// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


const slider = document.getElementById('slider');
const target = document.getElementById('target');

slider.addEventListener('input', () => {
    target.innerText = `0${slider.value}`
})