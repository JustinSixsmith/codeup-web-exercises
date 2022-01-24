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


function reverseString(aString) {
    let newString = "";
    for (let i = (aString.length -1); i >= 0; i--) {
        newString += aString[i];
    }
    return newString;
}

console.log(reverseString(".noitcnuf a htiw daer ot reisae tol a eb dluow sihT"));

