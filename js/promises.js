// function getAllUsers() {
//     fetch('https://api.github.com/users', {headers: {'Authorization': `token ${MY_GITHUB_API_KEY}`}})
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
// }
//
// getAllUsers();


function getEventDateByUserName(userName) {
    return fetch('https://api.github.com/users/' + userName + '/events/public', {headers: {'Authorization': `token ${MY_GITHUB_API_KEY}`}})
        .then(response => response.json())
        .then(data => new Date(data[0].created_at).toDateString())
        .catch(error => console.error(error));
}

getEventDateByUserName("JustinSixsmith").then(event => console.log(event));



function wait(aNum) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                let time = aNum / 1000;
                resolve("You'll see this after " + time + " seconds.");
            } else {
                reject('Your request was denied!');
            }
        }, aNum);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const request = wait(5000);
request.then(message => console.log(message));
request.catch(message => console.log(message));
