// Exercise #2: Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

function allOtherOdds() {
    let maybeOdd = 0;
    do {
        maybeOdd = prompt("Please enter an odd number between 1 and 50.");
        maybeOdd = parseInt(maybeOdd);
        if (maybeOdd >= 1 && maybeOdd <= 50 && maybeOdd % 2 === 1) {
            break;
        }
    } while (true);


// Exercise #3: Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

    for (let i = 1; i <= 50; i++) {
        if (i === maybeOdd) {
            console.log("Yikes! Skipping number " + maybeOdd);
            continue;
        }
        if (i % 2 === 1) {
            console.log("Here is an odd number: " + i);
        }
    }
}

allOtherOdds();
