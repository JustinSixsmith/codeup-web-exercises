
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(numberToMultiply) {
    for (let i = 1; i <= 10; i++) {
        console.log(numberToMultiply + " x " + i + " = " + (numberToMultiply * i));
    }
}

showMultiplicationTable(2);


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

