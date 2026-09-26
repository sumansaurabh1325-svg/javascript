//Dates


let myDate = new Date()

//console.log(myDate.toString()) //Sat Sep 26 2026 17:19:14 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toDateString()) //Sat Sep 26 2026

//console.log(myDate.toISOString()) //2026-09-26T17:19:14.756Z

//console.log(myDate.toJSON())  //2026-09-26T17:19:14.756Z

//console.log(myDate.toLocaleString()) //9/26/2026, 5:19:14 PM

//console.log(myDate.toLocaleDateString())  //9/26/2026

//console.log(typeof myDate) ; // Object 

//let myCreatedDate = new Date(2026, 0, 26)

// in javaScript month start from 0 means january

//console.log(myCreatedDate.toDateString()) // Mon Jan 26 2026 

//let myCreatedDate = new Date(2026, 0, 26,5,3)
//console.log(myCreatedDate.toLocaleString()) //1/26/2026, 5:03:00 AM

//let myCreatedDate = new Date("2026-09-26")

//console.log(myCreatedDate.toLocaleString()) //9/26/2026, 12:00:00 AM

let myCreatedDate = new Date("09-26-2026")

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));// in second ->1790444748

let newDate =  new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})