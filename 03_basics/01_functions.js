//how to write function definition

function functionName(parameters){
    code
}

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName//its a reference

//sayMyName(arguments);//execution 

// function addTwoNumbers(number1,number2){
// console.log(number1+number2);

// }
//addTwoNumbers(5,4); //9

//how to store function in a variable
// const result = addTwoNumbers(5,4);
// console.log(result); //undefined

//to get the exact result value other than undefine we have to make some changes to function declaration as follows

function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result; //nothing should not be written after return and the code doesnt execute.
    
}
const result = addTwoNumbers(5,4);
console.log("Result:", result);



