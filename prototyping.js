/* Prototyping */

/* 
Almost (not the default object or null objects) every object in JS has an internal property that is a reference to another object. It is linked to another object. This linked object is called the prototype.

Objects inherit properties and methods from its prototype ancestry.

prototype chain: object <- object's prototype <- object's object's prototype - inherits properties and methods down the chain.

Prototype is automatically assigned, but we can DEFINE an object's prototype!
*/

// Example:
let obj = {} // it is 'undefined' in the console if we type obj

// but methods still work on it? It has no methods itself so where does toString and other methods come from? Ans: obj's PROTOTYPE OBJECT.
obj.toString(); // returns "[object Object]" <- where Object, the default object, is the prototype object for obj.

obj.toString = function() { console.log("Object"); } // now it executes its own toString instead of the one above it in the chain.

// everything in JS EXCEPT primitives is an object:
let arr = [1, 2, 3];
arr.indexOf[2]; // 1, because indexOf is in the Array prototype.

