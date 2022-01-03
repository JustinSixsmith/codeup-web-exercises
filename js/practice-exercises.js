// // TODO: MINI EXERCISE
// // TODO: print all even numbers between 0 and 25;
// let counter = 0; // starting point

// let counter = 0;
//
// while (counter <= 25) {
//
//     if (counter % 2 === 0) {
//         console.log(counter);
// }
// counter++;
// }



// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 prime numbers.
// https://en.wikipedia.org/wiki/Prime_number

// for (timesPrime = 0; timesPrime <= 50; timesPrime++) {
//     if tim
// }


// // Loops from 1 to 229
// for (let x = 1; x <= 229; x++) {
//     let flag = 0;
//
//     // Divides x by every number from 2 through one number less than x
//     for (y = 2; y < x; y++) {
//         if (x % y === 0) {
//             flag = 1;
//             break;
//         }
//     }
//
//     if (x > 1 && flag === 0) {
//         console.log(x);
//     }
// }



// Create a function named roll. It should accept a string that describes how many times the dice is being rolled and the number of sides on the dice, for example:
// 3d4 means 3 4-sided dice
// 1d20 means 1 20-sided dice
// 2d6 means 2 6-sided dice
// The function should return an object with properties rolls: an array of the individual rolls, and total, which is the sum of the individual rolls
// roll('4d6')
// {
//     rolls: [5, 4, 6, 1],
//         total: 16
// }

function roll(dieOrDice) {

    let splitStr = dieOrDice.split('d');
    let totalDice = splitStr[0];
    let sidesOnDice = splitStr[1];

    let results = "";
    let total = 0;

    for (diceRoll = 1; diceRoll <= totalDice; diceRoll++) {
        let numberRolled = Math.floor(Math.random() * sidesOnDice + 1);
        results += numberRolled;
        total += numberRolled;

        if (diceRoll < totalDice) {
            results += ", ";
        }
    }
    console.log("rolls: [" + results + "]");
    console.log("total: " + total);
}

roll("6d12");



// Write a function called add(num1, num2) which returns the sum of num1 and num2
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 2));


// Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
function square(numToSqr) {
    return Math.pow(numToSqr, 2);
}

console.log(square(2));


// Write a function called sumOfSquares(a, b).
//     You should find the square of a, then the square of b.
//     Invoke add(num1, num2) and pass the new squared values in as arguments.
function sumOfSquares(a, b) {
    return add(square(a), square(b));
}

console.log(sumOfSquares(2, 4));