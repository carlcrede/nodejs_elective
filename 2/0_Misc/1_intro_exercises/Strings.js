// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

let n1 = Number(numberOne);
let n2 = Number(numberTwo);
let result = n1 + n2;
console.log(result);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let precisionResult = result.toPrecision(3);
console.log(precisionResult);


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let avg = one + two + three / 3;
console.log(avg.toPrecision(7));


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

let c_char = letters[2];
console.log(c_char);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
let fact_copy = fact.slice();
fact_copy = fact_copy.replace('j', 'J');
console.log(fact_copy);

// another solution
const result_string = fact.replace('j', 'J');
console.log(result_string);
// --------------------------------------