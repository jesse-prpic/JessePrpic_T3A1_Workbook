// Creating an Array
let fruits = ['apple', 'banana', 'cherry'];

// Adding Elements
fruits.push('date'); // Adds 'date' to the end
fruits.unshift('elderberry'); // Adds 'elderberry' to the beginning

// Removing Elements
let lastFruit = fruits.pop(); // Removes and returns the last element ('date')
let firstFruit = fruits.shift(); // Removes and returns the first element ('elderberry')

// Iterating Over an Array
fruits.forEach((fruit) => {
    console.log(fruit); // Logs each fruit
});

// Finding Elements
let index = fruits.indexOf('banana'); // Finds the index of 'banana'
let longFruits = fruits.filter(fruit => fruit.length > 5); // Filters fruits with more than 5 characters

// Summary of fruits after manipulation
console.log('Current Fruits:', fruits); // Logs the current fruits
console.log('Index of banana:', index); // Logs index of 'banana'
console.log('Long Fruits:', longFruits); // Logs fruits with more than 5 characters