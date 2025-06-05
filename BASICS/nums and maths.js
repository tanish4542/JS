/*
const number=400
const num = new Number(400.12) // Number object
// if you declare a number using new keyword, it becomes an object and it will be shown as
// [Number: 400] will be a dictionary object so it will look like {
//   [[PrimitiveValue]]: 400
// }
console.log(num);   // [Number: 400.12] (Number object)
console.log(typeof num); // 'object' (type of the Number object)
const num_s=num.toString();
console.log(num_s); // '400' (string representation of the number)
console.log(num_s.length)
console.log(num.toFixed(2)) // '400.00' (fixed-point notation with 2 decimal places)
console.log(num.toExponential(2)) // '4.00e+2' (exponential notation with 2 decimal places)
console.log(num.toPrecision(3)) // '400' (string representation with 3 significant digits)
const hundres=100000
console.log(hundres.toLocaleString('en-IN'))
// '1,00,000' (formatted according to Indian locale)
console.log(hundres.toLocaleString('en-US'))
// '100,000' (formatted according to US locale)

// // math methods
console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045
console.log(Math.abs(-10)) // 10 (absolute value)
console.log(Math.ceil(4.2)) // 5 (rounds up)
console.log(Math.floor(4.8)) // 4 (rounds down)
console.log(Math.round(4.5)) // 5 (rounds to nearest integer)       
console.log(Math.max(1, 2, 3)) // 3 (maximum value)
console.log(Math.min(1, 2, 3)) // 1 (minimum value)
console.log(Math.random()) // random number between 0 and 1
console.log(Math.sqrt(16)) // 4 (square root)
console.log(Math.pow(2, 3)) // 8 (2 raised to the power of 3)
console.log(Math.log(10)) // 2.302585092994046 (natural logarithm)
console.log(Math.log10(100)) // 2 (base 10 logarithm)
console.log(Math.sin(Math.PI / 2)) // 1 (sine of PI/2)
console.log(Math.random() * 100) // random number between 0 and 100;
*/
const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min+1)+min))


