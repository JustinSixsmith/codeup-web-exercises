const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//   1.  Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let multiLingual = users.filter(user => user.languages.length >= 3);
console.log(multiLingual);


//   2. Use .map to create an array of strings where each element is a user's email address

let usersEmail = users.map(user => user.email);
console.log(usersEmail);


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let yearsExp = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log(yearsExp / users.length);


//     Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce(function(currentLongestEmail, user) {
    if (user.email.length > currentLongestEmail.length) {
        return user.email;
    }
    return currentLongestEmail;
}, "");
console.log(longestEmail);


//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce(function(instructors, user) {
    if (instructors === "") {
        return "Your instructors are: " + user.name;
    } else {
        return instructors + ", " + user.name;
    }
}, "");
console.log(userNames + ".");


// Bonus
// Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce(function(languages, user) {
    let tempSet = new Set(languages.concat(user.languages));
    return Array.from(tempSet);
}, []);
console.log(uniqueLanguages);