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



________

Question 11

// Manipulating Objects in JavaScript
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    start: function() {
        console.log('Car started');
    }
};

// Manipulating Objects in JavaScript
let song = {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    releaseYear: 2020,
    play: function() {
        console.log(`Now playing: ${this.title} by ${this.artist}`);
    }
};

// Accessing Object Properties
console.log(song.title); // Outputs: Blinding Lights
console.log(song['artist']); // Outputs: The Weeknd

// Adding a New Property
song.genre = 'Pop';

// Modifying an Existing Property
song.releaseYear = 2021;

// Calling a Method
song.play(); // Outputs: Now playing: Blinding Lights by The Weeknd

-________



// Converting Object to JSON
let songJSON = JSON.stringify(song);
console.log(songJSON); // Outputs: {"title":"Blinding Lights","artist":"The Weeknd","album":"After Hours","releaseYear":2021,"genre":"Pop"}

// Manipulating JSON
let newSong = JSON.parse(songJSON);
console.log(newSong.album); // Outputs: After Hours
newSong.releaseYear = 2022; // Update release year
console.log(newSong); // Outputs: { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', releaseYear: 2022, genre: 'Pop' }