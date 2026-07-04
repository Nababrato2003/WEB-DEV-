//dynamic typing
//object, array, function
//string, number, boolean, null, undefined, symbol, bigint 

// '' - single quote
// "" - double quote
// `` - backtick

12 - Number
12.3 - number 

//true and false 
let a  = true ;
let b = false;

//null--> its mean nothing or empty value
let c = null;

//undefined --> it means we have created a variable but we have not assigbned any value to it yet, and jei value ta by default peyachi , ota hobe undefined value 

//Symbol --> creates a unique immutable(does not change) value , 

//in future we will use some libraries and in this case, oi libraries gulo ar moddha kichu fields , jetar similar amra o bania die and by mistake amarder library ar field original library ar fields gulo k change kore day 

let sheryjs = {
    uid : 12, //will be changed to 1 , due to nichar line of code
    //the above will be overwritten with value 1
    model : "Harsh",
}

sheryjs.uid  = 1;//this will change the uid which is present by default in the library 'sheryjs'   
//to avoid this we use symbol 

let u1 = Symbol("uid");
let u2 = Symbol("uid"); //but u1 !== u2 , both are unique

let obj  = {
    uid : 1,
    name: "Harsh",
    age:12,
    email : "test@gmail.com"
};

let u1 = Symbol("uid");
obj[u1] = "001";
//here 'obj' ar uid 1 thakbe , ota overlap hobe nah , u1 is a unique symbol jetar value 001 hobe



//BigInt --> it is used to store large numbers , which are greater than Number.MAX_SAFE_INTEGER
let a = Number.Max_SAFE_INTEGER; //9007199254740991
a = a+2; //9007199254740992 hobe , but this is not safe , so we use BigInt
//Numvber.MAX_SAFE_INTEGER --> 9007199254740991 ai value ta opdi akta safe integer value nawa jabe , but after this value ta safe na , so we use BigInt

let a = 9007199254740991n; //n diye indicate kora hoy je eta BigInt
a = a + 2n; //9007199254740993n hobe , and this is safe
a = a + 4n; //9007199254740997n hobe , and this is safe




/*Array , object , function --> reference data types*/
//for array
let a = [1,2,3,4,5]; //array
let b = a ;
b.pop(); // this will remove the last element from both a and b 

//for object 
let a = {
    name : "Harsh",
};

let b = a;
b.name = "Nababrato";// this will change the name property of both a and b, so this is a problem for both array and object 

