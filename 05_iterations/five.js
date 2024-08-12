//FOR EACH LOOP

const coding = ["js", "ruby", "java", "python", "cpp"]
//In array as length,amp,fill..for each is also an inbuilt method

//for each is higher order function

//coding.forEach(callbackfunction)

//WAY1
coding.forEach(function(index){
//console.log(index);

});

//Way2 callback function ()=>{}
coding.forEach((num)=>{
//console.log(num);

})

// way 3 function with forEach

function printMe(item){
//console.log(item);

}

coding.forEach(printMe);
/*
coding.forEach(function(){});
If you are writing the function in foreach as a callback,then you need to remove function name, can use arrow function.
if the function is specified and if we want to access the fuunction with the array then u can gve function name as a parameter
ex::array.forEach(function name)
array.forEach(printMe)
*/

//************************************ */

//something intresting

//forEach also has different parameters like item,index, arraylist..lets see this in action
coding.forEach((item,index,arr)=>{
        //console.log(item,index,arr);
        
})

//Usage of [{}{}{}] with foreach loop
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    
]

myCoding.forEach((item)=>{
    //console.log(item.languageName);//gives all the languagenames of the array from the objects
    console.log(item.languageFileName);//gives all the languageFileName of the array from the objects
    
})
