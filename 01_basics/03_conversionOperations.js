//     CONVERSIONS
//let score=33;//case1 Number
//let score="33abc" //case2 //string
//let score = null; //case 3 //object
//let score = undefined; //case 4 //undefined
let score =false; //boolean
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);//all cases type is  Number but when we console the vlaue will be different.
//console.log(valueInNumber); //case1 33 , case2 NaN , case 3 0, case 4 NaN, case 5 1for true 0 for false,


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
//null=>0
//undefined=>NaN

//Boolean conversion
//let isLoggedIn = 1;//case 1 number
//let isLoggedIn="ruksana" //case2 string
//let isLoggedIn ="" //case3 string
let isLoggedIn = 0; //case 4 null
console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);//case 1  boolean and true, case 2 boolean and true,  case3 boolean and false , case 4  boolean and false

//1=>true 0=>false
//""=>false, "Ruksana"=>true

//String conversions
let age=32;
//console.log(typeof age); //number

let stringAge = String(age);
//console.log(typeof stringAge); //string
//console.log(stringAge); //33

//*********************************OPERATIONS*****************************************
let value =3;
let negValue =-value;

//console.log(negValue);

//console.log(2+2); //4
//console.log(2-2);//0
//console.log(2*2);//4
console.log(2**4);//16 2exponential 4
//console.log(2/3);//0.666
//console.log(2%3);//2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
 //console.log(str3); //hello hitesh

 //console.log("1" + 2);//12
 //console.log(1 + "2");//12
 //console.log("1" + 2 + 2);122
 //console.log(1 + 2 + "2");//32

 //console.log( (3 + 4) * 5 % 3); //2 recommendable to use () as per the request which operation should be done first

 //console.log(true); //true
 //console.log(+true);//1
 //console.log(+"");//0
 //console.log(true+); //error coz it is not allowed

 let num1,num2, num3;
 num1=num2=num3=2+2; //this is not a readable code and these sort of things should be avoided and should specify thing ssmartly
 //console.log([num1,num2,num3]);// [4,4,4]

 let gameCounter= 100;
  //gameCounter++; //101
++gameCounter;//101
 console.log(gameCounter);//101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

 // mdn doc of prefix and postfix
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment







