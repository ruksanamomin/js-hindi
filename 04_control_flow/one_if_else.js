//control flow or logic flow means login tho login ka code run hona hai
//logout tho logout ka code run hona hai..that would be done by control statements..and process is called control flow...

//if statement

// if(condition){
//     scope
// }

//condition == true always then only scope code will get executed..
// if(true){
//     console.log("scope gets executed");
    
// }
//If the condition is false literal or false...code doesnt execute in the scope
if(false){
    console.log("scope doesnt get executes");
    
}

//how to evaluate the condition is true.
//we need to compare the conditions.
//comparting operatora are <,>,<=,>=,==(conditional operator),!=, ===(type check),!==(check negative sign )
/*
const isUserLoggedIn ----->(assignment operator)= true;


*/

//== check with if

// if(2=="2"){
//         console.log("executed");
        
// }

//=== (strict equal)

// if(2==="2"){
//     console.log("executed");
    
// }
//using if 
// const temparature =41;
// if(temparature <=50){
//     console.log("less than 50");
    
// }
// console.log("greater that 50");
//Note:Here it prints both the statements after checking the conditions.to avoid this and get this or that we need if else statement
//for conditional test we use if else statement.

//if we need to get check by the condition and gve the result either this or that we need to follow below (if else)
// const temp = 41;
// if(temp<=50){
//     console.log("less than 50");
    
// }
// else{
//     console.log("greater than 50");
    
// }

//************************************ */

// const score =200;
// if(score >=100){
//     let power = "100watts";
//     console.log(`power is, ${power}`);
    
// }
//console.log(`power is, ${power}`); //ReferenceError: power is not defined coz of block scope

//********************************** */
//short hand notation
// const balance =1000;
// if(balance>500) console.log("test");
// if (balance > 500) console.log("test"),console.log("test2"); (not recommendable)
//******************************* */

//Nesting or multiple conditions
// if(balance<500){
//     console.log("less than 500");
    
// }else if (balance <750) {
//     console.log("less than 7500");
// }else if (balance<1000) {
//  console.log("equal to 100");
    
// }else{
//     console.log("less than 1200"); //less than 1200
    
// } //this can be used to check multiple conditions,users,temparatures,many more
//**************************************************** */
const isUserLoggedIn=true;
const  debitCard=true;
const loggedInFromGoogle = true;
const loggedInFromGmail = true;
if (isUserLoggedIn && debitCard) {
    console.log("Gave access to the course");
    
}
if (loggedInFromGoogle || loggedInFromGmail) {
    console.log("User logged in ");
    
}

//&& all conditions must be true.
//  || any one condition can be true

