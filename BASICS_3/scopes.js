// let and const follow block scope
// var follows global scope you can access it outside the block

{
    const x=10;
    let y = 20; // Block scope variable
    var z = 30; // Global scope variable
    console.log("Inside block: x =", x, ", y =", y, ", z =", z);
}
console.log("Outside block: z =", z); // z is accessible outside the block
// console.log("Outside block: x =", x, ", y =", y); // x and y are not accessible outside the block
// Using let and const outside the block will result in an error

function one()
{
    const a = 10; // Block scope variable
    function two()
    {
        const b = 20; // Block scope variable
        console.log("Inside function two: a =", a, ", b =", b);
    }
    two(); // Calling the inner function to access variables
    // console.log("Inside function one: b =", b); // This will result in an error because b is not accessible here
}
one(); // Calling the outer function to execute the code


//++++++intersting part++++++
console.log(addone(5)); // Displaying the result of the function call
function addone(num1)
{
    return num1 + 1; // Adding 1 to the input number
}

const addTwo = function(num) {
    return num + 2; // Adding 2 to the input number
}
// two ways to define a function
 