/* SCOPE: 
set of rules where in a program we can access referenced items, such as variables we have declared 

1) Scope is determined lexically - by how we write our programs. It has nothing to do with when your function is executed.

2) JS uses function scope - Everything defaults to the global scope, but when a new function is declared that creates scope. 

3) Nexted functions (nested scope) creates a 'scope chain'.

When variable lookups occur, it first checks for the variable value in its own scope. If not found, it looks for it in the next scope up (in a chain until global at the top.)

For instance:
Below, in the console.log(num1 + b) line, we find both num1 and b in the #2 scope. 
But for the console.log(num2 + a) line, while num2 is found in the #3 scope, the variable a is not found in #3 or then #2 either. It is finally found in the global scope.

*/

let a = 10; // #1 scope - global

//===================================================

let add5 = function(num1) { // add5 is global, the function(num1) in it however is #2 scope.

    let b = 5;  // also #2 scope.
    console.log(num1 + b); 

    let add10 = function(num2) {
        console.log(num2 + a); // add10 is #2 scope, but the function(num2) within it is #3 scope.
    }

    add10(3); // #2 scope

    let add20 = function(num3) { // add20 is #2 scope, but the function(num3) within it is #4 scope.
        let c = 15; // also #4 scope.
        console.log(num3 + c);
    }

    add20(4); // #2 scope.

}

add5(5); // global scope.

//===================================================

