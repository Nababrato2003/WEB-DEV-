//hoisting impact per var , let and const
//hoisting--> jokhon amra akta variable JS a banai , tokhon oi varibale ta duto bhaag hoya jay , and otar declare part  upor a chole jay and otar initialization part niche theke jay 

//console.log(a); 
//var a = 12;

// var --> hoist --> undefined
// let --> hoist --> temporal deadzone error
// const --> hoist --> temporal deadzone error

//output confusion, Question1 
console.log(nm);
var nm = "Harsh";

//Question2
console.log(age); 
let age = 25;//here age is in temporal deadzone , so it will throw error, and it say "ReferenceError: Cannot access 'age' before initialization"

//Question 3
var x = 1;
{
    var x = 2;
}
console.log(x);
//here output is 2 , since we are using VAR, var ar jonno both x =1 and x = 2 read hocche , since var ignores block scope , JS bhabe j okhane kono block nei, so the output becomes 2 as X becomes updated 
//But when we use "Let" then it considers the block scope and since baire ar variable x=1, baire ache so output will be 1,block ar moddha jei X ta ache , ota block ar moddha e consider hobe , outside of block consider hobe nah , so output will be 1