//IF statement
// The if statement executes a block of code if a specified condition is true.
// Syntax: if (condition) { // code to be executed if condition is true }
// <,>// <=, >, >=, ==, !=, ===, !== are comparison operators used in conditions.
//=== checks for both value and type equality, while == checks only for value equality.
let a = 10;
let b = 20;
if (a < b) {
    console.log("a is less than b");
}
else {
    console.log("a is not less than b");
}   

//IF ELSE statement
let c = 30;
if (a < b) {
    console.log("a is less than b");
}
else if (a > b) {
    console.log("a is greater than b");
}
else {
    console.log("a is equal to b");
}

//SCope of variables
// Variables declared with var are function-scoped or globally scoped, while let and const are block-scoped.
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);
// The above code will throw an error because 'power' is not defined outside the if block.

if (balance > 500) console.log("test"),console.log("test2"); 
// The above code will execute both console.log statements if the condition is true.
//, is used to separate multiple statements in a single line.