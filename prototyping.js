/* Prototyping */

/* 
Almost (not the default object or null objects) every object in JS has an internal property that is a reference to another object. It is linked to another object. This linked object is called the prototype.

Objects inherit properties and methods from its prototype ancestry.

prototype chain: object <- object's prototype <- object's object's prototype - inherits properties and methods down the chain.

Prototype is automatically assigned, but we can DEFINE an object's prototype!
*/

// ============================================= Simple Example:
let obj = {} // it is 'undefined' in the console if we type obj

// but methods still work on it? It has no methods itself so where does toString and other methods come from? Ans: obj's PROTOTYPE OBJECT.
obj.toString(); // returns "[object Object]" <- where Object, the default object, is the prototype object for obj.

obj.toString = function() { console.log("Object"); } // now it executes its own toString instead of the one above it in the chain.

// everything in JS EXCEPT primitives is an object:
let arr = [1, 2, 3];
arr.indexOf[2]; // 1, because indexOf is in the Array prototype (which is in the Object prototype)


// =============================================  Setting an Object's Prototype

/* PROTOTYPAL INHERITANCE is powerful, and can be used to make code more efficient

Ways to create an object and set its prototype:
1) Using a constructor function (name of function should start with a capital letter btw)
2) Using Object.create(prototype)

Way to either create an object and set its prototype  OR just assign a prototype to an existing prototype defined earlier in the code. Some say that this method, which is ES6, is resource intensive so should be avoided currently.
1) Using Object.setPrototypeOf(obj, prototype)


EXAMPLES!
*/
let ourProto = {
    namecat: function() {
        console.log(this.name + ' is fuzzy and cute!')
    }
};

// Type #1 - constructor function
let DescribeMyCat = function(name) {
    this.name = name;
    //console.log('I am ' + this.name);
};

DescribeMyCat.prototype = ourProto; // set the prototype object.
let obj1 = new DescribeMyCat('Squeebz');
obj1.namecat(); 

// Type #2 - Object.create
let obj2 = Object.create(ourProto); // can also pass a second parameter with name/value pairs if we need to.
obj2.name = 'Benji';
obj2.namecat(); 

// Type #3 - ES6 - setPrototypeOf(obj,prototype);
let obj3 = {
    name: 'Nigel'
}
Object.setPrototypeOf(obj3, ourProto);
obj3.namecat();

// still type #3 but I don't want to leave out Bean :)
let obj4 = {
    name: 'Bean'
}
Object.setPrototypeOf(obj4, ourProto);
obj4.namecat();
// obj4 linked to prototype function namecat.


// More Practice:

// function:
let pokemon = function(type) {
    this.type = type;
}
// set prototype:
pokemon.prototype.getTypePrototype = function() {
    return this.type;
}
// use the prototype:
let magcargo = new pokemon('Fire');
console.log("Magcargo is a " + magcargo.getTypePrototype() + " type Pokemon");


