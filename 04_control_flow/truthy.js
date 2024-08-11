// const userEmail = "a@gmail.com" //o/p is Got User Email case1 
//const userEmail = []; //o/p is Got User Email case 2
//const userEmail = ""; //User email doesnt exists case 3
 
// if(userEmail){
//     console.log("Got User Email");
    
// }else{
//     console.log("User email doesnt exists");
    
// }

/*
After seeing case1, case2, case3 instead of going blindly with the values we need to check the value strictly to
get proper result for this we use truthy and falsy, it has few conditions for this.

falsy values are false, 0,-0, 0n(big int), "", null, undefined, NaN....excluding these all are truthy values.
some of Truthy values are "0", 'false', "  ",[], {}, function(){}, 
*/

//how to check the given value is empty array or not
const userEmail = [];

if(userEmail.length ===0){
    console.log("Array is empty");
    
}

//how to check the given value is empty array or not
//first we need to conver object into array as below
//Object.keys(userEmail) 
//then perform Object.keys(userEmail).length ===0

const email={};

if(Object.keys(email).length ===0){
    console.log("Object is empty");
    }

    /* GK
false ==0 //true
false =='0' //true
0== '' //true
    */

//Nullish Coalescing Operator (??): null,  undefined
//this is used at the time of multiple functions,appwrite, return values
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
let val1;
val1 = 5?? 10; //5
val1 = undefined ?? 100;//100
// val1=null??undefined; //undefined (this is just for understanding purpose)
val1 = null ?? 12 ??50; //12
console.log(val1);

//TERNIARY OPERATOR

//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80"); //more than 80





