//Type coercion (== vs ===)
//Truthy vs Falsy values 

//type coercion --> This is a concept in which akta type will be converted automatically 

"5" + 1// "51" hobe, since + sign add krto and also concatenation krto 
"5" - 1// 4 hobe, since - sign only akta kaaj kore which is substract



//Truthy vs Falsy values
//*Falsy values* --> 0, "", null, undefined, NaN, false, document.all


!!0// trick to get false or true value, use excamation mark twice to get it as true or false value 
!!NaN // false
!!"" // false
!!null // false
!!undefined // false
!!false // false
!!document.all // false

if(null){

}
// null is a falsy value ,so even if we have not written false , JS will treat this as false accoding to the nature of the value 

//*Truthy values* --> "0", " ", [], {}, function(){} , true, 1, -1, Infinity, -Infinity, remaining all values are truthy values
if(-1){

}
// -1 is a truthy value accoding to its nature , so tar jonno eta true te convert hobe and if block ar vitore ja ache seta execute hobe 


