//07-classes/02-methods/script.js - 7.2: methods


class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        return `Hello, ${this.firstname} ${this.lastname}`;
    }
}

const run = document.getElementById('run');

run.addEventListener('click', () => {
    let henrique = new Person('Henrique', 'Vieira');
    console.log(henrique.sayHello())
})