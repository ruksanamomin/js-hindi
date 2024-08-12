//for of loop

// for (const iterator of object) {
     //here iterator may be objects, strings, arrays etc..
// }

// ["", "", ""]
// [{}, {}, {}]
//*************************************************************** */
//Basic for of loop
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
    
}

//for of ons trings
const greetings = "Hello world!"
for (const greet of greetings) {
    if( greet == ' '){
//break;
continue;
    }
    //console.log(`Each char is ${greet}`);
    
}

//**************************************** */

//Map
//Map contains the unique value and set the keys as per the order specified.It doesnt accepts the duplicates.
//It accepts key value pair and Map is a object..

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map =new Map();
map.set('In',"India");
map.set('Fr',"France")
map.set(3,"USA")
//map.set(3,"japan") //rewrites the value
map.set('zm',"Zimbambey")

//console.log(map);

//how to apply loops on Map
for (const i of map) {
    //console.log(i);
    
}//this gives the o/p in array form

//To destructure the array we use [key,value]

for( const [i,value] of map){
    //console.log(i,':-', value);
    
} //result is below
/*
In :- India
Fr :- France
3 :- USA
zm :- Zimbambey
*/
/////*************************************************** */
//How to apply for of loop on Objects

//way to create object  
// let myObject = new Object();
// myObject.game1='Nfs'
// myObject.game2='Spiderman'
// console.log(myObject);

let myObject = {
    game1: 'NFS',
   game2: 'Spiderman'
}

for(const key of myObject){
    //console.log(key);//myObject is not iterable
    
}

//Note:::: for of loop is not iterable with object..It has different ways to do with which will be explained in next file four.js...



