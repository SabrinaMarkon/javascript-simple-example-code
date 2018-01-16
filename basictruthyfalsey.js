/*
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

3 == '3'  // returns true because JavaScript performs type converstion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed

*/

console.log(typeof false); // boolean
console.log(typeof '1'); // string
console.log(typeof 0); // number
console.log(typeof 10); // number

/*
EQUALITIES:
1   ==  1    // true
1   ==  2    // false
1   == '1'   // true
"3"  ==  3    // true

STRICT EQUALITIES:
1   ===  1    // true
1   ===  2    // false
1   === '1'   // false
"3"  ===  3    // false

INEQUALITIES:
1 != 2      // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false

STRICT INEQUALITIES:
3 !== 3   // false
3 !== '3' // true
4 !== 3   // true
*/