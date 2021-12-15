// Write a function called count(input) that takes in a string and returns the number of characters.
//     Test to ensure this function will:
// return the accurate length of the string
// return a false in the event the argument given is not a string
// Account for: numbers, booleans, undefined, null

function count(aWord) {

    if (aWord === (typeof "string") {
        console.log(aWord.length);
    } else {
        console.log(false);
    }
}
count("word");

// function wordLengthTest() {
//
//     let wordLength = count(4);
//     console.log("Expect to return false when passed anything other than a string: " + (typeof wordLength);
// }