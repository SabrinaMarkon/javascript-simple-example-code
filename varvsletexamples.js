/*
"var vs let" EXAMPLE 1:
------------------------------

- scope of variables declared with var is the function or the global environment. Variables declared with var ARE HOISTED.

- scope of variables declared with let is the code block {}. Variables declared with let are NOT HOISTED.
(All Things Javascript, LLC, 2016)
*/

var funct1 = function() {
    console.log("1: " + x);
};

funct1();

// x is declared AFTER funct1() is called that needs x.

/*
With 'var':
the console says that x is simply 'undefined': x exists because it is referenced in funct1, but it is not assigned a value yet because var x = 10 occurs AFTER the call to funct1. 
The DEFINITION of x ONLY gets hoisted, but NOT the VALUE (10).
It does NOT give an error as it will with 'let', which means that with 'var' it was HOISTED to the TOP OF THE CODE or top of the function it is declared in. var has FUNCTION SCOPE whereas let has BLOCK SCOPE.
*/
var x = 10;  

/*
With 'let':
also in the global environment the same as var x = 10 was, but is NOT HOISTED, so funct1 doesn't even know x  exists at all and the script stalls in an uncaught reference error.
*/
// let x = 10; 

//======================================================

/*
"var vs let" EXAMPLE 2:
-------------------------------
*/

// with 'var i = 1': it will show 1, 2, 3, 4, 5 (where 5 is the console.log OUTSIDE the loop..the final value of i).
var funct2 = function() {
    for (var i = 1; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
funct2();

// with 'let i = 1': it will show 1,2,3,4,then Uncaught Reference error, because i is not defined outside the CODE BLOCK (which was the for loop!)
var funct3 = function() {
    for (let i = 1; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
funct3();
