//dynamic typing--> JS ar moddha static typing nei sudhu ekhane dynamic typing ache which means that we can change the data since here dynamic data type ache 

int a = 12;
a = true; //this is not possible since age theke a is int data type so we cannot change it to boolean ,and this is static styping , but in JS we can do this since JS is dynamic typing , so we can change the data type of a variable at any time

let a = 12;
a = true;
a = "harsh";
a = null;
a = [];
a = undefined;
// this is possible in JS, this is called dynamic typing 


//typeof quirks (e.g. typeof null === 'object')
typeof 12 // "number"
typeof "harsh" // "string"
typeof true // "boolean"
typeof null // "object"
typeof undefined // "undefined"
typeof [] // "object"
typeof {} // "object"
typeof NaN // "number"
NaN === NaN // false
0.1+0.2 === 0.30000000000000004 // this is due to floating point precision issue in JS, so we use toFixed() method to fix this issue
[] + [] // "" (empty string)
1 + "1" // "11" (string concatenation)

//these above are called quirks in JS



