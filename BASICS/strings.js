const name ="tanish"
const gamename = new String("tanish")
// if you decclare a string using new keyword, it becomes an object and it will be shown as 
// [String: 'tanish'] will be a dictionary object so it will look like {
//   [[PrimitiveValue]]: 'tanish'
// }
console.log(gamename[0]) // t

const repocount= 50
console.log(name+repocount)

console.log(`Hello my name is ${name} and my repo count is ${repocount}`) // modern way of string interpolation
console.log("Hello my name is " + name + " and my repo count is " + repocount) // old way of string interpolation

//Methods of string
console.log(name.__proto__) // String.prototype
console.log(name.length) // 6
console.log(name.toUpperCase()) // TANISH
console.log(name.toLowerCase()) // tanish
console.log(name.charAt(0)) // t
console.log(name.indexOf("n")) // 2
console.log(name.lastIndexOf("n")) // 4
console.log(name.slice(0, 3)) // tan
console.log(name.substring(0, 3)) // tan
console.log(name.replace("tanish", "Tanish")) // Tanish
console.log(name.split("")) // [ 't', 'a', 'n', 'i', 's', 'h' ]
console.log(name.split("a")) // [ 't', 'nish' ]
console.log(name.includes("ni")) // true
console.log(name.startsWith("ta")) // true
console.log(name.endsWith("sh")) // true
console.log(name.trim()) // tanish (removes whitespace from both ends)
console.log(name.repeat(2)) // tanishtanish
console.log(name.concat(" is a gamer")) // tanish is a gamer
console.log(name.padStart(10, "0")) // 0000tanish (pads the string to the start with 0)
console.log(name.padEnd(10, "0")) // tanish0000 (pads the string to the end with 0)
console.log(name.match(/n/)) // [ 'n', index: 2, input: 'tanish', groups: undefined ]
console.log(name.match(/n/g)) // [ 'n', 'n' ] (global match)
console.log(name.search("n")) // 2 (returns the index of the first match)