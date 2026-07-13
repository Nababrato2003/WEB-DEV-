//Early return pattern --> This means if any condition satisfies then return the value and stop the execution of the code, the rest of the conditions will not be executed

function getVal(val) {
    if (val < 100) return 'A';
    else if (val < 75) return "B";
    else if (val < 50) return "C";
    else return "D";
}
console.log(getVal(89));
// if the code is like this then sob numbers which are less than 100 will generate the first condition result,  for that reason you need to reverse the pattern to ensure that the code will work correctly 

//Fixed function 
function getVal(val) {
    if (val < 25) return 'D';
    else if (val < 50) return "C";
    else if (val < 75) return "B";
    else return "A";
}
console.log(getVal(85));// output--> A
console.log(getVal(45));// output--> C
console.log(getVal(74));// output--> B
console.log(getVal(19));// output--> D

