//MAP

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

//using foreach and add 10 to each number

myNumers.forEach((item)=> {
    let result=item+10;
  //console.log(result);
  }
);
const number =myNumers.forEach((item)=> item+10);
//console.log(number); //undefined coz forEach cannot return the variable value.

//using map and add 10 to each number

//const myNewNumber= myNumers.map((num)=>num+10)
const myNewNumber=myNumers.map((num)=>{
  return num+10;
})
//console.log(myNewNumber); //it gives array as result

/*
1)In filter, it returns if condition is true only
2)In Map it returns as per the conditions we apply
*/

// Differences of Map() and Filter() methods
/*
Map:::
Creates a new array with the same length as the original array, but with each element transformed by the callback function.
Used when you want to transform each element in an array
Returns a new array with the same length as the original array.

Filter:::
Creates a new array with only the elements that pass the conditions implemented by the callback function.
Used when you want to select only certain elements that meet a specific condition.
Returns a new array with a length that is equal to or less than the original array.
*/

//chaining (can use 2-3methods one after the another)
//problem::1.multiply all the numbers with 10
//2. add 1 to the multiplied numbers
//3.Alao need values only greater than 40

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

let myChain = myNumbers
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>num>40)

console.log(myChain);

//************************************************************* */







