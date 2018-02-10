/* Promises */

/*
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
