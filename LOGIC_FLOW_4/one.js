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