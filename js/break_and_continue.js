// Exercise #2: Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

let maybeOdd = prompt("Enter an odd number between 1 and 50.");

while (isNaN(maybeOdd) || maybeOdd < 1 || maybeOdd > 50 || maybeOdd % 2 === 0) {
    alert("Invalid entry. Please try again.");
    maybeOdd = prompt("Enter an odd number between 1 and 50.");
}

alert("Thank you. " + maybeOdd + " is an odd number between 1 and 50.");



// Exercise #3:

