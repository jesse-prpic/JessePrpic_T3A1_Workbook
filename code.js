// Creating a Playlist
let playlist = ['Track A', 'Track B', 'Track C'];

// Adding Tracks
playlist.push('Track D'); // Adds 'Track D' to the end
playlist.unshift('Track E'); // Adds 'Track E' to the beginning

// Removing Tracks
let lastTrack = playlist.pop(); // Removes and returns the last track ('Track D')
let firstTrack = playlist.shift(); // Removes and returns the first track ('Track E')

// Iterating Over the Playlist
playlist.forEach((track) => {
    console.log(track); // Logs each track
});

// Finding Tracks
let index = playlist.indexOf('Track B'); // Finds the index of 'Track B'
let longTracks = playlist.filter(track => track.length > 6); // Filters tracks with more than 6 characters

// Summary of playlist after manipulation
console.log('Current Playlist:', playlist); // Logs the current playlist
console.log('Index of Track B:', index); // Logs index of 'Track B'
console.log('Long Tracks:', longTracks); // Logs tracks with more than 6 characters

________

Question 11


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

_________



// Converting Object to JSON
let songJSON = JSON.stringify(song);
console.log(songJSON); // Outputs: {"title":"Blinding Lights","artist":"The Weeknd","album":"After Hours","releaseYear":2021,"genre":"Pop"}

// Manipulating JSON
let newSong = JSON.parse(songJSON);
console.log(newSong.album); // Outputs: After Hours
newSong.releaseYear = 2022; // Update release year
console.log(newSong); // Outputs: { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', releaseYear: 2022, genre: 'Pop' }