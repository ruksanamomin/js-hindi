//for each extension loop

const coding = ["js", "ruby", "java", "python", "cpp"];

//basic foreach loop with callback function
coding.forEach((item)=>{
    //console.log(item);
    
})


//how to store the foreach in a variable and check what foreach returns
const value=coding.forEach((item)=>{
    //console.log(item);
    
})
//console.log(value); //undefined--->this means foreach cannot return anything, and will not be useful to return anything 
//while we compare , need to apply condition something like that. we always donot want to just print the value.
//this doesnt mean we always need for loop again for arrays.no, committee people dcded that for printing the value or conditional check
//foreach remains the same..next will see how it can be solved by filter.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//more methods

//basic way to use filter to print numbers greater than 4 written by me 
myNums.filter((num)=> {
if(num>4){
//console.log(num); //gives 5 678910 as numbers butnot array so follow next way

}})

//console.log(myNums); //gives full array


//storing it in a variable and checking the returned value
//way1 using implicit return
const nums = myNums.filter((num)=>num>10);
//console.log(nums); //[ 5, 6, 7, 8, 9, 10 ] 

//way2 using explicit return we need to specify return in the scope...this would be easy method comparing to forEach loop for this example
const num2=myNums.filter((item)=>{
    return item>4; //need to use return
})
//console.log(num2); //[ 5, 6, 7, 8, 9, 10 ]

//without using filter how can we do the same(storing the value in array and checking it ) with for each loop
//but this needs some logic 

const newArray = []
myNums.forEach((num)=>{
    if(num>4){
        newArray.push(num); //pushes the values more than 4 into the new array
    }
})
console.log(newArray); //[ 5, 6, 7, 8, 9, 10 ]

////////////////**************************************** */
//more use cases of filter






