// While Loop Exercise #2:

// let n1 = 2
//
// while (n1 <= 65536) {
//     console.log(n1);
//     n1 *= 2;
// }

let power = 1;
while (power <= 16) {
    console.log(Math.pow(2, power));
    power++;
}


// Do While Loop vExercise:

// function sellSomeIceCream() {
//
//     let allCones = Math.floor(Math.random() * 50) + 50;
//     console.log("I have " + allCones + " cones to sell.")
//     let conesSold;
//
//     do {
//         conesSold = Math.floor(Math.random() * 5) + 1;
//
//         if (conesSold > allCones) {
//             console.log("I cannot sell you " + conesSold + " cones. I only have " + allCones + ".");
//             continue;
//         }
//
//         console.log(conesSold + " cone(s) sold...");
//         allCones = allCones - conesSold;
//         // console.log("I have " + allCones + " cone(s) left.");
//
//         if (allCones === 0) {
//             console.log("Yay! I sold all the cones!");
//             break;
//         }
//     } while (allCones > 0);
// }
//
// sellSomeIceCream();