const MyArray = [1, 2, 3, 4, 5];
console.log(MyArray); // [1, 2, 3, 4, 5] (array of numbers)
console.log(MyArray.length); // 5 (length of the array)
console.log(MyArray[0]); // 1 (first element of the array)

//Mehthods
console.log(MyArray.push(6)); // 6 (adds 6 to the end of the array, returns new length)
console.log(MyArray); // [1, 2, 3, 4, 5, 6] (array after push)
console.log(MyArray.pop()); // 6 (removes the last element, returns it)
console.log(MyArray); // [1, 2, 3, 4, 5] (array after pop)
console.log(MyArray.unshift(0)); // 6 (adds 0 to the beginning of the array, returns new length)
console.log(MyArray); // [0, 1, 2, 3, 4, 5] (array after unshift)
console.log(MyArray.shift()); // 0 (removes the first element, returns it)
console.log(MyArray); // [1, 2, 3, 4, 5] (array after shift)
console.log(MyArray.includes(3)); // true (checks if 3 is in the array)
console.log(MyArray.indexOf(3)); // 2 (index of 3 in the array)
console.log(MyArray.slice(1, 3)); // [2, 3] (returns a shallow copy of elements from index 1 to 3)

const MyArray2 = [6,7,8];
console.log(MyArray2.join()); // '6, 7, 8' (joins elements into a string with ', ' as separator)

//slice and splice
console.log(MyArray2.slice(0,3)); // [7, 8] (returns a shallow copy of elements from index 1 to the end)
console.log(MyArray2.splice(1, 2)); // [7] (removes 1 element starting from index 1, returns removed elements)
console.log(MyArray2); // [6, 8] (array after splice)
