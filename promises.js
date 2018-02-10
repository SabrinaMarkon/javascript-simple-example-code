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


/* =================== FANCY EXAMPLE ====================*/

/* Here, you have to finish something, before you start another thing */

// 1) do first. Read the textbook lesson.
let readTextbook = function() {
    return new Promise(function(resolve, reject) {
        resolve('Read the textbook chapter');
    });
}

// 2) after I read, I want to write my assignment.
let writeAssignment = function(prom) {
    return new Promise(function(resolve, reject) {
        resolve('Wrote the assignment');
    });
}

// 3) after I am done my assignment, I need to grade my peers.
let gradePeers = function(prom) {
    return new Promise(function(resolve, reject) {
        resolve('Graded peer papers');
    });
}

// 4) after I am done grading my peers, I write the exam.
let writeExam = function(prom) {
    return new Promise(function(resolve, reject) {
        resolve('Got 100% on the text!');
    });
}

/*
SO let's write a nice nested promise:
First, execute the first function and it returns its promise to the then() function.

*/
readTextbook().then(function() {
    return writeAssignment();
}).then(function() {
    return gradePeers();
}).then(function() {
    return writeExam();
}).then(function() {
    console.log('All done!');
});
