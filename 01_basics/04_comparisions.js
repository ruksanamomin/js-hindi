
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

/*locaelCompare returns:
comparisions with strings
1 if string1 is greater (higher in the alphabetical order) than string2
-1 if string1 is smaller (lower in the alphabetical order) than string2
0 if string1 and string2 are equal in the alphabetical order*/

//console.log("2">1);
//console.log("02">1);

// Never use different types of datatypes for comparisionns........this is one of the reasons for introducing Typescript.
//TS doesnot allows comparisons between 2 different types of datatypes.

console.log(null>0); //false case1
console.log(null==0);//false case2
console.log(null>=0);//true- case3->Comparisions converts null to numbers and is treated as 0.
//that is why  0(null)>=0 is true(case3) and  0(null)>0 is false (case1).

// null means empty value. we wont get a predictable result when we do comparisions betweeen 2different datatypes.
//here we got true coz of the value conversion problem. i.e.,the reason is Equility check == and comparision 
//>,<,<=,<= works differently. same works with undefined also. 

//Note :Never do comparisions between 2 different type of datatypes.

//whatver comparisions you do with undefined and integer would be false.

console.log(undefined >0); //false
console.log(undefined ==0);//false
console.log(undefined < 0);//false

//strict means === it not only checks value it strictly checks  the value and datatype also..for example check below
console.log("2" = 2); //throws a syntax error saying left=hand side  in assignment is invalid

/*Sumamry:
1.simple conversions like same datatype conversions are which results are predictable.
ex..conversions between 2 integers or 2 strings
2. conversions b/w 2 different type of datatypes is unpredictable and not recommended.Always try to avoid this type of conversions to 
avoid confusions.
3.clean code is valuable and that should be our priority.
*/













