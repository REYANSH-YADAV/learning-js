// console.log("come on");
// "use strict"  //treat all js code as newer version

// console.log("my name is reyansh");
// let marks =20;
// marks="babbar";

// console.log(marks);
// console.log(typeof(marks));


// let num1=56;
// let num2=64;
// let mul=num1*num2;

// console.log(mul);
// console.log(num2%num1);

// let number1 = 10;
// let number2 = 20;

// let sum = number1 + number2;

// console.log(`The sum of ${number1} + ${number2} is equal to ${sum}`);

// Output : The sum of 10 + 20 is equal to 30

// console.log('the mul of ${num1} * ${num2} is equal to ${mul}');


// let string1="aur bakchodi karo";
// let string2="bs bs bhai jada ho gaya";
// let multilineString=`${string1},${string2}`;
// console.log(multilineString);


// let person={
//     name:'reyansh',
//     age:19,
//     message:function(){
//         console.log("hello,my name is "+this.name);
//     }
// };
// person.country="INDIA";

// person.message();
// console.log(person);

// console.log(person.name);


// function sum(x,y){
//     let res=x+y;
//     return res;
// }
// let outt=sum(3,4);
// console.log(outt);

// setTimeout(function() {
//     console.log('This is an anonymous function called after 1 second.');
//   }, 1000);


//   const numbers=[-1,100,25,-50,45];
//   const positivnumbers=numbers.filter(function(numbers){
//     return numbers>0;
//   });

//   console.log(positivnumbers);

//   let obj={
//     name:"reyansh",
//     "full name":"reyansh yadav",
//     age:19,
//     wight:76,
//     greet: function(){
//       console.log("hello jee kya kr rhe ho!");
//     }
//   };
//   console.log(obj);
//   obj.greet();

//   console.log(typeof(obj));


//   let arr=[1,2,3,4,5];
//   let ansarr=arr.map((Number)=>{
//     return Number*Number;
//   }) 
//   console.log(ansarr);
  
//   class Human{
//     age=13;
//     wt=76;
//     //behaviour
//     walking(){
//       console.log("i am walking")
//     }
//   }
//   const  reyansh=new Human(); 
//   console.log(reyansh.walking());

// let mydate=new Date();
// console.log(mydate);

// console.log(mydate.toString());
// console.log(mydate.toDateString());

// let mysym=Symbol("key1");
// let person={
//     "Full Name":"Reyansh Yadav",
//     [mysym]:"mykey1",
//     branch:"AI&DS",
//     usn:"1NT21AD042",
//     number:8178594612,
    
// }
// console.log(person.name);
// console.log(person["name"]);
// console.log(person["Full Name"]);//can only access value like this else not possible

// console.log(person[mysym]);

// person.branch="AI&ML";
// console.log(person.branch);

// let obj1={1:"a",2:"b"};
// let obj2={3:"c",4:"d"};
// let obj3={...obj1,...obj2};
// console.log(obj3);

// function show(...num)    //rest operator or spread
// {
//     return num;
// }
// console.log(show(200,300,400));


// console.log(addone(5));
// function addone(num)
// {
//     return num+1;
// }

// addtwo(5);               // Hoisting
// const addtwo=function(num){
//     return num+2;
// }


// const chai= ()=>{
//     let username="reyansh";
//     console.log(username);
// }

// chai();

// const addtwo=(num1,num2) =>{   //arrow function

// (function chai(){  //named IIFE
//     console.log("chaliye shuru krte hai");  
// })();

// ((name1)=>{//unnamed IIFE function
//     console.log(`ho jaye ${name1}`);
// })('kishan');


// if(2>3)
//     {
//         console.log("bada hai bhai");
//     }
// else{
//     console.log("nhi bhai nhi hai");
// }


// if(2===2)
//     {
//         console.log("bilkul equal");
//     }//strict equality

// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


// const month = "september"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);


//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
// }

// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//    console.log(`Value of i is ${index}`);
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue;
//     }
//    console.log(`Value of i is ${index}`);
    
// }



// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);


// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// console.log(map);

// for(const [key,value] of map){
//     console.log(key, ':-',value);
// }

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// } )
// console.log(newNums);

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
// console.log(newNums);
// const newNum = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNum);

// const mynums=[1,2,3];//reduce
// let acc=0;
// const mytotal=mynums.reduce(function(acc,currval){
//     return acc + currval;
// })
// console.log(mytotal);