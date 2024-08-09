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
    // let result =number1+number2;
    // return result;//6
    
    return number1+number2;//6
    
}
//addTwoNumbers(1,5);//6
 const result =addTwoNumbers(1,5);
//console.log(result); //6

//user enter uername annd we need to send a message logged in
//function loginUserMessage(username){
    function loginUserMessage(username = "sam"){ //if u never want to go to if statement we use the deafult value as sam
    //if(username === undefined){ //line 45 and 46 are same 
    if(!username){
        console.log("Please enter username");
        return

    }
    return`${username} just logged in`;
}
console.log(loginUserMessage());//sam just logged in
console.log(loginUserMessage("hitesh")); //hitesh just logged in
//NOTE: undefined and ""(empty string) are considered as false values.


