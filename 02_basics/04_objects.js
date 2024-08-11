//Objects with constructors(singletonn)
//Object creation using constructor.
//Object.create
//singleton---when we create object with constructor singleton object would be formed...this would be only one type of object formed.
//when we create object in another way there would be multiple instances.

//singleton object creation(using new word)

//const singleton= new Object();
//console.log(singleton); //{}

//non singleton object creation

const singleton={}
//console.log(singleton); //{}
singleton.id = "abc123";
singleton.name = "Ruksana";
singleton.isLoggedIn = false; 
//console.log(singleton); //{ id: 'abc123', name: 'Ruksana', isLoggedIn: false }

const newUser = {
    email :"ruksana@gmail.com",
    fullName: {
        userFullName :{
            firstName : "Ruksana",
            lastName : "Shaik"
        }
    }
}

//console.log(newUser.fullName.userFullName);

//methods
//how to add  one or more objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//const obj3=Object.assign({},obj1,obj2,obj4);//we use less assign() we use spread operator mostly
const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);

//how to deal when we get values from database
const users =[
    {
        id : "1",
        name:"Ruksana"
    },
    {
        id : "2",
        name:"Musfirah"
    },
    {
        id : "3",
        name:"Abdul Ahad"
    },
]

users[1].name;
//console.log(singleton);

//Methods of objecs used frequently
//console.log(Object.keys(singleton)); //gives key value in a aray which can be widely used in loops and many places manily in databases
//console.log(Object.values(singleton));//gives pair value in a aray which can be widely used in loops and many places manily in databases
//console.log(Object.entries(singleton).length); //gives entries and length

//youa re doing loop through in objects and getting a value ,sometimes value might not exists...it may lead to crashing.To avois this
//we may have to ask it manually or ask it with a method named hasOwnProperty..

//console.log(singleton.hasOwnProperty('isLoggedIn'));//true
//console.log(singleton.hasOwnProperty('isLogged'));//false


//DESTRUCTURING

const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"

}

course.coursename;
course.price;
course.courseInstructor;

//Instead of all these we can use a syntax

const {courseInstructor:instructor}=course;
console.log(instructor);

//destructing in react js
/*const navaber =({company})=>{

}

navaber(company ="hitesh")*/


