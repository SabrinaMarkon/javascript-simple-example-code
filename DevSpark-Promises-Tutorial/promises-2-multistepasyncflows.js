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

/* call: */
http('https://api.github.com/users?since=1364725', 'GET')
    .then(function(users) {
        console.log(users);
    });