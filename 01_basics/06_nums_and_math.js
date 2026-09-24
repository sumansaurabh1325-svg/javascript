const score = 400

const balance = new Number(100)
//console.log(balance)

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++ Maths +++++++++++++++++++


//console.log(Math)
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.1));
//console.log(Math.floor(4.9));
//console.log(Math.min(4,2,7,8,0));
//console.log(Math.max(4,8,1,9,0));

console.log(Math.random());  // it always give the value between 0 and 1 
console.log((Math.random()*10) + 1); // this +1 give the value between 1-9 always 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min) // it give the value between these range 