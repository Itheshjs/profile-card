// console.log("welcome")


// setTimeout(()=>{
//     console.log("welcome")
// },5000)
// console.log("welcome")

// //in this anyone is not waiting for other 
// //first it run  and print the 1st one
// //2nd it run  and print the 3rd one
// //3rd it run and print the 2nd one 

// setTimeout(()=>{
//     console.log("Task1");
//     setTimeout(()=>{
//         console.log("Task2")
//         setTimeout(()=>{
//             console.log("task3")   
//         },2000)
//     },5000)
// },1000)

//promiss : it may fullfill 
//or it may fail
//or it may pending


//the problem : callback Hell

//callback were the original way to handle async operations.Too many callback make code hard to read  and maintain .known as callback or pyramid of Doom


//what is promise

//A promise is an object that represents the eventual completion or failure of an asynchronous operation 

//states of Promis
//pending-initial state
//Fullfilled-operation succesfull
//rejected-operation failed


// let loginStatus=false
// let myPromise = new Promise((resolve,reject)=>{

//     if(loginStatus){
//     resolve({status:1,msg:"Login Done"})
//     }else{
//         reject({status:0,msg:"invalid username or password"})
//     }
// })

// myPromise.
// then
// ((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// let doneTask=(taskNumber,time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Task",taskNumber);
//             resolve()
//         },time)
//     })
// }

// doneTask(1,1000)
// .then((res)=>doneTask(2,2000))
// .then((res)=>doneTask(3,3000))


// let donTask=(number,time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("task",number)
//             resolve()
//         },time)
//     })
// }

// donTask(1,2000)
// .then((res)=>donTask(2,2000))
// .then((res)=>donTask(2,2000))


//promiss => then ,catch => it used for resolve or reject

//then is used to handle the success
// console.log(myPromise)


// let doHomeWork=(subject)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`${subject} home work done`)
//         },1000)
//     })
// }

// let finishHomework=async ()=>{
//     let mytask1=await doHomeWork("math")
//     let mytask2=await doHomeWork("English")
//     console.log(mytask1)
//     console.log(mytask2)
// }
// finishHomework()

// //to handling the Promise data we can use async and await


