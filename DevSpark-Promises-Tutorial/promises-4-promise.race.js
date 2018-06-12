/* Promises IV - Promise.race */

/*
Promise.race resolves or rejects as soon as any of the given Promises resolves or rejects. This can be useful if it is not important to wait for all values to resolve, and can provide an even greater performance boost.
*/

var p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('one');
    }, 3000);
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('two');
    }, 1000);
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('three');
    }, 4000);
});

var p4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('four');
    }, 5000);
});

/* 1) Non-promises always win Promises.race because they are immediately converted to promises. Outputs: Non-Promise example whatever-random-thingy */
Promise.race([p1, p2, 'whatever-random-thingy', p3])
    .then(function(val) {
        console.log('Non-Promise example', val);
    })
    .catch(function(err) {
        console.log('Non-Promise example: This is the error:', err);
    });

/* 2) Since p2 ends first (1000 ms), the Output is: Promise race winner two */
    Promise.race([p1, p2, p3])
    .then(function(val) {
        console.log('Promise race winner', val);
    })
    .catch(function(err) {
        console.log('This is the error:', err);
    });  

/* 
If one of the promises rejects, but it is after the race winner is determined in Promise.race, it won't cause the Promise.race to reject (ie. we won't get "this is the error:) from the Promises.race. Promise.race will have resolved before the promise rejects.
All promises in the array will go through their own resolve/reject process though.

If the FIRST (race winner) rejects, however, then Promise.race will reject and say 'this is the error' from its catch() method.

Good if we want to wait for the first promise to resolve, but not reject unless ALL promises reject ie. "Promise.any" from some promise libraries like Bluebird and Queue.

*/