let name ="Ruksana";
let repoCount = 20;

console.log(name + repoCount + " value");//old method

// Old method is replaced by String Interpolation. Modern way of syntax is shown below:: using  back ticks and ${}
console.log(`${name}${repoCount} value`);

 console.log(`My name is ${name.toUpperCase()} and repocount is ${repoCount}`);

 //String declaration using object
  let name2 = new String("roshan-sk");
  //key value pair usage
  console.log(name2[2]); //s if u check this in browser console you will see proper object

  /* 
String {'roshan-sk'}
0: "r"
1: "o"
2: "s"
3: "h"
4: "a"
5: "n"
6: "-"
7:"s"
8: "k"
length: 9
[[Prototype]]: String
[[PrimitiveValue]]: "roshan-sk" */

//prototype can also be accessed
console.log( name2.__proto__); //{} this is just syntax .to access method or properties we can directly say .method check below
//Accessing prototype  methods
console.log(name2.length); // 9

console.log(name2.toUpperCase());//ROSHAN-SK

console.log(name2); //original value is not changed coz of primitive datatypes are stored in stack memory and original value doesnt change

console.log(name2.charAt(3)); //h

console.log(name2.indexOf('a'));

let newString = name2.substring(0,3);// gives 0/p as "ros" means last value of string wont display,wont accpet negative values
console.log(newString); 
//let anotherString =name2.slice(0,4);//rosh accepts negative values and give the value till last value of string

let anotherString =name2.slice(-6,4);
console.log(anotherString); //h

let newStringOne = "             ruksana        "
console.log(newStringOne);
console.log(newStringOne.trim()); // avoids extra spaces in the beginning and ending of a given string

const url="https://ruksana.com/ruksana2shaik";
console.log(url);//https://ruksana.com/ruksana2shaik
console.log(url.replace('2',"-"));//https://ruksana.com/ruksana-shaik

console.log(url.includes('ruksana'));//true
console.log(url.includes('musfirah')) //false

console.log(name2.split('-'));//[ 'roshan', 'sk' ]