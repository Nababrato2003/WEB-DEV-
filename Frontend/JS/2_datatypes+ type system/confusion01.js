//Q1) Why NaN(not a number) is a number in JS ?
 //Ans) NaN is a number becoz considering an example 2*"hello" = NaN, mane mathematical operation is not possible with string tai jonno we get the answer as NaN, since this is a failed numerical operation tai jonno NaN is considered as a number type in JS 

 //Q2)undefined vs null
let x;
console.log(x);//undefined
let y = null;
console.log(y);//null
//jokhon kono varaible decalre kori , then JS by default assign the value as undefined , but to avoid that we need to assign some value to it
//null is give manually to the variable , j pore oi variable ar moddha kichu input dite parbo ba onno kichuu pore ami assign krte parbo 
//undefined --> by default assigned 
//null --> manually assigned

//*Q3)'5' + 1 vs '5' - 1
//ans)
"5"+ 1// "51" hobe , the compiler tries to number into string and then concatenate it , so the answer will be "51", this happend in JS
"5" - 1// 4 hobe , the compiler tries to convert string into number and then subtract it , so the answer will be 4, this happend in JS 
//If there is any other operator than +, then it tries to convert the string into number , this is what always the compiler tries to do 
//Thus operation decide kore , that conversion ta kon side a hobe , string side a naki number side a 
