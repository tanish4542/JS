"use strict"; // treat all js code as newer version

// alert("Hello World"); // we are using node so it will not work

console.log(3+3);
// number
//bigint
// string
// boolean
// null
// undefined
// symbol


// object

console.log(typeof 3); // number
console.log(typeof undefined); // undefined
console.log(typeof null)    ; // object
console.log(typeof "hello"); // string
console.log(typeof true); // boolean

const myobject={
    name:"tanish",
    age:22,
    isStudent:true,
    address:{
        city:"New York",
        state:"NY"
    }
}
const myarray=[1,2,3,4,5];
const myfunction=function(){
    console.log("hello");
}
 // https://262.ecma-international.org/5.1/#sec-11.4.3