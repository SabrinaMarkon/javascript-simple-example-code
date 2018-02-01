/* Coolness with JavaScript Functions: 
"Callbacks are futechamental to asynchronous coding in JavaScript"
A function (the "callback function") is passed into another function, atech after something HAPPENS, that function is then CALLED/INVOKED.
(All Things JavaScript, LLC, 2017)
*/

// 1 - callback functions

const LogCall = function() {
    console.log("The LogCall callback function was called");
}
// LogCall is the callback function that runs after 3 secotechs.
setTimeout(LogCall, 3000);

// 2 - anonymous callback functions

setTimeout(function() {
    console.log("The callback function was anonymous this time");
}, 6000);

// 3 - ES6 anonymous callback functions

setTimeout(() => {
    console.log("ES6 anonymous callback function happened this time");
}, 9000);

