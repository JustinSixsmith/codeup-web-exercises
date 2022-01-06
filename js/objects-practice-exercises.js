// Declare an array of two objects for movies
//     that have the following member values:
//     title (string)
// year released (int)
// rating (string)
// director (string)
// imdb rating (decimal)
// academy award win (boolean)
// Use imdb.com to look up the info or make up your own info
// write a printMovie function that takes a movie as a parameter and prints its info.
//     call it with each of your array elements.
//     write a printMovies function that takes an array as a parameter, iterates over the array, and calls printMovie on each of the array elements (edited)

let movies = [];

movies[0] = {
    title: "Strange Brew",
    year: 1983,
    rating: "PG",
    director: {
        firstName: "Rick",
        lastName: "Moranis"
    },
    IMDb: 6.7,
    oscar: false,
    genres: ["comedy", "drama"]
}

movies[1] = {
    title: "Tombstone",
    year: 1993,
    rating: "R",
    director: {
        firstName: "George",
        lastName: "Cosmatos"
    },
    IMDb: 7.8,
    oscar: false,
    genres: ["drama", "comedy"]
}

function printMovie(movie) {
    console.log("Title: " + movie.title);
    console.log("\tYear: " + movie.year);
    console.log("\tRating; " + movie.rating);
    console.log("\tDirector: ");
    printDir(movie);
    console.log("\tIMDb Rating: " + movie.IMDb);
    console.log("\tAcademy Award Winner: " + movie.oscar);
    console.log("\tGenres: ");
    printGenre(movie);
}


function printDir(movie) {
    console.log("\t\tFirst name: " + movie.director.firstName);
    console.log("\t\tLast name: " + movie.director.lastName);
}

function printGenre(movie) {
    console.log("\t\tMain genre: " + movie.genres[0]);
    console.log("\t\tSub genre: " + movie.genres[1]);
}





// printMovie(movies[1]);


function printMovies(movies) {

    for (let i = 0; i < movies.length; i++) {
        printMovie(movies[i]);
    }
}

printMovies(movies);

// Change the director member of your movies to an object
// with firstName and lastName members
// Make an array member for your movies called genres.
//     It is an array of string elements where each element
// is one of your movies’ genres from imdb.com
// and change your printMovie function
// please cupdate as you complete this ungraded practice exercise (edited)



// Add a rate(rating) function to each of your movie objects.
//     The function takes an int parameter called rating
// Modify rate(rating) to set a myRating property on that object
// modify printMovie to display myRating for each movie
// 15 minutes