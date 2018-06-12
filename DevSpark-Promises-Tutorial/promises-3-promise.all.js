/* Promises III - Promise.al */

/* Usually, instead of running our async operations one at a time (see promises-2 file), we want to run some at once. We can use Promise.all for this. */

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

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('one');
    }, 3000);
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('two');
    }, 1000);
});

var promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('three');
    }, 4000);
});

/* Above we have three separate Promises. Let's use Promise.all to run them all at once. The 'then' will not complete until all three promises included are finished. */
Promise.all([promise1, promise2, promise3])
    .then(function(values) {
        console.log(values);
    })
    .catch(function(error) {
        console.log(error);
    });

    /* OUTPUT: 

    Array(3) ["one", "two", "three"]

    **** Even though the promises were done in this order: promise2, promise1, promise3, we see the output in the order they were added to the Promise.all array [promise1, promise2, promise3] ****

    They execute at the SAME TIME and then when ALL are done, 'then' or 'catch' executes.

    IMPORTANT: If one of the promises REJECTS, it quits them all and immediately goes to the catch! See below example with promise4 added as well that has reject() instead of resolve. The below example will output 'four' as error.

    */

    var promise4 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('four');
        }, 5000);
    });
    Promise.all([promise1, promise2, promise3, promise4])
    .then(function(values) {
        console.log(values);
    })
    .catch(function(error) {
        console.log(error);
    });
    // The chunk of code above uses the first three promises above plus promise4 which rejects.
    // When reject happens, we are sent immediately to CATCH all or nothing. 


    /* BUTT: 
    It still does run all the promises. We can see this by giving each their own 'then' like so: */
var p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('one');
    }, 600);
});
p1.then(function(val) {  // THIS executes even though p4 causes a reject BEFORE p1 finishes! So 'one' still prints out even though p4 ran first and was rejected.
    console.log(val);
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('two');
    }, 100);
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('three');
    }, 400);
});

var p4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('four');
    }, 500);
});

Promise.all([p1, p2, p3, p4])
.then(function(values) {
    console.log(values);
})
.catch(function(error) {
    console.log(error);
});


/* If a NON-PROMISE included in Promise.all: */
Promise.all([p1, p2, 'whatever-random-thingy', p3])
    .then(function(val) {
        console.log('Non-Promise example', val);
    })
    .catch(function(err) {
        console.log('Non-Promise example: This is the error:', err);
    });
    /*
    The above gives [ 'one', 'two', 'whatever-random-thingy', 'three' ]
    Because whatever is passed into Promise.all array is converted to a promise that resolves instantly (since it has no actual stuff to do!)
    */