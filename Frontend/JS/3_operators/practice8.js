//increment and decrement 

let a = 5;
a++;
console.log(a);// gives 6 

let b = 7;
++b;
console.log(b);// gives 8

let x = 3;
let y = x++;//hee x are value 3 asbe due to post increment
console.log(x, y);// x=4, y=3, but here x ar value increase krbe by 1 

let p = 4;
let q = ++p;// p ar value ekhane e increase hoya jabe , due to pre-increment 
console.log(p, q); // p=5, q=5


let m = 10;
console.log(m--);// 10,post decrement 
console.log(m); // m=9 asbe 

let n = 5;
let result = n++ + ++n;
console.log(result);//12 


let likes = 100;
function likePost() {
    return ++likes;
}
console.log(likePost());//101 asbe and likes o 101 hobe 
console.log(likes);//101

let count = 5;
if (count-- === 5) {
    console.log("Matched");
} else {
    console.log("not matched");
}
