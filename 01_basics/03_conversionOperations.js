//     CONVERSIONS
//let score=33;//case1
// let score="33abc" //case2
//let score = null; //case 3
//let score = undefined; //case 4
let score =false;
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


//let isLoggedIn = 1;//case 1
//let isLoggedIn="ruksana" //case2
//let isLoggedIn ="" //case3
let isLoggedIn = 0; //case 4
//console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);//case 1 true, case 2 true,  case3 false , case 4  false

//1=>true 0=>false
//""=>false, "Ruksana"=>true

let age=32;
//console.log(typeof age);

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
//console.log(2**4);//16
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
//  gameCounter++; //101
++gameCounter;//101
//  console.log(gameCounter);//101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

 // mdn doc of prefix and postfix
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment







