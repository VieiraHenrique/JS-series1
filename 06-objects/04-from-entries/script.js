// 06-objects/04-from-entries/script.js - 6.4: fromEntries



const keys = ["name", "species", "age", "gender", "color"];
const values = ["Skitty", "cat", 9, "female", "tabby"];
///////////////////

function arrToObj(k, v) {
    let obj = {}
    /* for (let i = 0; i < keys.length; i++) {
        obj.k[i] = v[i];
    } */

    obj.k[0] = v[0];
    return obj
}




////////////////////
const run = document.getElementById('run');
run.addEventListener('click', () => {
    console.log(arrToObj(keys, values));
})