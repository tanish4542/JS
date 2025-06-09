const array=["sun", "moon", "stars"];

const value=array.forEach((item)=>{
    console.log(item);
})

// The above code will print each item in the array: "sun", "moon", "stars".
// The forEach method executes a provided function once for each array element.
console.log(value);
// The value returned by forEach is always undefined, as it is not designed to return a value.
// It is used for side effects, such as logging or modifying elements in the array. 
const array2=[1, 2, 3, 4, 5];
const value2=array2.filter((item)=>item>4);
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
console.log(value2);

const value3=array2.filter((item)=>{
    item>4
});
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
console.log(value3);

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const userbooks=books.filter((bk)=>bk.genre=="History")
console.log(userbooks);
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// In this case, it filters the books array to include only those with the genre "History".

