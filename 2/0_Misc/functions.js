// create a function called myFirstFunction which returns a greeting

// hoisting
const returnValue = myFirstFunction();
console.log(returnValue);

function myFirstFunction() {
    return "Top o' the mornin!"
}

// anonymous functions are not hoisted
const myVariableFunction = function () {
    console.log("Test");
}

myVariableFunction();

const myArrowFunction = () => {
    console.log("Hello from the anonymous function which is also an arrow function");
}

// callback functions

function sayHiLater(anyFunctionReference) {
    anyFunctionReference();
}

const sayHi = () => { console.log("Hi"); }

sayHiLater(sayHi);

const sayHello = () => { console.log("Hello"); }

sayHiLater(sayHello);


function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => { 
    return `${name} has been poked!`; 
}

const impeach = (name) => {
    return `${name} has been impeached for the 2nd time!`;
}

interact(poke, "Anders");
interact(impeach, "Donald Trump");

interact((name) => "lick " + name, "Yoda");


