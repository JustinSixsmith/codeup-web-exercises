// Exercise #2: Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

// let maybeOdd = prompt("Enter an odd number between 1 and 50.");
//
// while (isNaN(maybeOdd) || maybeOdd < 1 || maybeOdd > 50 || maybeOdd % 2 === 0) {
//     alert("That is not an odd number. Please try again.");
//     maybeOdd = prompt("Enter an odd number between 1 and 50.");
// }
//
// alert("Thank you. " + maybeOdd + " is an odd number between 1 and 50.");



// Exercise #3: Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// console.log("Number to skip is: 27");
// console.log("")

for (let i = 1; i < 100; i++) {

    if (i === 27) {
        console.log("Yikes! Skipping number: 27");
        continue;
    } else if (i % 2 === 0) {
        continue;
    }

    console.log('Here is an odd number: ' + i);
}


