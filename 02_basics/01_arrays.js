//MDN ARRAYS
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



/*Note::1)can mix all datatypes.
2)zero based indexing.
3)arrays when we copy it creates shallow copies means stored in heap memory.....deepc opies are stored in stack memeory
4)array[0]

*/

let array=[0,1,2,3,4,5]

//console.log(array[1]); //1
const myHeors = ["shaktiman", "naagraj"]
//console.log(myHeors[0]);//shaktiman

const arr3= new Array(1,2,3,4);

 //console.log(arr3[1]);

 //ARRAY METHODS

//  array.push(6);//adds an element into the  array
//  array.push(7)
//  console.log(array);

//  array.pop() //removes the last element of the array
//  console.log(array);
//------------------------------------------ 
//array.unshift(9); //adds the elements at the starting of the array[
    9, 0, 1, 2,
    3, 4, 5
  //]
//console.log(array);

//array.shift();//removes the element from the beginning
//console.log(array); [ 0, 1, 2, 3, 4, 5 ]
//------------------------------------------------------
//console.log(array.includes(9)); //false it checks whether the elements exists or not
//console.log(array.indexOf(9)); //-1 if the value doesnt exists
//console.log(array.indexOf(4));//4
//--------------------------------------------------

//let newArray = array.join();
//console.log(array); //result is array
//console.log(newArray);// 0,1,2,3,4,5
//console.log( typeof newArray);//resulit type would be string separated by commas

//--------------------------------------------------
//slice and splice
console.log("A", array);//A [ 0, 1, 2, 3, 4, 5 ] array doesnt change

let na1=array.slice(1,3);
console.log( na1); //[ 1, 2 ] leaves 3rd element and takes first 2 elements

console.log("B", array);//B [ 0, 1, 2, 3, 4, 5 ] array doesnt change


let na2=array.splice(1,3);
console.log( na2);//[1,2,3]
console.log("C", array);// C [0,4,5]

//Note:::: slice doesnt change the array and doesnt take the last index specified.
//splice chhanges the original array and gives the elements that are not spilced.includes the all the indexes specified in the splice.











 



