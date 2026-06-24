//hoisting impact per var , let and const

//hoisting--> jokhon amra akta variable JS a banai , tokhon oi varibale ta duto bhaag hoya jay , and otar declare part  upor a chole jay and otar initialization part niche theke jay 

console.log(a); 
var a = 12;

// var --> hoist --> undefined
// let --> hoist --> temporal deadzone error
// const --> hoist --> temporal deadzone error

console.log(nm);
var nm = "Harsh";