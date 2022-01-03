"use strict";

// Define a function named getPassword() which performs the following actions:
//     Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
//     HINT: start by defining the correct password and don't forget to link your html file

function getPassword() {
    let maybePassword = prompt("Please enter your password");
    let validPassword = "mypassword";

        while (maybePassword !== validPassword) {
            alert("That is not the correct password.");
            maybePassword = prompt("Please re-enter your password.");
        }
        alert("Thank you. You are now logged in.");
}

getPassword();