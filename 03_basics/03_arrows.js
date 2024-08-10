//in 2015 es6 has come and bought lots of features..In this we got arrow functions and also will know about the this keyword.

//case1 "this" in objects can be accesable
const user ={
    username : "Abdul Ahad",
    price : 999,

    welcomeMessage : function(username){
            //console.log(`${username}, Welcome to the website`);//undefined, Welcome to the website her we didnot add this--->
            //this refers to the current context of the scope.
    console.log(`${this.username}, Welcome to the website`);//Abdul Ahad, Welcome to the website
    //console.log(this);
    /* o/p of this keyword in thhe scope is below, if we run same 
Abdul Ahad, Welcome to the website
{
  username: 'Abdul Ahad',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Musfirah, Welcome to the website
{
  username: 'Musfirah',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
    */
    
            
    }
}

//user.welcomeMessage(); //Abdul Ahad, Welcome to the website
user.username = "Musfirah";
//user.welcomeMessage() //Musfirah, Welcome to the website

//console.log(this); //{} coz it is out of the sccope or current context and as this is node environemnet it gives empty object

//Note::: In browser the global object is windows object
//In node environment it has {} empty object

//case-2 this in functions cannot be accesible and says undefined and this out of scope will give {} in node runtime environement
//  function chai(){
    //console.log(this); //this has something like fecth and global object
//     let username = 'ruksana';
//     console.log(this.username); //undefined coz this cannot be accesible in functions.
    
//  }

//  chai();

//how to declare function using this in another way
//  const chaiCode = function(){
//     let username = 'ruksana'
//     console.log(this.username); //undefined coz this is used in the functions here
    
//  }
//  chaiCode();

//In ES 6 we got new way to write function which is called arrow function.
//in arrow function it points to the window object.
//in classic function it gives the reference of the object,button or anything which is called.

const chaiCode = ()=>{
        let username= 'ruksana';
        //console.log(this);//{} coz it is node runtime environment
        //console.log(this.username);//undefined
}
chaiCode();

//arrow function syntax
//1 basic syntax
()=>{};
//storing a arrow function in a varibale
//basic arrow function or explicit return
//  const example =(num1,num2)=>{
//         return num1+num2;
//  }
//console.log( example(1,5)); //6
//***************************************************************
//implicit return(no need to use return)

//way1
//const example =(num1,num2)=> num1+num2;

//way2
const example = (num1,num2 ) => (num1+num2);
console.log( example(1,5));

//implicit return arrow function and have to specify the object
//const exam=()=> {username : "musfirah"} //undefined
const exam=()=> ({username : "musfirah"});
//console.log(exam());

//********************************************************
 const myArray = [2, 5, 3, 7, 8]




