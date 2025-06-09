//Immediately Invoked Function Expression (IIFE) - A function that runs as soon as it is defined
// we use IIFE to avoid polluting the global scope with variables and functions that are only needed temporarily.
(function() {
    console.log("This is an IIFE (Immediately Invoked Function Expression)"); // This will run immediately
})(); //we use ; to end the iife function expression
//enclosed in parentheses to make it immediately invoked

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}! This is an IIFE with parameters.`); // This will run immediately with the provided parameter
})("Tanish"); // Passing the parameter "Tanish" to the IIFE
// This will output: Hello, Tanish! This is an IIFE with parameters.