/* SCOPE: 
set of rules where in a program we can access referenced items, such as variables we have declared 

1) Scope is determined lexically - by how we write our programs. It has nothing to do with when your function is executed.

2) JS uses function scope - Everything defaults to the global scope, but when a new function is declared that creates scope. 

3) Nexted functions (nested scope) creates a 'scope chain'.

When variable lookups occur, it first checks for the variable value in its own scope. If not found, it looks for it in the next scope up (in a chain until global at the top.)

For instance:
Below, in the console.log(num1 + b) line, we find both num1 and b in the line's own scope, #2.
But for the console.log(num2 + a) line, while num2 is found in the #3 scope, the variable a is not found in #3 or then #2 either. It is finally found in the global scope.a

NOTE: in this example code, 'let' ends up working the same as 'let'.

*/

let a = 10; // #1 scope - global

let d = 2; // #1 scope - global

//===================================================

let add5 = function(num1) { // add5 is global, the function(num1) in it however is #2 scope.

    let b = 5;  // also #2 scope.
    let d = 1; // also #2 scope (observe d is also in the global scope with a different value!!) 
    console.log(num1 + b); 

    console.log(num1 + d); // will use the let d = 1 in the current scope, rather than the global!!!

    let add10 = function(num2) {
        console.log(num2 + a); // add10 is #2 scope, but the function(num2) within it is #3 scope.

        //*** variable 'a' SCOPE CHAIN! a is not in #3 scope, so it checks the next scope up, #2, and it isn' found there either, so it checks #1 (the global scope) and finds the value there to use here.  If 'a' was not found, an error would occur because of an undefined variable. ***/
    }

    add10(3); // #2 scope

    let add20 = function(num3) { // add20 is #2 scope, but the function(num3) within it is #4 scope.
        let c = 15; // also #4 scope.
        console.log(num3 + c);
    }

    let add15 = function(num4) { // add15 is in #2 scope, but the function(num4) within it is #5 scope. 
        
        //console.log(num4 + c); 

        /*** This will cause a REFERENCE ERROR ('c is not defined') because variable 'c' is NOT in this function's SCOPE CHAIN (which goes #5 -> #2 -> #1 (global)!!! Notice that the let c = 15 is in #4 scope which is a sibling and NOT part of the scope chain for the add15 function!
        ***/

        add10(4); // we can't find this function in the current scope, scope #5, so we go up a level and can indeed find it in scope #2 which is part of the scope chain for add15, so this will work!

    }

    add15(5); // will produce an error because 'c' is not in the scope chain.

    add20(4); // #2 scope.

}

add5(5); // global scope.

//===================================================

