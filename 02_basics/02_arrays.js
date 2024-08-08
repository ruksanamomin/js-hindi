const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] get array inside array and whole array becomes as the one single element of the parent
//console.log(marvel_heros[3][1]); //flash

//This defect can be overcome by "concat".


// let na=marvel_heros.concat(dc_heros);
// console.log(na);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//Instead of concat we can also use east operator called spread operator(...)
const allHeroes=[...marvel_heros, ...dc_heros]
//console.log(allHeroes);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//-----------------------------------------------------
 const anotherArray =[0,1,2,3,[4,5,[6,7,8],9],10]
 const newAnotherArray = anotherArray.flat(Infinity);
 //console.log(newAnotherArray); //[
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9,
   10
 //]

 //----------------------------------------------------------

 //Methods which is mostly used while data scrapping 
 //whatver data is but need array then how to deal with it
 //initially we will ask whether the data is there or not
 console.log(Array.isArray("Hitesh")); //false

 //if we need to convert anything howwould we do it

 console.log(Array.from("Hitesh"));//[ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from(
    {
        name: "rUKSANA"
    }
)); //[] we need to mention the which type of array we need keys or values

let score1 = 100;
let score2 =200;
let score3=300;
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]



 








