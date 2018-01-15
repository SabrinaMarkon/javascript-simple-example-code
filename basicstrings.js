let str = "I like cats";

// Find the length of a string. PHP compare strlen()

let stringlength = str.length;
console.log(str + ' is ' + stringlength + ' characters.');

// Find character at string index. PHP compare str_split() into an array, str[], then str[0]
// OR simply substr("abcdef", 0, 1); to return the first character. (substr has a lot of different techniques)

let firstchar = str[0];
console.log('The first character of ' + str + ' is ' + firstchar);

// get the last character using combination of bracket notation and length. since indexing starts at 0 for the first character,
// it means the last character is the total length - 1.
let lastchar = str[str.length - 1];
console.log('The last character of ' + str + ' is ' + lastchar);

let secondlastchar = str[str.length - 2];
console.log('The second last character of ' + str + ' is ' + secondlastchar);

// We can change a string into a whole new string, but since strings in js are immutable, we can't
// simply change part of the contents. 

// PHP compare: Again str_split() into an array, str[], then str[0] = whatever, then string_join() to change back into a string.
// OR simply use: str_replace("world","Squeebz","Hello world!");

str[0] = 'A';
console.log(str); // it still says 'I' like cats. Ignores the attempted assignment of 'A' to the first character.

