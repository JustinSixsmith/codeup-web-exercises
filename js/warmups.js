// Using the two provided variables, create a piece of logic which will determine if a person is qualified to be extended an auto loan.
//     Requirements:
// Their credit score must be over 680 AND have at least $4000 on-hand
// OR, they must have at least $10000 on-hand
// Scenario:
//     I have $12000 on-hand but have a 590 credit score. I get a loan.
//     I have $5000 on-hand with a 720 credit score. I get a loan
// I have $3000 on-hand with a 720 credit score. I do not get a loan.
//     I have $9000 on-hand with a 590 credit score. I do not get a loan.
//     var creditScore = 720;
// var cashOnHand = 5000;

// let creditScore = 720;
// let cashOnHand = 5000;
//
// if (creditScore >= 680 && cashOnHand >= 4000 || cashOnHand >= 10000) {
//     console.log("Congratulations! You're pre-qualified!");
// }else {
//     console.log("No loan for you.");
// }


// Declare a function called 'isFive' that takes in an input and returns true if that input is the number five. Otherwise it should return false.

// function isFive(someNumber) {
//     (someNumber === 5) ? console.log(true) : console.log(false);
// }
// isFive(4);
//
// function isFive(someNumber) {
//     if (someNumber === 5) {
//         return console.log(true);
// }else {
//     return console.log(false);
// }}
//
// isFive(5);


// Make a function named isMultipleOfThree that takes in an input and returns a boolean indicating whether or not the input is a multiple of three.

// function isMultipleOfThree(x) {
//     return x % 3 === 0;
// }
// console.log(isMultipleOfThree(48));


// Create a function called arrayToString.
//     The function takes a parameter called myArray.
//     It returns a string that is the concatenation of all the elements in myArray.
//     This function is essentially your own version of join.
//     Therefore, you cannot use join in your function body :slightly_smiling_face:


// function arrayToString(myArray) {
//     let arrayString = "";
//     for (let i = 0; i < myArray.length; i++) {
//         arrayString += myArray[i];
//     }
//     return arrayString;
// }
//
// console.log(arrayToString(["asl", "woj", 3, 4]));


// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
// Given the following array as an argument (do not define this array inside your function - pass it in as an argument)
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.

// function removeAll(myArray, valueToRemove) {
//     let cleanArray = [];
//
//     for (let i = 0; i < myArray.length; i++) {
//         if (myArray[i] !== valueToRemove) {
//             cleanArray.push(myArray[i]);
//         }
//     }
//     return cleanArray;
// }
//
// console.log(removeAll(bugs, "ant"));


// var myCats = [
//     {
//         catName: "Fifi",
//         age: 5
//     },
//     {
//         catName: "Fluffy",
//         age: 3
//     },
//     {
//         catName: "Abby",
//         age: 7
//     }
// ];
//
//
// function getNthCat(cats, numCat) {
//     return cats[numCat];
// }
//
// // print out the cat at index 1
// console.log(getNthCat(myCats, 1));


// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//     Note: a and b are not ordered!
//     Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Here are some test cases:
//     console.log(getSum(0, -1)); //Expected -1
// console.log(getSum(2, 2)); //Expected 2
// console.log(getSum(1, 5)); //Expected 15


// Write a function called reverseString that takes in a string and returns a string that has the characters of the original string in reverse order.
//     example: reverseString('hello') - returns 'olleh'


// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75

// function findAverage(grades) {
//     let sum = 0;
//     grades.forEach(function (grade) {
//         sum += grade;
//     });
//     return sum / grades.length;
// }
//
// console.log(findAverage([95, 74, 86, 100]));


// morning JS warmup:
//     write a function called sumOfSquares(a, b)
// takes 2 parameters called a and b
// returns the sum of the squares of a and b
// i.e., (a to the power of 2) + (b to the power of 2)
// e.g., console.log(sumOfSquares(2, 3));
// will return 13 (edited)

// function sumOfSquares(a, b) {
//     return Math.pow(a, 2) + Math.pow(b, 2);
// }
//
// console.log(sumOfSquares(2, 4));


// Write a function called whichStringIsLonger() that takes two parameters and returns one of 4 values:
//     returns "first" if the first string parameter is longer
// returns "second" if the second parameter is longer
// returns "neither" if they are the same length
// returns false if either or both of the parameters are not strings

// function whichStringIsLonger(a, b) {
//     if (typeof a !== "string" || typeof b !== "string") {
//         return false;
//     }
//     if (a.length > b.length) {
//         return "first";
//     }
//     if (b.length > a.length) {
//         return "second";
//     }
//     return "neither";
// }

// console.log(whichStringIsLonger("bobby", "lou")); // returns first
// console.log(whichStringIsLonger("bob", "louise")); // returns second
// console.log(whichStringIsLonger("bob", "lou")); // returns neither
// console.log(whichStringIsLonger("bobby", 2)); // returns false
// console.log(whichStringIsLonger(1, "lou")); // returns false


// function sumOfThreeNumbers(num1, num2, num3){
//     if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
//         return false;
//     }
//     return num1 + num2 + num3;
// }
//
// console.log(sumOfThreeNumbers(1, 2, 3));
// console.log(sumOfThreeNumbers(-10, 2, 3));
// console.log(sumOfThreeNumbers(1, 2, "Bob"));
// console.log(sumOfThreeNumbers(1, 2, true));


// Write a function called convertLowHighToObject that takes in a string  that represents the low and high temperature in this format '35, 42' (assuming low will always be the left value and high the right) and returns an object with the properties 'low' and 'high' with the values of those respective properties set to the corresponding values in the input string.
//     NOTE: the values in the object should be of the number type
// Example input: '35, 42'
// Example return: {low: 35, high: 42}


// function convertLowHighToObject(lowHigh) {
//     splitTemps = lowHigh.split(", ");
//     return {
//         low: parseInt(splitTemps[0]),
//         high: parseInt(splitTemps[1])
//     }
// }
// console.log(convertLowHighToObject("35, 42"));


// Write a function called countDuplicates that takes in a string and returns an object that contains the count for each letter within the given string.
//     ex: countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")
// returns { a: 5, d: 4, s: 5, j: 4, f: 4, h: 1, c: 2, b: 2 }





function countDuplicates(string) {
    let letters = string.split("");
    let letterCountObject = letters.reduce((letterCounts, letter) => {
        if (typeof letterCounts[letter] === 'undefined') {
            letterCounts[letter] = 1;
        } else {
            letterCounts[letter] += 1;
        }
        return letterCounts;
    }, {});
    return letterCountObject;
}

console.log(countDuplicates("Jeremiah was a bullfrog."));