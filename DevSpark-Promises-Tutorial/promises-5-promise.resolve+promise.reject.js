/* Promises V - Promise.resolve & Promise.reject */

/*
Promise.resolve and Promise.reject quickly convert synchronous values into Promises, and are especially useful for ensuring that a given function always returns a Promise.

axios - Promise based HTTP client for the browser and node.js
https://github.com/axios/axios

npm install --save axios
*/
const axios = require('axios'); // can't use import axios from 'axios' without babel

var cached; // not assigned a value yet so works in the getUsers() promise.

//cached = 'CACHED'; // will cause an error - "TypeError: getUsers(...).then is not a function" for the .then
/* We want functions to return a CONSISTENT TYPE so the caller knows how to handle the response! 
Because the above is a string, the caller getUsers now has to handle either a string or a promise = BAD

If we have logic that leads to an error, we want that to be handled with a promise, so we use Promise.resolve or Promise.reject

FIX - change to return Promise.resolve(cached) instead of return cached.
*/

function getUsers(fromCache) {
    if (cached) {
        
        // Line below on its own: returns a string - problem because it is a different type than the else which is type Promise.
        //return cached; 
        
        /* Line below with the Promise.resolve added works instead! Promise.resolve creates a promise that immediately
        resolves with the given value ('cached' in this case), so both the if and the else return types are now promises and
        therefore consistent types. */
        return Promise.resolve(cached);

    } else if (fromCache) {
        // if there is no value to the variable fromCache, we return a Promise.reject.
        return Promise.reject(new Error('no data in cache'));
    } else {
        // returns another promise
        return axios.get('https://api.github.com/users')
            .then(function(response) {
                    cached = response.data[0]; // I have data[0] just to show only one user (faster and short for this example)
                    return response.data[0];
            });
    }
}

/* call - with the variable cached not assigned, this all works out BUT if we assign 
a value to cached like cached = 'CACHED', we get an error because it is a string returning
instead of a promise to the getUsers.then part.
*/
getUsers()
    .then(function(users) {
        console.log(users);
    })
    .catch(function(err) {
        console.log(err);
    });

