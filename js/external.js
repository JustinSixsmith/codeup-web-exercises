"use strict";

// console.log("Why, hello there!");

// let myAge = 45;
//
// alert("Look out!")

// let areYouDoingJS = confirm("Are you doing JS right now?")
//
// console.log(areYouDoingJS);

// let doYouLikePizze = confirm("Do you like pizza?");
//
// if (doYouLikePizze) {
//     alert("Awesome! Who doesn't");
// }else {
//     alert("What's wrong with you?");
// }

// alert("Welcome to my Website!");
//
//
// let favoriteColor = prompt("What's your favorite color?");
//
// if (favoriteColor) {
//     alert("Awesome! " + favoriteColor.toUpperCase() + " is my favorite color too.");
// }else {
//     alert("Please try again.");
// }
//
//




// // Starting with Patrick Quilty's array
// let littleMermaid = prompt("How many days have you had The Little Mermaid?"), brotherBear = prompt("How many days have you had Brother Bear?"), hercules = prompt("How many days have you had The Little Hercules?");
// let movies = [parseInt(littleMermaid), parseInt(brotherBear), parseInt(hercules)]
// let price = 3 * movies.reduce((a, b) => a + b, 0)
// alert("You owe " + "$" + price + ".");



// let googleRate = prompt("What was your hourly rate for Google?");
// let amazonRate = prompt("What was your hourly rate for Amazon?");
// let facebookRate = prompt("What was your hourly rate for Facebook?");
// let googleHrs = prompt("How many hours did you work for Google?");
// let amazonHrs = prompt("How many hours did you work for Amazon?");
// let facebookHrs = prompt("How many hours did you work for Facebook?");
// alert("You made " + "$" + (parseInt(googleRate) * parseInt(googleHrs) + parseInt(amazonRate) * parseInt(amazonHrs) + parseInt(facebookRate) * parseInt(facebookHrs)));



// let notFull = confirm("Is the class full?");
// let scheduleClear = confirm("Is there room in your schedule for the class?");
// if ((notFull === false) && (scheduleClear === true)) {
//     alert("You may join the class!")
// }else {
//     alert("You are unable to attend this class.")
// }


let notExpired = confirm("Is the offer still valid?");
let minimumItems = prompt("How many items are you purchasing?");
let premiumMember = confirm("Are you a premium member?");

if (notExpired && ((parseInt(minimumItems) > 2) || (premiumMember))) {
   alert("You may take advantage of the offer!");
}else {
    alert("No offer available.");
}

console.log((notExpired) && (minimumItems >= 2) || (premiumMember));