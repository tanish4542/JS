const array=[1,2,3,4,5]
const array2=[6,7,8]
//console.log(array.push(array2));// 8 (adds array2 to the end of array, returns new length)
//console.log(array); // [1, 2, 3, 4, 5, [6, 7, 8]] (array after push)
console.log(array.concat(array2)); // [1, 2, 3, 4, 5, 6, 7, 8] (concatenates array and array2)
console.log(array); // [1, 2, 3, 4, 5] (original array remains unchanged)

const array3 = [...array, ...array2]; // Spread operator to concatenate arrays
console.log(array3); // [1, 2, 3, 4, 5, 6, 7, 8] (concatenated array using spread operator)

const array4=[1,2,3,[4,5,6],7,8];
console.log(array4.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8] (flattens the array by one level)

Array.isArray(array4); // true (checks if array4 is an array)
console.log(Array.from("tanish")) // ['t', 'a', 'n', 'i', 's', 'h'] (creates an array from a string)

let num1=1;
let num2=2;
let num3=3;
let num4=4;
console.log(Array.of(num1, num2, num3, num4)); // [1, 2, 3, 4] (creates an array from the given numbers)