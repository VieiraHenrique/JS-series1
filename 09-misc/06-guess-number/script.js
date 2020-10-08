// 09-misc/06-guess-number/script.js - 9.6: guess the number

function randInt(min, max) {
    // max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const x = randInt(1, 100);
console.log(x);
let guess = prompt('Guess a number between 1 and 100 :');
let count = 1;

while (true) {
    if (parseInt(guess) === x) {
        alert(`Great ! You got it ! The number is ${x} \n You needed ${count} guesses`)
        break
    } else {
        count++;
        if (guess > x) {
            guess = prompt('Too high. Try again');
        } else {
            guess = prompt('Too low. Try again');
        }
    }
}