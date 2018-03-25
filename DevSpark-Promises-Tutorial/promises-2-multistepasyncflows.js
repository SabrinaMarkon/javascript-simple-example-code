/* Promises II - Multi-Step Async Flows */

/* Callbacks quickly get out of control when multiple steps are involved. To avoid the nested "pyramid of doom", we can use Promises to keep our code flat and clean. (DevSpark) */

/* ALWAYS return IN OUR 'then' FUNCTIONS! */

/*
Allow you to do something as soon as an asynchronous method or function finishes.
They tend to make callbacks look outdated and messy in comparison. 

resolve() - promise is fulfilled.
then() - method gets executed when promise is resolved.
fromResolve - parameter to callback function in then() method that accepts output from resolve('whatever is here') - can be other name not just fromResolve.
reject() - promise is not fulfilled.
catch() - method that is executed when promise fails.
fromReject - parameter to callback function in catch() method that accepts output from reject - can be other name not just fromReject. 
*/

/* pulling in request package */
var request = require('request');

function http(url, method) {
    method = method.toLowerCase(); // methods on 'request' are lowercase.
    var options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };

    return new Promise(function(resolve, reject) {
        request [method] (options, function(err, response, body) {
            if (err) {
                reject(err);
            }
            if (body) {
                resolve(JSON.parse(body)); // parse body because it comes back stringified.
            }
        });
    });
}

/* CALL: */
console.log('fetching users');
http('https://api.github.com/users?since=1364725', 'GET') // get users (with user ID 1364725 first on list ie. index 0)
    .then(function(users) {
        console.log('fetching repos');
        var user = users[0]; // get the first user object in the array of users returned from github.
        return http(user.repos_url, 'GET'); /* get the user's repos_url property value. We can also add 'then' and 'catch' to individual returns like say:
        return http('user.repos_url', 'GET').then().catch();
        */
        /* each new call to http returns a NEW PROMISE. Since we return the new promise in our 'then' function, we don't need any NESTING and can keep everything flat */
    })
    .catch() // say we want to have a catch function just for the two above only!!!!
    .then(function(repos) {
        console.log('fetching languages'); // show the repos fetched in the previous then function of the promise.
        var repo= repos[0]; // get the first repo.
        return http(repo.languages_url, 'GET');
    })
    .then(function(languages) {
        console.log(languages);
    })
    .catch(function(err) {
        console.log('Caught error:', err);
    });

    /* RECAP */
    /*
    When we return a new promise from within our then, it becomes part of our promise chain. Our next then has access to the return value of the promise. It can use the SAME catch, or have its OWN. But we've removed the need for nested pyramid code and can keep everything flat. 
    In this case, we needed to wait for our first promise to resolve before making our second call, because we grabbed specific data to use in the second call. 
    */