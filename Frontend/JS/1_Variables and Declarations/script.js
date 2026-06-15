var a;
var a = 12;
let a;
let a = 12;
const a= 12;
const a; //throws error 

//declarations and initializations
var a; //declaration
var a = 12; //declaration and initialization

let a = 12//always use for variable declaration , jodi dubar declare kora hoy tahole error dibe

const a = 12; //always set kora hoya galo , it cannot be changed later 
//Let hole value or decalation value can be changed but const hole value change kora jabe nah . 

var a = 123;//global scope --> accessible anywhere in the code
{
    let a = 12;//block scope --> it can only be used in this block

}

function abcd(){
    if(true){
        let a = 12;//function scope --> it can only be used in this function
    }
}

//Reassignment and redecalration

let  a = 12;
a = 13; //reassignment is allowed with let but redeclaration is not allowed with let

//Temporal deadzone

