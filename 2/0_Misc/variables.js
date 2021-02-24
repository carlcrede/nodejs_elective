

// "use strict"; - helps us to avoid some bad practices
// never EVER do this
// totalGlobalVariable = "My total global variable";

let variableA;
let variableB;

console.log(variableA + variableB);
console.log(variableA, variableB);

// are objects truly immutable in js? NO
const myObject = {
    attribute: "value"
};
Object.freeze(myObject); // - makes myObject immutable, but errors are only thrown if we use strict mode
myObject.attribute = "other value";
myObject["attribute"] = "other value";
console.log(myObject);

// type coercion - js tries to determine types and converts types
// use === to avoid coercion  "hard equality" 

{
    // this is a new scope block
    let scopeVar = "abc";
    {
        // this is a nested scope that inherits from the prevoius scope
        scopeVar = 123;
    }
    console.log(scopeVar);
}

{
    let scopeVar = "abc";
    {
        let scopeVar = 123;
        console.log(scopeVar);
    }

    console.log(scopeVar);
}

for (let index = 0; index < 6; index++) {
    setTimeout(() => {
        console.log(index);
    }, 1000);
}