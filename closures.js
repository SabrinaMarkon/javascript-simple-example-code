/* Simple closure examples. Closures are a joy I love them! :) */

/* WHAT IS A CLOSURE AND HOW DO WE USE THEM? 
When a function returns another function, the returning function would hold its environment: basically all the variables it needed.
*/
let obj = function() { // inside is the environment for this function.
    let i = 0;
    return { // returns an object with two functions, but it would return and still hold the variable i even though that is done executing.
        setI(k) {
            i = k;
        },
        getI() {
            return i;
        }
    }
}
let x = obj();
x.setI(2);
x.setI(44);
console.log(x.getI()); // should return 44.

//// ABOVE the variable i is REMEMBERED even though the function already returned!

var f1 = function f1() {
    var a = 2;
    var b = 3;

    var f2 = function f2() {
        console.log(a + b);
    }

    setTimeout(f2, 1000);

}

f1();

/* f1 finishes its execution but setTimeout executes f2 after a second and STILL has access to var a and var b in the scope of f1 even though it is no longer running. Thus, 5 will still be printed to the console. */


/* works with 'let' variable declarations as well: 
f4 still has access to variables in f3's scope!
*/

let f3 = function f3() {
    let a = 4;
    let b = 6;

    let f4 = function f4() {
        console.log(a + b);
    }

    setTimeout(f4, 1000);

}

f3();

//====================================================

/* 
First, when we want to IMMEDIATELY invoke a function and it should be invoked only ONCE, we don't assign it to a variable, but we commonly put parenthesis around it and at the end like so:

(function myfunc() {

    ...stuff...

}());

Called an "immediately invoked function expression"
and these execute as soon as the PAGE LOADS.
*/

/* 
Below, even though f5 invokes and finishes, f6 and f7 will STILL HAVE ACCESS to the SCOPE (the variables) that was created by function f5!
*/
(function f5() {

    var num = 0,
    button1 = document.querySelector('#button1');
    button2 = document.querySelector('#button2');

    var print = function print() {
        console.log(num);
    };

    button1.addEventListener('click', function f6() {
        num++;
        print();
    });

    button2.addEventListener('click', function f7() {
        num++;
        print();
    });

}());

/* 
The value of num will be remembered even if we click the different buttons, whether f6 is called or f7, because both update f5's 'num' in f5's scope even though f5 has long since finished executing itself!

===================================================
***SO we can say: "f6() has CLOSURE over the SCOPE of f5()"
and "f7() has CLOSURE over the SCOPE of f5()"
OR
"f6/f7 still retains a REFERENCE to the SCOPE of f5, and we call that CLOSURE" ***
===================================================
*/

/* EXAMPLE showing how a JS CLOSURE makes it possible for JS to have private variables.
-The function below, called 'module' is assigned to a variable called 'runMe'. The difference with this function is that it returns an object with several properties.
-When the page loads, the module function assigned to runMe executes immediately and finishes, but the runMe variable still has access to the scope of the module.
-So while nothing else can access the variables from module, as it is already finished, we can still write runMe.obj where obj is a function or variable that was declared in the scope of the original module function!
-Thus, the ONLY way to use those internal functions from module is to use the runMe.obj commands. (encapsulation).

Ex:
*/

var runMe = (function module() {

    var a = 3;

    var printIt = function printIt(num) {
        console.log(num);
    }

    var addUp = function addUp(b) {
        printIt(a + b);
    }

    var multiplyThem = function multiplyThem(b) {
        printIt(a * b);
    }

    /*
    By executing runMe, we can use any of the three properties below as functions that we can pass a value to and receive a result even though the module function completed already when the page loaded!
    */
    return {
        addUp: addUp,
        multiplyThem: multiplyThem,
        printIt: printIt
    }

}());

/* In the console, for instance, type:
runMe.addUp(4)
an we  get 7.

runMe.multiplyThem(2)
gives 6, so we have access through runMe to not only those functions, but also the variable 'a', which is AWESOME!!!

>runMe.printIt('durr')
>durr

>runMe.printIt('hurr durr')
>hurr durr

>runMe.printIt(1 + 16)
>17

---->>>> Just marvelously lovely! <<<<----

A lot of this was studied with the help of 
(All Things JavaScript, LLC, 2016

/* PHP: In PHP, a closure is a LAMBDA function,  and a LAMBDA function is an anonymous function that is stored in a variable and passed as an argument to other functions or methods. 
I find it nice to notice parallels between languages - helps me to remember things for both :) 
*/

