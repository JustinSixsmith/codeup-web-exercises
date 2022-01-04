// Exercise #2: Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// function showMultiplicationTable(numberToMultiply) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(numberToMultiply + " x " + i + " = " + (numberToMultiply * i));
//     }
// }
//
// showMultiplicationTable(6);


// Exercise #3: Generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

// function isOddEven() {
//     let randomNumber;
//
//     for (let x = 0; x < 10; x++) {
//         randomNumber = Math.floor(Math.random() * 180 + 20);
//
//         if (randomNumber % 2 === 0) {
//             console.log(randomNumber + " is even.");
//         } else {
//             console.log(randomNumber + " is odd.");
//         }
//     }
// }
//
// isOddEven();



// Exercise #4: Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


// function concatNum(topNum) {
//     let numberPyramid = "";
//
//     for (let y = 1; y <= (topNum + 1); y++) {
//
//         if (numberPyramid !== "") {
//             console.log(numberPyramid);
//             numberPyramid = "";
//         }
//
//         for (x = 1; x <= y; x++) {
//             numberPyramid += y;
//         }
//     }
// }
//
// concatNum(9);


// for (let i = 1; i <= 9; i++) {
//     console.log(i.toString().repeat(i));
// }


for (let outer = 1; outer <= 9; outer++) {
    let output = "";

    for (let inner = 1; inner <= outer; inner++) {
        output += outer;
    }
    console.log(output);
}



// Exercise #5: Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for (let z = 100; z >= 5; z--) {
//
//     if (z % 5 === 0) {
//         console.log(z);
//     }
// }

