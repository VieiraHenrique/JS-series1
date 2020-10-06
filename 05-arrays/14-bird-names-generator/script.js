// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


const birds = [{
        name: "mouette",
        fem: true
    },
    {
        name: "corbeau"
    },
    {
        name: "mésange",
        fem: true
    },
    {
        name: "hibou"
    },
    {
        name: "buse",
        fem: true
    },
    {
        name: "pigeon"
    },
    {
        name: "pie",
        fem: true
    },
    {
        name: "vautour"
    },
    {
        name: "faucon"
    },
    {
        name: "rouge-gorge"
    },
    {
        name: "tourterelle",
        fem: true
    },
    {
        name: "corneille",
        fem: true
    },
];
const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
]);

////////////////////////

function randInt(min, max) {
    // max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function randomAnimal() {
    let bird = birds[randInt(0, birds.length - 1)];
    let adjArr = [...adjectives];
    let adj = adjArr[randInt(0, adjArr.length - 1)];

    if (bird.fem) {
        return `La ${bird.name} ${adj}e`
    } else {
        return `Le ${bird.name} ${adj}`
    }
}


///////////////////////

const run = document.getElementById('run');
const target = document.getElementById('target');

run.addEventListener('click', () => {
    console.log(randomAnimal())
})