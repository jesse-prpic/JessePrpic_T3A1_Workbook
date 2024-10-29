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

________

Question Seven 

let songAvailable = true; // Boolean indicating if the song is available

// If the song is available, print a message
if (songAvailable) {
    console.log("Now playing your song!"); // Executes if songAvailable is true
}

_________

let genre = "pop"; // Variable storing the current song genre

// Check the genre and provide a recommendation
if (genre === "rock") {
    console.log("You might like to headbang!"); // Executes if genre is rock
} else if (genre === "jazz") {
    console.log("How about a smooth evening?"); // Executes if genre is jazz
} else if (genre === "pop") {
    console.log("Let's dance to some upbeat tunes!"); // Executes if genre is pop
} else {
    console.log("Enjoy the music!"); // Default action for other genres
}

____________

For Loops

let playlist = ["Song 1", "Song 2", "Song 3"]; // An array of song titles

// Loop through each song in the playlist
for (let i = 0; i < playlist.length; i++) {
    console.log("Now playing: " + playlist[i]); // Print the current song
}

____________

While Loops

let songIndex = 0; // Index to keep track of the current song

// Loop until all songs in the playlist have been played
while (songIndex < playlist.length) {
    console.log("Now playing: " + playlist[songIndex]); // Print the current song
    songIndex++; // Increment the index to move to the next song
}

______________

Do While Loops

let playCount = 0; // Count of how many times to play songs

// Play a song at least once
do {
    console.log("Playing song " + (playCount + 1)); // Print the play count
    playCount++; // Increment play count
} while (playCount < 3); // Loop until played 3 times

______________

For...of and For...in Loops

let songDurations = { "Song 1": 180, "Song 2": 240, "Song 3": 210 }; // Object with song durations

// Loop through each song and its duration
for (let song in songDurations) {
    console.log(song + " duration: " + songDurations[song] + " seconds"); // Print song duration
}
____________
Logical Operators 

let likesPop = true;  // User likes pop music
let likesRock = false; // User does not like rock music

// Check user preferences to create a playlist
if (likesPop && likesRock) {
    console.log("Creating a mixed playlist of Pop and Rock!"); // Both genres liked
} else if (likesPop || likesRock) {
    console.log("Creating a playlist based on your favorite genre!"); // At least one genre liked
} else {
    console.log("How about a playlist of trending songs?"); // No genres liked
}
