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




for (let x = 1; x <= 229; x++) {
    let flag = 0;

    for (y = 2; y < x; y++) {
        if (x % y === 0) {
            flag = 1;
            break;
        }
    }

    if (x > 1 && flag === 0) {
        console.log(x);
    }
}

