"use strict";

function getUserLastPushEvent(userName) {
    return fetch('https://api.github.com/users/' + userName + '/events/public', {headers: {'Authorization': `token ${MY_GITHUB_API_KEY}`}})
        .then(response => response.json())
        .then(events => {
            for (let event of events) {
                if (event.type === "PushEvent") {
                    return new Date(event.created_at).toDateString();
                }
            }
        }).catch(error => console.error(error));
}

getUserLastPushEvent("JustinSixsmith").then(dateOfEvent => console.log(dateOfEvent));



// function wait(milliseconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 let seconds = milliseconds / 1000;
//                 resolve("You'll see this after " + seconds + " seconds.");
//             } else {
//                 reject('Your request was denied!');
//             }
//         }, milliseconds);
//     });
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
// const request = wait(5000);
// request.then(message => console.log(message));
// request.catch(message => console.log(message));


const wait = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(milliseconds);
        }, milliseconds)
    })
};

wait(5000).then((ms) => console.log(`You'll see this after ${ms/1000} seconds.`));