// primitive
      
/* 7 types : String, Number, Boolean, null, undefined, symbol,
             Symbol, BigInt */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid);

//const bigNumber = 123456789123456789n

// Reference (Non-primitive)

//  Array , Objects, Functions


const heros = ["shaktiman","naagaraj","padman"]
let myObj = {
    name : "suman",
    age  : 22, 
}

const myfunction = function (){
    console.log("hello world")
}

//console.log(typeof scoreValue);
//console.log(typeof myfunction);
//console.log(typeof outsideTemp);
//console.log(typeof myObj)
//console.log(typeof heros)
//console.log(typeof useEmail)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//                   Stack(Primitive)   ,  Heap(Non-Primitive)

// Stack(Primitive): changes are  makes in copied value not in Original value. ,
//  Heap(Non-Primitive): here changes are make in reference value (means directly into original value )

let youtubename = "suman"

let anothername = youtubename
anothername = "monu"
console.log(youtubename);
console.log(anothername);

let userOne = {
    email: "suman@gmail.com",
    upi:   "suman@ybl"
}

let userTwo = userOne

userTwo.email = "monu@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

