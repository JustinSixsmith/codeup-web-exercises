// Exercise #2: Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(numberToMultiply) {
    for (let i = 1; i <= 10; i++) {
        console.log(numberToMultiply + " x " + i + " = " + (numberToMultiply * i));
    }
}

showMultiplicationTable(6);



// Exercise #3: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

for (let x = 1; x <= 10; x++) {
    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let randomNumber = randomIntFromInterval(20, 200);

    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }
}



// Exercise #4:
let numberPyramid = "";

for (let y = 1; y < 10; y++) {



//     if (y === 1) {
//         console.log("" + y);
//     } else if (y === 2) {
//         console.log("" + y + y);
//     } else if (y === 3) {
//         console.log("" + y + y + y);
//     } else if (y === 4) {
//         console.log("" + y + y + y + y);
//     } else if (y === 5) {
//         console.log("" + y + y + y + y + y);
//     } else if (y === 6) {
//         console.log("" + y + y + y + y + y + y);
//     } else if (y === 7) {
//         console.log("" + y + y + y + y + y + y + y);
//     } else if (y === 8) {
//         console.log("" + y + y + y + y + y + y + y + y);
//     } else {
//         console.log("" + y + y + y + y + y + y + y + y + y);
//     }
// }



// Exercise #5:

for (let z = 100; z >= 5; z--) {

    if (z % 5 === 0) {
        console.log(z);
    }
}

