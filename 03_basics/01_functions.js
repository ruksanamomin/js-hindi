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
//console.log(loginUserMessage());//sam just logged in
//console.log(loginUserMessage("hitesh")); //hitesh just logged in
//NOTE: undefined and ""(empty string) are considered as false values.

//shopping cart adding price

// function calculateCartPrice(num1){//without rest operator
    //function calculateCartPrice(...num1){
        function calculateCartPrice(val1,val2, ...num1){
 return num1
}

//console.log(calculateCartPrice(400));//400
//console.log(calculateCartPrice(400,100,500,600));//400 to add or combine all the prices we use rest operator in parameters which gives array of prices.
//console.log(calculateCartPrice(400,100,500,600));//[ 400, 100, 500, 600 ] after using rest operator
//console.log(calculateCartPrice(400,100,500,600)); //[ 500, 600 ] coz val1 =400,val2=100 remaining would be given in array 

//Usage of object in functions
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyObject){
    //return anyObject;//{ username: 'hitesh', prices: 199 }
    return `Username is ${anyObject.username} and Price is ${anyObject.prices}`; //Username is hitesh and Price is 199
}

//console.log(handleObject(user)); //Username is hitesh and Price is 199

//passing object elements directly instead of user object
// console.log(handleObject(
//     {
//         username: "sam",
//         price: 399
//     }
// )); //Username is sam and Price is undefined

//passing an array to a function
const myNewArray = [200, 400, 100, 600]
function returnValue(getArray){
    //return getArray; //100
    return getArray[1];
}
//console.log(returnValue(myNewArray));//[ 200, 400, 100, 600 ]
//console.log(returnValue(myNewArray[2])); //100
//console.log(returnValue(myNewArray));//400

//Adding array directly to function call
function returnValue(newArray){
    // return newArray;//[ 200, 400, 100, 600 ]
    return newArray[2]; //100

}
console.log(returnValue([200, 400, 100, 600])); //[ 200, 400, 100, 600 ]










