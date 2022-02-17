const gitData = fetch('https://api.github.com/users', {headers: {'Authorization': `token ${MY_GITHUB_API_KEY}`}})
    .then(response => response.json())
    .catch(error => console.error(error));

console.log(gitData);