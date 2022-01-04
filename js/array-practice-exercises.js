
"use strict"

// Mini Exercise
// -Create an array with five strings representing your favorite artists (music or otherwise) and store it in a variable called favoriteArtists
// -Write a function that accepts an array as a parameter and...
// -> logs the first, third, and last elements of that array
// -Invoke your function and pass favoriteArtists as an argument


let favoriteArtists = ["Chris Coleman", "Danny Carey", "Dennis Chambers", "Dave Weckl", "Roger Carter"];

function favDrummers(someDudes) {
    console.log(someDudes[0], someDudes[2], someDudes[someDudes.length - 1]);
}

favDrummers(favoriteArtists);