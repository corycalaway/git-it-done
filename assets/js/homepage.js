var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username')
// get repo from github using api
var getUserRepos = function(user) {
    // formath the github api url using user as variable to select different profiles.
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data)
        });
    });
};

// execute when form submission event
var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.Value = "";
    } else {
        alert("please enter a GitHub username");
    }
    console.log(event);
};
 
userFormEl.addEventListener('submit', formSubmitHandler);

  //