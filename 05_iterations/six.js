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
//console.log(newArray); //[ 5, 6, 7, 8, 9, 10 ]

////////////////**************************************** */
//more use cases of filter


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //EXERCISES

  let userBooks =books.filter((bk)=>bk.genre == "History");

 userBooks =books.filter((bk)=>{
    return bk.publish >=1995 && bk.genre == "History";
    // if(bk. publish >=2000){
    //     return bk.publish;
    // }
 });
console.log(userBooks);




