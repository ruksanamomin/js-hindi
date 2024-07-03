//mdn doc for NUm
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
const score=100;
//console.log(score); //100

const balance = new Number(100);
//console.log(balance); //[Number : 100]it tells that the datatype is 100
/*console o/p for the above statement

Number {100}
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf() 
*/

//practical example of number properties
//console.log(balance.toString()); 100
//console.log( typeof balance.toString());
//As it is string now, we can use string methods also example like
//console.log(balance.toString().length); //3

//number methods
//console.log(balance.toFixed(2));//100.00 prefarable for e-commerce website
//console.log(balance.toFixed(1));//100.0

const otherNumber =23.894;
//console.log(otherNumber.toPrecision(2));//24
//console.log(otherNumber.toPrecision(3));//23.9
//console.log(otherNumber.toPrecision(4));23.89

const hundreds= 1000000;
//console.log(hundreds.toLocaleString()); //us standard 1,000,000
//console.log(hundreds.toLocaleString('en-IN',{ style: "currency", currency: "INR" }));// rupees symbol10,00,000 indian value
//console.log(hundreds.toLocaleString('en-IN',{ maximumSignificantDigits: 2 }));//10,00,000

//****************************** maths******************************************
//link for Math Mdn
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//it is default library in JS.
console.log(Math); //Object [Math] {}
/* Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc()
*/

//Math methods
//console.log(Math.abs(-4)); //4 negative chnages to positive
//console.log(Math.abs(4));//4 positive remains positive
//console.log(Math.round(4.6));//5 mostly used
//console.log(Math.ceil(4.1));//5 top value
//console.log(Math.floor(1.9));//1 bottom value
//console.log(Math.sqrt(25));//5
//console.log(Math.min(1,20,3,45,8));//1
//console.log(Math.max(1.20,3,45,8));//45

//Mostly we use Maths at random
console.log(Math.random()); //value would be between 0 and 1
console.log(Math.random()*10);//shifts the value to left 
console.log(Math.floor(Math.random()*10+1)); //shifted value to left bt multiplying by 10 and if u add 1 it avoids the value of 0
//sometimes we need to mention min and max values
let min  =10;
let max=50;
console.log(Math.random()*(max-min));//gaves 8 but our min vaue should be 10 to avoid this check below
console.log(Math.floor(Math.random()*(max-min+1)));//still gets the values less than min value to avoid this chheck belwo
console.log(Math.floor(Math.random()*(max-min+1))+min) //value will be for sure more than 10 i.e., min value


