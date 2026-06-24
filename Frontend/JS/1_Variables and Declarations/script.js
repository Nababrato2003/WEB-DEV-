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

//Temporal deadzone--> this means that if we try to access a variable before it is declared, it will throw an error., but it will be acknoledged by the compliler that the value of 'a' is present , kintu initialize hoya nei . In most of the programming languages, if we try to access a variable before it is declared, it will throw an error. But in JavaScript, it will not throw an error, but it will return undefined. This is because of the concept of hoisting. Mane Java script jane j a variable a ache but initialize hoya nei , tai undefined return kore .

//console.log(a);

//let a = 12; //error because of temporal deadzone and ai tempotal deadzone er karone a variable ke access kora jabe na jodi declare er age access kora hoy .

//starting theke oi variable opdi joto ta space ache , otao temporal deadzone er modhye pore , tai oi variable ke access kora jabe na jodi declare er age access kora hoy .

//but ai issue ta sudhu 'let' and 'const' ar jonno hoy , 'var' ar jonno hoy nah , karon var ar jonno hoisting hoy , tai var ar jonno temporal deadzone er issue hoy nah .
let c = 16;//upor ar faka lines gulo temporal deadzone ar moddha pore
let a = 12;

