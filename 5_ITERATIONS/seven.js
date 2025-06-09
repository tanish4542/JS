// This code creates an array of numbers from 1 to 10 and then uses the map method to add 10 to each number in the array.
const array=[1,2,3,4,5,6,7,8,9,10]
console.log(array.map((num)=>num+10))
// The map method creates a new array with the results of calling a provided function on every element in the calling array.

//Chaining methods allows you to perform multiple operations on the array in a single expression.
const name=array
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>40)
console.log(name);
