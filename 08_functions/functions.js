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
