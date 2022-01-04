"use strict";

// Define a function named getPassword() which performs the following actions:
//     Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
//     HINT: start by defining the correct password and don't forget to link your html file

// function getPassword() {
//     let maybePassword = prompt("Please enter your password");
//     let validPassword = "mypassword";
//
//         while (maybePassword !== validPassword) {
//             alert("That is not the correct password.");
//             maybePassword = prompt("Please re-enter your password.");
//         }
//         alert("Thank you. You are now logged in.");
// }
//
// getPassword();


// function getBetterPassword2() {
//     var answer = "howdy";
//     var attempts = 0;
//     var guess;
//     do {
//         guess = prompt("Enter your password: ");
//         attempts++;
//     } while(guess !== answer && attempts < 3);
//     if(guess === answer) {
//         alert("ok");
//     } else {
//         alert("not ok");
//     }
// }
//
// getBetterPassword2();


// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

function getsPassword() {

    let password = "mypassword";
    let guess = "";

    for (let i = 0; i < 3; i++) {
        guess = prompt("Please re-enter your password.");
        if (guess === password) {
            break;
        }
        if (i === 2) {
            alert("Too many failed attempts.");
            return;
        }
    }
  alert("You are logged in.");
}

getsPassword();