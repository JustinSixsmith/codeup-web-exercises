"use strict";

/* ########################################################################## */

// Create a file named conditionals.js inside the js directory.
//     Create a function called analyzeColor1 that takes a parameter called color
// In your function, use ONLY if statements to print the following:
// “blue is the color of the sky” if the value of color is “blue”
// “red is the color of love” if the value of color is “red”
// “green is the color of envy” if the value of color is “green”
// “I don’t know that color” if the value of color is anything else
// HINT: use return in the conditional code blocks to prevent from printing multiple times for the same argument
// Add, commit, and push to GitHub.

// function analyzeColor1(color) {
//     if (color === "blue") {
//         return "blue is the color of the sky";
//     }
//     if (color === "red") {
//         return "red is the color of love";
//     }
//     if (color === "green") {
//         return "green is the color of envy";
//     }
//         return "I don't know that color";
// }
//
// console.log(analyzeColor1("blue"));
// console.log(analyzeColor1("red"));
// console.log(analyzeColor1("green"));
// console.log(analyzeColor1("violet"));


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(anyColor) {
//     if (anyColor.toLowerCase() === "blue") {
//         return "blue is the color of the sky";
//     } else if (anyColor.toLowerCase() === "red") {
//         return "Strawberries are red";
//     } else {
//         return "I don't know anything about " + anyColor.toLowerCase();
//     }
//
// }


// console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function analyzeColor(anyColor) {
//     if (anyColor.toLowerCase() === "blue") {
//         return "blue is the color of the sky";
//     } else if (anyColor.toLowerCase() === "red") {
//         return "Strawberries are red";
//     } else {
//         return "I don't know anything about " + anyColor.toLowerCase();
//     }
//
// }
//
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// let anyColor = randomColor;
//
// switch(anyColor) {
//     case "blue":
//         console.log("blue is the color of the sky");
//         break;
//     case "red":
//         console.log("Strawberries are red");
//         break;
//     default:
//         console.log("I don't know anything about " + anyColor);
//         break;
// }
//
// console.log("blue");
// console.log("red");

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let anyColor = prompt("What is your favorite color?");
//
// switch(anyColor) {
//     case "blue":
//         alert("blue is the color of the sky");
//         break;
//     case "red":
//         alert("Strawberries are red");
//         break;
//     default:
//         alert("I don't know anything about " + anyColor);
//         break;
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, price) {
//      switch(luckyNumber) {
//          case 0:
//              console.log("Your \"discounted\" price is $" + price);
//              break;
//          case 1:
//              console.log("Your discounted price is $" + (price - price * .1));
//              break;
//          case 2:
//              console.log("Your discounted price is $" + (price - price * .25));
//              break;
//          case 3:
//              console.log("Your discounted price is $" + (price - price * .35));
//              break;
//          case 4:
//              console.log("Your discounted price is $" + (price - price * .50));
//              break;
//          case 5:
//              console.log("Everything is free!");
//              break;
//          default:
//              console.log("You did not provide a valid lucky number.");
//              break;
//      }
// }
// calculateTotal(0, 100);
// calculateTotal(1, 100);
// calculateTotal(2, 100);
// calculateTotal(3, 100);
// calculateTotal(4, 100);
// calculateTotal(5, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// function calculateTotal(luckyNumber, price) {
//     switch(luckyNumber) {
//         case 0:
//             console.log("Your \"discounted\" price is $" + price);
//             break;
//         case 1:
//             console.log("Your discounted price is $" + (price - price * .1));
//             break;
//         case 2:
//             console.log("Your discounted price is $" + (price - price * .25));
//             break;
//         case 3:
//             console.log("Your discounted price is $" + (price - price * .35));
//             break;
//         case 4:
//             console.log("Your discounted price is $" + (price - price * .50));
//             break;
//         case 5:
//             console.log("Everything is free!");
//             break;
//         default:
//             console.log("You did not provide a valid lucky number.");
//             break;
//     }
// }
// calculateTotal(luckyNumber, 100);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function gimmeNumber() {
    if (confirm("Would you like to enter a number?") === true) {
        let aNumber = prompt("Please enter a number.");
        aNumber = parseInt(aNumber);

        if (isNaN(aNumber)) {
            alert("That is not a number.");
            return;
        }

        if (aNumber % 2 === 0) {
            alert("Your number is even.");
        } else {
            alert("Your number is odd.");
        }

        alert(aNumber + 100);

        if (aNumber < 0) {
            alert("Your number is negative.");
        } else {
            alert("Your number is positive.")
        }
    }
}

gimmeNumber();
