//mdn date link
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//in future date problem milliseconds of ECMA Script might be overcome by Temporal
//https://tc39.es/proposal-temporal/docs/index.html

let myDate= new Date();
//console.log(myDate);//2024-06-14T16:01:32.386Z
//console.log(typeof myDate);//object

//how conversions can be done and used
//console.log(myDate.toString()); //Fri Jun 14 2024 16:02:45 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString());//Fri Jun 14 2024
 //console.log(myDate.toISOString());//2024-06-14T16:06:52.060Z
 //console.log(myDate.toJSON());//2024-06-14T16:07:04.733Z
 //console.log(myDate.toLocaleDateString());//6/14/2024
//console.log(myDate.toLocaleString());//6/14/2024, 4:07:41 PM
//console.log(myDate.toLocaleTimeString());//4:07:54 PM

let myCreatedDate = new Date(2023,0,10);//SYNTAX of date and in js month starts with 0 so jan
//console.log(myCreatedDate); // 2023-01-10T00:00:00.000Z
//console.log(myCreatedDate.toDateString());//Tue Jan 10 2023 

let createdDate = new Date(2023,2,8,5,3);//syntax of year,month,date,hours,minutes
//console.log(createdDate.toLocaleString());//3/8/2023, 5:03:00 AM

//let newCreatedDate= new Date("2023/01/14");//syntax of YYYY/MM/DD format month starts with 01
let newCreatedDate= new Date("01-14-2023");
//console.log(newCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

//***************time Stamp******** *
let myTimeStamp =Date.now()
//console.log(myTimeStamp);//1718383880472 milli second value from January 1, 1970,
//console.log(newCreatedDate.getTime());// .getTime() from the given date 01-14-2023 so that we can compare the timestamp in millisec in hotel projects or such


//console.log(Date.now()); //1718384131997 milliseconds

//how to convert into seconds
//console.log(Date.now()/1000); //1718384243.452 in seconds.it would give in decimals to avoid we use math.round or mmath.floor
//console.log(Math.floor(Date.now()/1000)); //1718384319

//Date Methods
let newDate=new Date();
console.log(newDate);// 2024-06-14T17:00:24.506Z

console.log(newDate.getMonth()); //5 month here starts with o is jan
//TO get currennt month we can use
console.log(newDate.getMonth()+1);//6

console.log(newDate.getDay()); //5 day here starts from monday


//using string interpoaltion we can use the date and time as we wish ..check below
// `${newDate.getDay()} and the time 

//one new type of method in date
console.log(newDate.toLocaleString('default',{
    weekday: "short",//Fri
    weekday: "narrow",//F
weekday: "long",//Friday
month:"numeric" //6
}));



