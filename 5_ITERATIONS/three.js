//All the below loops are array specific loops
//The loops are used to iterate over the elements of an array and perform some operations on them

//forOf 
// The for...of loop is used to iterate over iterable objects like arrays, strings, and maps.
// It provides a simple way to access each element in the iterable without needing an index.
const myArray = ["flash", "batman", "superman"];
for (const hero of myArray) {
    console.log(hero);
}

const myString = "hello";
for (const char of myString) {
    console.log(char);
}

//Maps
//if we use for_in loop on maps it will give us keys of the map
// The for...in loop is not suitable for maps, as it will iterate over the keys of the map, not the key-value pairs.
const newmap = new Map();
newmap.set("name", "John");
newmap.set("age", 30);
newmap.set("city", "New York");
for(const key of newmap)
{
    console.log(key);
}// The for...of loop can also be used with maps, but it will iterate over the keys of the map.

for (const [key, value] of newmap) {
    console.log(`${key}: ${value}`);
}
// The for...of loop can also be used with maps, allowing you to iterate over key-value pairs easily.

