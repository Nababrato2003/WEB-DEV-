//typeof and instanceof 

typeof null // gives object , but this is wrong type 
typeof [] // gives object , but this is wrong type, should have given array 
//baki majority of case ar jonno typeof , gives right type of datatype 

typeof NaN // gives Number as type 

//instanceof 
let a = [];
a instanceof Array // true , tells that a is an array 

let b = {}
b instanceof Object // gives true since  b is of type object , tai jonno true deba 
b instanceof Array // gives false , since b is not of datatype Array 


let c = 12;
console.log(c instanceof Number);// this gives false 
console.log(c);
//NOTE --> instanceof sudhu kaaj kore for reference value , not for primitive type of value  such as object, array,fucntions are reference value tai jonno kaaj korechilo


//typeof --> for primitive value (in general)
// instanceof --> for reference value(in general)

