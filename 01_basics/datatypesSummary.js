console.log("God help me");

/* datatypes are classified on the basis of how data is stored in memory and how the data is being accessed.
Primitive :  call by value(when we copy, reference of original data is not given but thhe copy of the data is givn, If we change the data then the data will be chnaged in the copy not in original value)
7 types : 
String =>string
Number=>number
Boolean=>boolean
Symbol,(making any value unique)=>symbol
Null,(empty)=>object
Undefined,(value is not assigned but thhe variable is declared amd memory allocation is done)=>undefined
BigInt(scientific values which are very big)=>bigint

Non-primitive or Reference type: call by Reference(reference of memory is being allocated directly)
Arrays=>object
Objects=>object
Functions=> object function
*/

//Primitive
//String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
//console.log(id);
const anotherId = Symbol('123')
//console.log(anotherId);
//console.log(id === anotherId); //false, even if the value is same iit remains unique as we use symbol

const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions
//Array
let heros =["Shakiman","pokemon"];

//object
let obj={
    name :"hitesh",
    age:32,
    isLoggedIn :true
}

//function(fucntion declared in variable)
 let myFunction=function(){
    console.log("Hello world");
 };
 myFunction();

 //How to know which of datatype it is?
 console.log(typeof bigNumber); //bigint
 // https://262.ecma-international.org/5.1/#sec-11.4.3

 /* primitive: return type of data type
 Number=>number
 String=>string
 Boolean=>boolean
 Symbol=>symbol
 null=>object
 undefined=>undefined
 BigInt=>bigint

 //Non-primitive or reference:
 Object=>object
 Array=>object
 Function=>fucntion object

 */