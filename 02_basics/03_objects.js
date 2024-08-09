//objects can be declared in 2 ways..one is literal and constructor.
//Object creation using constructor.
//Object.create
//singleton---when we create object with constructor singleton object would be formed...this would be only one type of object formed.
//when we create object in another way there would be multiple instances.


//OBJECT LITERALS

const mySym = Symbol("myKey1"); //declaration of symbol

const JsUser={
    name:"Ruksana",
    "full name": "Hitesh Choudhary",
    //declaration of symbol in object
    [mySym] : "key1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedin :false,
    lastLoginDays :["Monday","Saturday"]
}
//Usage of objects in 2 ways
//console.log(JsUser.email);//way1 
//console.log(JsUser["email"]);//way2

//Key would be automatically treates as string in js
//console.log(JsUser."full name"); //not possible for string as key so usage of way 2 should be known
//console.log(JsUser["full name"]); //Hitesh Choudhary
//usage of symbol from an object
//console.log(JsUser["mySym"]); //undefined so " " shouldnt be used for symbol
//console.log(JsUser[mySym]); //key1

//how to override values in js
JsUser.email = "ruksana@gmail.com";
//console.log(JsUser.email);

//how to lock the values
//Object.freeze(JsUser);
JsUser.email = "abdulahad@gmail.com";
//console.log(JsUser.email);
//console.log(JsUser);

//how to add function in object
JsUser.greetings = function(){
    console.log("Hello Js User");
    
}
//console.log(JsUser.greetings);//undefined when freeze is not commented,after commentin freeze we get [Function (anonymous)]
console.log(JsUser.greetings()); //Hello Js User

//how to reference the name in the object

JsUser.greetingsTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
console.log(JsUser.greetingsTwo());//Hello Js User, Ruksana











