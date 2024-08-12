//do-while loop

let index=0;

while(index<=10){
    //console.log(`value of index is ${index}`);
        index = index+2   
}
//***************************************************** */
let myArray = ['flash', "batman", "superman"]
let arr = 0;
while(arr<myArray.length){
    //console.log(`Value of arr is ${myArray[arr]}`);
    arr=arr+1
}

for(i=0;i<myArray.length;i++){
    //console.log(`Value of arr is ${myArray[i]}`);
    
}

/*
Value of arr is flash
Value of arr is batman
Value of arr is superman
*/
//******************************************************** */
//do while loop (rare use)
//first works and then checks condition

let score =1;
do {
   console.log(`Score is ${score}`);
   score++
    // score=score+1;
} while (score<=10);

//************************************************************ */

//specialized loops only for arrays in earlier videos