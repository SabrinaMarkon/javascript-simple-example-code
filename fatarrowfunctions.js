/*  Fat Arrow Functions */

// 1) Lexical 'this'
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

// Fat arrow functions do not have their own 'this', so using one fixes the problem because this.val will refer to the parent's 'this' instead:
var dog = function() {
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val); // prints 2 like we want!!
    }, 1);
}
var dogdog =  new dog();

// 2) 