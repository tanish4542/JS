//for objects we use for...in loop
// The for...in loop is used to iterate over the properties of an object.
//for in loop is used to access the keys 
//so if we print the array it will print the keys of the array and key of the array are itsindexes
// whereas for...of loop is used to access the values of the array
const myobject = {
    name: "John",
    age: 30,
    city: "New York"
};

for(const key in myobject) {
    console.log(key, myobject[key]);
}
// The for...in loop is used to iterate over the properties of an object.