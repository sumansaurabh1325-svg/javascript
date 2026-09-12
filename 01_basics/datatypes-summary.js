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

console.log(typeof scoreValue);
console.log(typeof myfunction);
console.log(typeof outsideTemp);
console.log(typeof myObj)
console.log(typeof heros)
console.log(typeof useEmail)