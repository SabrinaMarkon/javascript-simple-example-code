// In JavaScript, arrays can be mixed types, unlike TypeScript. PHP allows mixed types as well ie. $myArray = ('Cats', 4); <- ROUND brackets!

let myArray1 = ['Cats', 4]; // <- SQUARE brackets!
console.log(myArray1);

// Multi-dimensional arrays. Same as PHP. Notice each sub-array is a different size.

let myArray2 = [["Squeebz", "Benji"], ["Nigel", "Bean", "Lucas"]];
console.log(myArray2);

let myData1 = myArray2[1]; // index 1 of the array is the sub-array ["Nigel", "Bean", "Lucas"]
console.log(myData1);

let myData2 = myArray2[1][0]; // index 0 of the sub-array that is index 1 of the parent array is "Nigel";
console.log(myData2);

// Arrays in JavaScript are mutable, unlike strings. We can change part of an array. We can't change part of a string. 
// PHP compare: We can change arrays much like we do in JavaScript, but can also change parts of strings.

myArray1[1] = 500; // 500 cats instead of just 4!
console.log(myArray1);


/*
BELOW COMMANDS:
push, pop, shift, unshift all change the original array! In both JavaScript AND PHP!
*/

// Add to the END of an array with push(). PHP compare command: array_push(arrayname, item1, item2, item3...)

myArray1.push(['reptiles', 2]); // adds a sub-arary to myArray1.
console.log(myArray1);

myArray1.push('Otis', 'Cactus'); // adds two more strings to the end of myArray1.
console.log(myArray1); 

// Take the LAST item off the end an array with pop(). We can store it in a variable. 
// PHP compare: array_pop(), which can also be assigned to a variable.
/*
PHP:
$a=array("red","green","blue");
$b = array_pop($a);
print_r($b);
*/
let gecko = myArray1.pop();
console.log(gecko); // says 'Cactus'.


// Take the FIRST item off the end an array with shift(). We can store it in a variable. 
// PHP compare: array_shift(), which can also be assigned to a variable.
/*
PHP:
$a=array("red","green","blue");
$b = array_shift($a);
print_r($b);
*/
console.log(myArray2); // FIRST myArray2 = [["Squeebz", "Benji"], ["Nigel", "Bean", "Lucas"]];
let orangeandblackandwhite = myArray2.shift(); 
console.log(myArray2); // says ["Nigel", "Bean", "Lucas"]  because the first item at index 0 ["Squeebz", "Benji"] was shifted off the array.

console.log(orangeandblackandwhite); // says ["Squeebz", "Benji"] the first index of myArray2 that was shifted off, as expected.

console.log(myArray2); // still says ["Nigel", "Bean", "Lucas"] like it ought to.

let onlyorange = myArray2.shift(); // says ["Nigel", "Bean", "Lucas"] because that was the only index left for myArray2.
console.log(onlyorange);

let myArray3 = [["Squeebz", "Benji"], "Nigel", "Bean", "Lucas"]; // let's see what happens when we chain the commands.
let thenoodle = myArray3.shift().shift();
console.log(thenoodle);  // should say "Squeebz" only because:
// first shift() gets ["Squeebz", "Benji"] and assigns to thenoodle. Then the second shift() takes just "Squeebz" off thenoodle and
// assignsto thenoodle again. Array3 should be left with "Nigel", "Bean", "Lucas"
console.log(myArray3);
// the above fooling around is sort of confusing (nutty).


// // Add to the START of an array with unshift(). PHP compare command: array_unshift(arrayname, item1, item2, item3...)
let myArray4 = ['Nigel'];
myArray4.unshift('Squeebz', 'Benji', ['Benji', 'Squeebz']);
console.log(myArray4); // says ['Squeebz', 'Benji', ['Benji', 'Squeebz'], 'Nigel']

