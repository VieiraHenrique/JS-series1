// 07-classes/03-inheritance/script.js - 7.3: inheritance



class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    static greeting = 'Meeeauw'
}
class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    static greeting = 'Wooof';
}

let duchesse = new Cat('Duchesse');
let frida = new Dog('Frida');

console.log(frida.sayHello())
console.log(duchesse.sayHello())