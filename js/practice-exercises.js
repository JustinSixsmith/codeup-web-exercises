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
    let dice = splitStr[0];
    let sides = splitStr[1];

    let results = "";
    for (times = 1; times <= dice; times++) {
        let numberRolled = Math.floor(Math.random() * sides + 1);
        results += numberRolled;

        if (times < dice) {
            results += ", ";
        }
    }
    console.log("[Rolls: " + results + "]");
}

roll("3d4");