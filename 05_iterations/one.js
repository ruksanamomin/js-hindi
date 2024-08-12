//for

//syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(i=0;i<=10;i++){
        const element = i;
        if(element == 2){
                //console.log("2 is my birthday date"); //o/p will be 1
                // 2 is my birthday date
                // 2
                // 3
                }
        //console.log(element);
        
}
//  console.log(element); //element not found error because of block scope

//********************************************************* */

//Nested loops
for (let i = 0; i <=10; i++) {
        const element = i;
        // console.log("outer Loop value is", i); //gets values till 10
        //console.log(`Outer loop value is ${i}`);
        for (let j = 0; j<=10; j++) {
                const element = j;
                //console.log(`Inner value is ${j} and Outer value is ${i}`); //inner runs 5times as per each outer element
                //console.log(i + '*' + j + '=' +  i*j);
                
                                }
        }
        //******************************************* */

        ///LOOOPS ON ARRAYS

        let myArray = ["flash", "batman", "superman"]
        //console.log(myArray.length);
        
        for (let i = 0; i < myArray.length; i++) {
                const element = myArray[i];
                //console.log(`list of superheroes are ${element}`);
                
                
        }
///////////////******************************************* */

//important keywords to discontinue the loop based on the condition
//break and continue

for(i=1;i<20;i++){
        if(i==5){
                //console.log("detected 5");
                break;
                }
                //console.log(`value of i is ${i}`);
                }


   //******************************************** */
   
   for(i=1;i<=20;i++){
        if(i == 5){
                console.log("detected 5");
                continue;
        }
        console.log(`value of i is ${i}`);
        
   }