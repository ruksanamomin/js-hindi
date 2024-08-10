//SCOPE
/*scope ---> {} 
two types of scope.1)block scope ...everything that is written in this is scope{} ex: may be function or if else.
2)global scope----?Anything mentioned out of {} is known as blocklevel..
Note::1)Anything mentioned in global scope can be used in its scope  as well as block scope.
2)Anything mentioned in block scope will be limited to block scope only.

ex::::case1


*/
//case1
let a=10;
const b=20;
var c=30;
//console.log(a); // 10
//console.log(b);//20
//console.log(c);//30

if (true) {
    let d=10; 
const e=20;
var c=300;
}

//console.log(d); // undefined coz block scope only we can use
//console.log(e);//undefined coz block scope only we can use
//console.log(c);//300 coz of var...var dont follow the rule of block scope elements should work within scoplevel(block scope) and works in global scope also
//that is why var is not used to declare variables.

//Note::::scope would be different when we run in browser console and code runtime environemnt using node.

//NESTED SCOPE in NESTED FUNCTIONS AND IF ELSE

function one(){
    let username ="ruksana";
    function two(){
        let website = "youtube";
        //console.log(username); //ruksana //child can use parents elements
        
    }
 //console.log(website); //error sayine website is not defined. as parent cannot use child's elements or values...
 
    two();
}

one();

//if else to explain nested loop
if(true){
    const username ="abdul";
    //console.log(username);
    if(username === "abdul"){
        const website= ' chai aur code'
        //console.log( username + website);
        
    }

    //console.log(website); // error website is not defined coz child cannot be used by parent
    
    
}

//console.log(username); //error : username is not defined coz it is used out of its scope


// ++++++++++++++++++ interesting ++++++++++++++++++

//There are different ways to write a function
//way 1 write a function and dng a function call
console.log(addOne(6));


function addOne(num){
    return num+1;
}

//way2 storing a function in a variable and calling it
console.log(addTwo(5)) //error is Cannot access 'addTwo' before initialization coz of way of declaring a function
let addTwo = function(num1){
    return num1+4;
}

/*
NOTE: in way 1 declaration of function is done normally so that we can access the function call before initialization
in way 2 as the function is stored in a variable we cannot access it before initialization.
*/
