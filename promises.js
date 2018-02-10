/* Promises */

/*
resolve() - promise is fulfilled.
then() - method gets executed when promise is resolved.
fromResolve - parameter to callback function in then() method that accepts output from resolve('whatever is here')
reject() - promise is not fulfilled.
catch() - method that is executed when promise fails.
fromReject - parameter to callback function in catch() method that accepts output from reject.
*/

let iSwearToCleanTheCatLitter = new Promise(function(resolve, reject) {

    // TESTS:
    //let isClean = true;
    let isClean = false;

    // cleaning the radioactive cat litter... 
    if (isClean) {
        resolve('My eyes aren\'t watering any more. Yay u!');
    } else {
        reject('You seriously forgot?!? Tomorrow it will be so bad you need a hazmat suit.');
    }

});

iSwearToCleanTheCatLitter.then(function(fromResolve) {

    // resolved the promise!
    console.log(fromResolve);

}).catch(function(fromReject) {

    // failed to resolve the promise.
    console.log(fromReject);

});

