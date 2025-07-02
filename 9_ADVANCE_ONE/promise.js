// new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log("Async function working ");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async function resolved");
    
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }  
//     }, 1000);
// })
// promiseFive.then(function(){
//     console.log("promise if finished")
// }).catch(function(error)
// {
//     console.log(error);
// })

// async function consume_promise() {
//     try{
//         const response=await promiseFive
//     console.log(response)
//     }
//     catch{
//         console.log("Error handled");
        
//     }
// }
// consume_promise()

async function getallusers() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data)
    }
    catch{
        console.log("Error");
    }
}
getallusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))