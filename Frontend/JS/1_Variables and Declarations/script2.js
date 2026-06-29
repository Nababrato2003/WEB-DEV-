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
var x = 1;//global
{
    var x = 2;//global
}
console.log(x);
//here output is 2 , since we are using VAR, var ar jonno both x =1 and x = 2 read hocche , since var ignores block scope , JS bhabe j okhane kono block nei, so the output becomes 2 as X becomes updated 
//But when we use "Let" then it considers the block scope and since baire ar variable x=1, baire ache so output will be 1,block ar moddha jei X ta ache , ota block ar moddha e consider hobe , outside of block consider hobe nah , so output will be 1

//Question 4
let a = 10;//block scope allowed //global 
{
    let a = 20;
    console.log("Inside :", a);
}
console.log("Outside :", a);
//inside ar jonno block scope ar inside ta access krche , outside block ar jonno global scope ta access korbe, so output will be 20 and 10 respectively

//Question 5
if (true) {
    var a = 1;
    let b = 2;
}
console.log(a);
console.log(b);//let is block-scoped.This means b exists only inside, calling console.log(b) outside the block will throw a ReferenceError, because b is not defined in that scope.

//var--> cannnot be used outside of function 
//let --> cannot be used outside of curly braces,i.e outside of block scope

const person = {name:"Harsh"};
person.name = "Sharma";//Allowed
person = {}; 

