function greet(person) {
  return `Hello, ${person}!`;
}

console.log(greet('James Rooke'))

// Example of creating an object with a function as a property
const James = {
    name: 'James Rooke',
    greet() {
        return `Hello, ${this.name}!`;
    },
    age: 42,
    halfAgePlusSeven() {
        return this.age / 2 + 7;
    }  
}

console.log(James.name)
console.log(`Greeting: ${James.greet()}`)
console.log(`Age: ${James.age}`)
console.log(`Half Age Plus Seven Rule: ${James.halfAgePlusSeven()}`)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print(element) {
    console.log(element);
}

numbers.forEach(function (el) {
    console.log(el);
});

console.log('FOR OF LOOP');
for (let el of numbers) {
    console.log(el);
}

const doubles = numbers.map(function (num) {
    return num * 2;
});

console.log(doubles);

console.log(doubles[3]);

// ARROW FUNCTIONS
console.log('ARROW FUNCTIONS');
const square = (x) => {
    return x * x;
}

console.log(square(4));

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDie());

// Implicit Returns
console.log('IMPLICIT RETURNS');
const add = (a, b) => a + b;

console.log(add(3, 4));

// setTimeout
console.log('SET TIMEOUT');
setTimeout(() => {
    console.log('HELLO!')
}, 1000);

// setInterval
// console.log('SET INTERVAL');
// const id = setInterval(() => {
//     console.log(Math.random())
// }, 1500);

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000);
    }
}

person.shoutName();