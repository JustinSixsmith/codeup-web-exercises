// Write a function called count(input) that takes in a string and returns the number of characters.
//     Test to ensure this function will:
// return the accurate length of the string
// return a false in the event the argument given is not a string
// Account for: numbers, booleans, undefined, null

function count(aWord) {

    if (typeof aWord === "string") {
        return aWord.length;
    } else {
        return false;
    }
}
console.log(count("this is a string"));


function countTest() {

    console.log(count("word") === 4);
    console.log(count(4) === false);
    console.log(count(true) === false);
    console.log(count(undefined) === false);
    console.log(count(null) === false);
}
countTest();