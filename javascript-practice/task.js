

// // // if(1!=1){
// // //     console.log("Hello World");
// // // }

// // let score = 95;

// // if(score >= 90 && score <=100){
// //     console.log("your A+");
// // } else if(score >= 80 && score < 90){
// //     console.log("your A");
// // } else if(score >= 70 && score < 80){
// //     console.log("your B");
// // } else if(score >= 60 && score < 70) {
// //     console.log("your C");
// // } else if(score >= 50 && score < 60) {
// //     console.log("your F");
// // }else{
// //     console.log("Failed");
// // }


// let num1=Number(prompt("Enter the value"));

// if(num1%2==0){
//     console.log("Even");
// } else{
//     console.log("Odd");
// }


//Nested if..else
//if..else statement inside another if..else


// let username = "ItheshItheshjs";
// let password = "Ithesh2004";


// let usernameInput = prompt("Enter your username");

// if(usernameInput == username){
//     let passwordInput = prompt("Enter your password");
//     if(passwordInput == password){
//         console.log("Login successful");
//     } else{
//         console.log("Incorrect password");
//     }

// }else{
//     console.log("Incorrect username");
// }




// switch case is used for fix value


// let lights="yellow"

// switch(lights){
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid light color");
// }


let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
let operator= prompt("Enter the operator (+, -, *, /)");

// switch(operator){
//     case "+":
//         console.log(num1 + num2);   
//         break
//     case "-":
//         console.log(num1 - num2);   
//         break
//     case "*":
//         console.log(num1 * num2);   
//         break
//     case "/":
//         if(num2 != 0){
//             console.log(num1 / num2);   
//         } else{
//             console.log("Cannot divide by zero");
//         }


// }

if(operator == "+"){
    console.log(num1 + num2);   
} else if(operator == "-"){
    console.log(num1 - num2);   
} else if(operator == "*"){
    console.log(num1 * num2);   
}else if(operator == "/"){
    if(num2 != 0){
        console.log(num1 / num2);   
    } else{
        console.log("Cannot divide by zero");
    }
}else{
    console.log("Invalid operator");
}
