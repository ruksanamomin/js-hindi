//IIFE--- Immediately invoked function expression

//We have two reason why we go for iife
//1)we want the function to get executed immediately.
//reason:: In db connection, we need the connection asap so we need the function to execute immediately.
//2)when we do not want the function to get polluted with the global scope.
//reason:: we use global scope variables in the block scope of functions , then wee do not want the 
//function to get polluted with the global scope variables.

//basic was of writing function
// function chai(){
//     console.log(`DB Connected`);
    
// }

// chai(); //DB Connected

//iife syntax
//(function definition)(function call(argument));

//named iife
(function chai(){
    console.log(`DB Connected`);
}) ();
 
//unnamed iife
((name)=>{
    console.log(`DB Connected two , ${name}`);
})("ruksana")

function one(){
    console.log("one");
two();
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one();
two();
three();