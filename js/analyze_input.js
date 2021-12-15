// Create a file named analyze_input.js in the js directory.
//     In that file, write a program that receives user input and analyzes the input differently if the input is a number or a string. If the input is a string, it will analyze the string differently if it is length 1.
// Following are the rules of analysis:
//     If the input is a number:
//     Output if the number is odd or even (zero is considered even). Use your function from Exercise 2 for this functionality.
//     Output if the number is negative, positive, or zero
// If the input is a string:
//     If the string’s length is 1, output if the string (or char) is a vowel or not
// Otherwise, output the length of the string
// Design your program to include a switch and at least one if/else. You must also make separate functions for each of the following pieces of program functionality:
//     Determining if the input is a number, string, or otherwise. This function should be called analyzeInput
//     Determining if a number is odd or even. Re-use your Exercise 2 function for this.
//                                                                                     Determining if a number is <, >, or equal to zero
//     Determining if the string is a single character or not
//     Determining if the length 1 string is a vowel or not
//     Add, commit, and push to GitHub.


function analyzeInput(someInput) {
    let stringInput =
    let numberInput = (typeof someInput === "number");

    if (stringInput.length > 1) {
        console.log(stringInput);
    }
}

analyzeInput(4);

console.log()








// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Create a file named analyze_input.js in the js directory.
//     In that file, write a program that receives user input and analyzes the input differently if the input is a number or a string. If the input is a string, it will analyze the string differently if it is length 1.
// Following are the rules of analysis:
//     If the input is a number:
//     Output if the number is odd or even (zero is considered even). Use your function from Exercise 2 for this functionality.
//     Output if the number is negative, positive, or zero
// If the input is a string:
//     If the string’s length is 1, output if the string (or char) is a vowel or not
// Otherwise, output the length of the string
// Design your program to include a switch and at least one if/else. You must also make separate functions for each of the following pieces of program functionality:
//     Determining if the input is a number, string, or otherwise. This function should be called analyzeInput
//     Determining if a number is odd or even. Re-use your Exercise 2 function for this.
//                                                                                     Determining if a number is <, >, or equal to zero
//     Determining if the string is a single character or not
//     Determining if the length 1 string is a vowel or not
//     Add, commit, and push to GitHub.

// function analyzeThis(someInput) {
//     let aString = (someInput.length > 2 && (typeof someInput === "string"));
//     let aLetter = (someInput.length = 1 && (typeof someInput === "string"));
//     if (aString) {
//         console.log("You entered a string");
//     }
//     if (aLetter + "a") {
//         console.log("You entered a vowel.")
//     // } else {
//     //     console.log("You entered a consonant.");
//     }
// }
//
// analyzeThis("a");


// function analyzeThis(someInput) {
//     if (someInput % 2 === 0) {
//         console.log("Your number is even.");
//     } else if (someInput % 2 !== 0) {
//         console.log("Your number is odd.")
//     }
// }


// function analyzeThis(someInput) {
//     switch(typeof someInput) {
//         case "number":
//             console.log("Your input is a number.");
//             break;
//         case "string":
//             console.log()
//     }
//     let remainder = someInput % 2;
//     console.log(remainder);
//     switch (remainder) {
//         case 0:
//             console.log("Your number is even.");
//             break;
//         case 1:
//             console.log("Your number is odd.");
//             break;
//         // case (someInput.length > 1):
//         // console.log("Your word is " + someInput.length + " letters long.");
//         // break;
//     }
//     switch (someInput) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             console.log("Your letter is a vowel.");
//             break;
//         case NaN:
//         default:
//             console.log("You letter is a consonant.")
//     }
// }

// case someInput === ["a", "e", "i", "o", "u"]:
// console.log("Your letter is a vowel.");
// break;
// analyzeThis(true);
