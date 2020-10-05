// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE



    /* function talk() {
        let age = prompt('How old are you?');
        let gender = prompt('What gender do you identify with ?');
        let town = prompt('Where do you live ?');

        let isCorrect = prompt(`Here are your information, is it correct ? \n Age: ${age} \n Gender: ${gender} \n Town: ${town}`);
        if (isCorrect === 'no') {
            talk()
        } else {
            alert('Good, then!')
        }
    }

    talk() */

    function ask() {
        let age = prompt("quel est ton age ?");
        let genre = prompt("quel est ton sexe ?");
        let city = prompt("Dans quel ville vis tu ?");

        while (true) {

            if (confirm(`${age}, ${genre} and ${city}. Is it correct ?`)) {
                alert('cool');
                break
            } else {
                alert('pas cool');
                ask();
            }
        }
    }

    ask()





})();