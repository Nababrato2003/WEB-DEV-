// operators --> arithmetic, comparision , logical , assignment , unary , ternary 

/*+, -, *, /, %, **
=, == ==
< >, <= =>, !, !=. !==, !!
&&, ||
?: */

//Arithmetic operators--> + - * / % **

console.log(1 + 2); // this does numeric additin 
console.log("Ha" + "rsh");//does concatenation 
console.log(12 - 2);//substration only job 
console.log(12 * 2);
console.log(12 * 2);
console.log(12 % 2);
console.log(12 % 5);//remainder ta thakbe as answer in case of modulus or modulo
console.log(2 ** 3);

//Comparision operators--> =, ==, ===,!=,!==, >=,<=,<,>,
let a = 12//assignment operator 
12 == 13// false
12 == "12"// true dekhabe but duto alada alada  
12 === "12" // false asbe , properly kaaj a ase 
12 != 13 // true
"harsh" != "harshita" // true
// == --> value check , not strict comparision
// === --> value and type both check, strict comparision 
12 !== 12 // false


//Assignment operators --> = += -= *= /= %= **= 
let b = 12;
a += 3;//same a = a+3;
a -= 11;//same a = a-11;
a *= 2; //same a = a*2;
a /= 2;//same a = a/2;
a %= 2;//same a = a%2;
a **= 2;//same a = a**2;

//Logical operators--> &&,||
true && true = true
true && false = false
false && true = false
false && false = false

12 > 13 && 13 > 10 //false asbe since left side is false and right side is true thus false && true = false 

true || true = true
true || false = true
false || false = false

12 > 13 || 13 > 10 // false answer asbe since left side is false and right side is true thus false || true = true, ||--> means or, mane either left side thik hobe nahole right side thaklei hobe
// && --> means and and 
!false // true hobe since false ar age not dawa hoyache 


 //Unary operators--> +, -, !, typeof, ++, --
+ "5" // converts into a number , by putting + in front of a string 
+ "harsh" // NAN hobe, cannot be converted 

let c = 12;
++c// this gets us 13, pre increment
--c// this gets us 11, pre decrement
c++// this gets us 13, post increment
c--// this gets us 11, post decrement
let x = 10;
let y = ++x;// pre increment
console.log(x);//11
console.log(y);//11
let p = 10;
let q = p++; // post increment
console.log(p);//11
console.log(q);//10

//Ternary operator --> ?:

//condition ? true hole code : false howar code 
12>13 ? console.log("true") : console.log("false") // false answer asbe 


















