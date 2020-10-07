// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


const run = document.getElementById('run');

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get name() {
        return this.firstname + ' ' + this.lastname;
    }

    set name(name) {
        const parts = name.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}


run.addEventListener('click', () => {
    let henrique = new Person('Henrique', 'Vieira');
    console.log(henrique.name);
    henrique.name = 'John Doe';
    console.log(henrique.firstname + ' ' + henrique.lastname);
})