//mdn doc for datatypes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
"use strict"; //treat all Js code as new version or new Js code

 //alert(3+3); // GETS AN ERROR SAYING ALERT IS NOT DEFINED Because we are using Node Js..
 //We are using nodejs not browser. JS engine is there in browser so above syntac works fine in browser.But 
//not in node js.

//code should be readable and future proof
 console.log(3
    +3) ;// code readability should be high
    /*tc39.es ECMA Script wrote the standard os JS not JS https://tc39.es/ecma262/
     AND MDN BY mozilla organization  https://developer.mozilla.org/en-US/docs/Web/JavaScript */


   //   Primitive datatypes(num,string,boolean,bigINt,symbol,null,undefined)
   let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// NON-PRIMITIVE DATATYPES
// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object