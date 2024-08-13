///REDUCE
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const myNums = [1, 2, 3]
//reduce using basic function
// const nums=myNums.reduce(function (acc,curval){
//     console.log(`acc is ${acc} and curval is ${curval}`);
//     return acc+curval

// },0);

//reduce using arrow function
const nums=myNums.reduce((acc,curval) => acc+curval, 0)

//console.log(nums);

//****************** */

//Practise :2
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
//to add all the prices in the cart
const price=shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(price);
