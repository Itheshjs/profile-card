// let headingElement=document.getElementById("heading1")

// console.log(headingElement.innerHTML) //output : Welcome <span>ww<span> to ws
// console.log(headingElement.innerText) //output : welcomeww to ws

// //diffrence btw the innerhtml and innertext
// //innerhtml give or return text tag 
// //in innertext give or return only text 


// //queryselector()
// //in queryselector we can acceass by id ,class,and tagname
// //but important thing is we can't aceass at a same time we can  aceass only one at a time

// // let input = document.querySelector("#num1")
// // console.log(input)

// //queryselector targeting the 2 element and that  element have the same name then it  aceass the first element 

// let inputElementName=document.querySelector("#name")

// let inputElementEmail=document.querySelector("#email")

// console.log(inputElementName.type);

// inputElementName.placeholder=" enter your name"

// console.log(inputElementName.value)

// inputElementName.value="ithesh"

// inputElementEmail.placeholder="enter your email"

// console.log(inputElementEmail.placeholder);

let allLiElement=document.querySelectorAll("li")

console.log(allLiElement);

allLiElement.forEach((items,index)=>{
    console.log(items.innerHTML)
})




