/* Simple closure example: */
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









/* PHP: In PHP, a closure is a LAMBDA function,  and a LAMBDA function is an anonymous function that is stored in a variable and passed as an argument to other functions or methods. 
I find it nice to notice parallels between languages - helps me to remember things for both :) 
*/