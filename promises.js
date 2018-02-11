/* Promises */

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

/* =================== SIMPLE EXAMPLE ====================*/
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


/* =================== FANCY EXAMPLE 1: Chained Promises ====================*/

/*
Here, you have to finish something, before you start another thing 
Promises are much cleaner code than a nested chain of callback function pyramid of nightmares.
Promises also allow us to have a stack, throw, and return, whereas callbacks do not.
*/

// 1) do first. Read the textbook lesson.
let readTextbook = function() {
    return new Promise(function(resolve, reject) {
        resolve('Read the textbook chapter');
    });
}

// 2) after I read, I want to write my assignment.
let writeAssignment = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ', wrote the assignment');
    });
}

// 3) after I am done my assignment, I need to grade my peers.
let gradePeers = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ', graded peer papers');
    });
}

// 4) after I am done grading my peers, I write the exam.
let writeExam = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ', and got 100% on the unit test!');
    });
}

/*
SO let's write a nice tidy nested promise:
First, execute the first function and it returns its promise to the then() function.

For every resolve() we are getting a message back into the next then() function. We can catch that message in the 'result' parameters.
*/
readTextbook().then(function(result) {
    return writeAssignment(result);
}).then(function(result) {
    return gradePeers(result);
}).then(function(result) {
    return writeExam(result);
}).then(function(result) {
    //console.log('All done!');
    console.log(result);
});


/* =================== FANCY EXAMPLE 2: All At Once ====================*/
/*
What if, instead of the above where one promise runs after the other, we want them all to spawn
at the same time, so that once ALL of them are done, only then will we do something.
Notice that although the above chained set of Promises come before the below Promise.all(),
the Promise.all() finishes execution first (faster, because all run at once!)
*/
Promise.all([readTextbook(), writeAssignment(), gradePeers(), writeExam()]).then(function() {
    console.log('All finished at once!');
});


/* =================== FANCY EXAMPLE 3: Want Just One to Finish ====================*/
/*
What if, however, we only need ONE to finish (any one) in order to start doing something?
Tell them to race() and see who wins.
*/
Promise.race([readTextbook(), writeAssignment(), gradePeers(), writeExam()]).then(function() {
    console.log('One promise finished!'); // but which one?
});


/* =================== UNSETTLING THING WITH JS Promise.race() ====================*/
// FIRST: a race:
let sportscar = new Promise(resolve => setTimeout(resolve, 2000, 'Sports car wins!'));
let garbagetruck = new Promise(resolve => setTimeout(resolve, 1000, 'Garbage truck wins!'));
let impacthammer = new Promise(resolve => setTimeout(resolve, 3000, 'Impact hammer wins!'));
let skateboard = new Promise(resolve => setTimeout(resolve, 5000, 'Skateboard wins!'));
let scooter = new Promise(resolve => setTimeout(resolve, 3500, 'Scooter wins!'));
let shoppingcart = new Promise(resolve => setTimeout(resolve, 900, 'Shopping cart wins!'));
Promise.race([sportscar, garbagetruck, impacthammer, skateboard, scooter, shoppingcart]).then(
    val => console.log('Race completed! ' + val + ' Yay!!!')
).catch(
    err => console.log('Race ended because ', err)
);

/*
That was fun, but what if something crashes, and the other racers have to go on without it?
See how the shoppingcart racer says 'reject'?
*/
let sportscar2 = new Promise(resolve => setTimeout(resolve, 2000, 'Sports car wins!'));
let garbagetruck2 = new Promise(resolve => setTimeout(resolve, 1000, 'Garbage truck wins!'));
let impacthammer2 = new Promise(resolve => setTimeout(resolve, 3000, 'Impact hammer wins!'));
let skateboard2 = new Promise(resolve => setTimeout(resolve, 5000, 'Skateboard wins!'));
let scooter2 = new Promise(resolve => setTimeout(resolve, 3500, 'Scooter wins!'));
let shoppingcart2 = new Promise((resolve, reject) => setTimeout(reject, 900, 'Shopping cart had a funny wheel and crashed!'));
Promise.race([sportscar2, garbagetruck2, impacthammer2, skateboard2, scooter2, shoppingcart2]).then(
    val => console.log('Race completed! ' + val + ' Yay!!!')
).catch(
    err => console.log('Race ended because ', err)
);
/*
It stops the entire race (no more promises!) with:
"Race ended because  Shopping cart had a funny wheel and crashed!"
The rest of the promises (racers), however, should go on without the rejected (crashed) one! Shouldn't they? Is this buggy?
No. It is SUPPOSED to do that. But it still seems a bit hurr de durr to me. 
*/