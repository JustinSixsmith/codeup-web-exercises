// Using the two provided variables, create a piece of logic which will determine if a person is qualified to be extended an auto loan.
//     Requirements:
// Their credit score must be over 680 AND have at least $4000 on-hand
// OR, they must have at least $10000 on-hand
// Scenario:
//     I have $12000 on-hand but have a 590 credit score. I get a loan.
//     I have $5000 on-hand with a 720 credit score. I get a loan
// I have $3000 on-hand with a 720 credit score. I do not get a loan.
//     I have $9000 on-hand with a 590 credit score. I do not get a loan.
//     var creditScore = 720;
// var cashOnHand = 5000;

let creditScore = 720;
let cashOnHand = 5000;

if (creditScore >= 680 && cashOnHand >= 4000 || cashOnHand >= 10000) {
    console.log("Congratulations! You're pre-qualified!");
}else {
    console.log("No loan for you.");
}
