// Exercise #2: Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

do {
    maybeOdd = prompt("Enter an odd number between 1 and 50.");
} while ((maybeOdd > 50) || (maybeOdd % 2 === 0));
