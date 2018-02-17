/* setTimeout waits for everything on the stack to complete even if its timeout value is 0: */

// prints a,b, c:
console.log('a');
console.log('b');
console.log('c');

// prints e, f, THEN d, because the setTimeout function is asynchronous:
setTimeout(function() {
    console.log('d');
}, 0);

console.log('e');
console.log('f');