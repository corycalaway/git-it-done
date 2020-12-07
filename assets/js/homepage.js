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
   
  getUserRepos('corycalaway');

  //6.2.2