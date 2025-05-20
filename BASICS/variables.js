const accoundID=1001; // no change allowed
let accounetEmail="example@gmail.com"; // change allowed scope is ok
var accountPassword="123456789";// change allowed scope is not ok not recommended
accountCity="New York"; // change allowed

//accoundID=2002;
accounetEmail='o'; 

console.log(accoundID); 
console.log(accounetEmail); 
console.table([accoundID, accounetEmail, accountPassword, accountCity]); // table format
 
// if you declare a varibale and not assign any value to it, it will be undefined
// use let and const to declare variables because of block scope and function scope
