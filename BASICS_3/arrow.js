const user={
    UserName:"Tanish",
    Price:999,
    welcomeMessage: function() {
        console.log(`Welcome to website ${this.UserName}`);
        console.log(this) // Displaying the current context of 'this'
        //output {username: "Tanish", Price: 999, welcomeMessage: function}
    }
}
user.welcomeMessage(); // Calling the method to display the welcome message
user.UserName = "Yoyo"; // Changing the UserName property
user.welcomeMessage(); // Calling the method again to display the updated welcome message
console.log(this); // Displaying the global context of 'this' 
// Output: {username: "Yoyo", Price: 999, welcomeMessage: [Function: welcomeMessage]}
//this is an object that refers to the current context in which the code is executing.


//function chai()
//{
//    console.log(this);
//}
//chai()
// Output: global object (in browser, it will be 'window' object)

const chai=function() {
    let username="tanish"
    console.log(this.user);
}
chai(); // Output: undefined (in strict mode, 'this' will be undefined, in non-strict mode, it will refer to the global object)

//Arrow functions
const chai2=() => {
    let username="tanish"
    console.log(this.user);
}
chai2(); // Output: undefined (in strict mode, 'this' will be undefined, in non-strict mode, it will refer to the global object)

//basic arrow function () => {}
const add = (a, b) => {
    return a + b; // Returning the sum of two numbers
}
console.log(add(5, 10)); // Calling the arrow function to add two numbers 

const add2 = (a, b) => (a + b); // Arrow function with implicit return
console.log(add2(5, 10)); // Calling the arrow function to add two numbers