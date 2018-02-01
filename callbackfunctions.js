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

/*
A good application for callback functions is EVENT LISTENERS. We do not want anything
to happen until the event, such as a user click, occurs!
When even the event occurs it calls back the function.
*/

/* Notice that the below happens FIRST! Before the above functions! 
Callbacks allow asynchronous callbacks! (we don't have to wait for one to etech in order before something else is started)
*/
let theButt = document.querySelector('#mybutton');
theButt.addEventListener('click', (e) => { 
    alert('yay u! You clicked theButt!') // yes...I know...
    setTimeout(LogCall, 3000); // happens 3 secotechs after clicking the button. So may end up anywhere between the function calls above.
});

