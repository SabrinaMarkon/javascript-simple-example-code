/*  Fat Arrow Functions */

// 1) Lexical 'this'. Fat arrow functions do not have their own 'this':
var cat = function() {
    this.val = 1;
    setTimeout(function() {
        /* the lines below will produce an error! Because 'this' on that line refers to THIS setTimeout function, rather than the 
        this.val of the parent function */
        this.val++;
        console.log(this.val); // prints out NaN, because this.val in THIS function (not the parent) IS NaN!
    }, 1);
};
var catcat = new cat();

// Fat arrow functions do not have their own 'this', so using one fixes the problem because this.val will refer to the parent's 'this' instead. 
var dog = function() {
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val); // prints 2 like we want!!
    }, 1);
}
var dogdog =  new dog();

/*====================================================*/

// 2) Fat arrow functions do NOT have the 'arguments' variable.

// normal:
var corvids = function() {
    /* the below line will work and for this example show 'crow', because it is first in the arguments array. Even though the function() has no parameters defined between the parenthesis! */
    console.log(arguments[0]); // prints 'crow'
    console.log(arguments[2]); //prints 'bluejay'
};
corvids('crow', 'magpie', 'bluejay', 'raven');

// fat arrow:
var songbirds = () => {
    console.log(arguments[0]); // Error! "Uncaught ReferenceError: arguments is not defined" because again, fat arrow functions DO NOT HAVE an 'arguments' parameter!
};
//songbirds('warbler', 'cardinal', 'painted bunting', 'canary');

// We can fix it though with the SPREAD OPERATOR (ECMA6)
var  raptors = (...args) => {
    console.log(args[0]); // prints 'eagle'
    console.log(args[3]); // prints 'hawk'
};
raptors('eagle', 'secretary bird', 'osprey', 'hawk', 'falcon');