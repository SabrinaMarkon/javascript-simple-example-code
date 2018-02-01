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

/* Example of more fun with callback functions */

// 1: let's make an object:
let techStack = [
    {name: 'PHP', years: 20, level: 'Advanced'},
    {name: 'JavaScript', years: 20, level: 'Intermediate'},
    {name: 'React', years: 1, level: 'Novice'},
    {name: 'Redux', years: 1, level: 'Novice'},
    {name: 'Git', years: 3, level: 'Intermediate'},
    {name: 'HTML', years: 25, level: 'Advanced'},
    {name: 'Python', years: 2, level: 'Novice'},
    {name: 'R', years: 1, level: 'Novice'},
    {name: 'CSS', years: 20, level: 'Advanced'},
    {name: 'Java', years: 2, level: 'Novice'},
    {name: 'Laravel', years: 3, level: 'Intermediate'},
    {name: 'TypeScript', years: 1, level: 'Novice'},
    {name: 'Lua', years: 1, level: 'Novice'},
    {name: 'Linux', years: 20, level: 'Intermediate'}
];

// 2: then we will make a function that uses a callback:
let processTechStack = (data, callback) => {
    // filter each item in the object to find the ones only that we want:
    let filteredTechStack = data.filter(tech => tech.level === 'Advanced');
    for (let tech of filteredTechStack) {
        if (typeof callback === 'function') {
            callback(tech);
        } else {
            console.log('The callback was not even a function!');
        }
    }
}

// 3: here is the callback function for #2:
processTechStack(techStack, function(techStackobject) {
    if (techStackobject.years <= 25) {
        console.log(techStackobject.name);
    }
});

// 4: Another way to do the same thing, using a more 'traditional' for loop (and no fat arrows..):
let processTechStack2 = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].level.toLowerCase() === 'intermediate') {
            if (typeof callback === 'function') {
                callback(data[i]);
            } else {
                console.log('The callback was not a funciton!');
            }
        }
    }
}

// 5: here is the callback function for #4, which is identical to the first (in #3):
processTechStack2(techStack, function(techStackobject) {
    if (techStackobject.years > 2) {
        console.log(techStackobject.name);
    }
});