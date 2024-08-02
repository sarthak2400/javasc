// -------------Premitive data types  (call by value)   jab hmm copy kate hai to og data direct unko nhi diya jata unka copy apko diya jata hai 
//-----------7 catagory/types--1 string 

//2 Number   3 Bollean  4 null  5 undefined  6 symbol  7 BigInt


// ---------------Non-Premitive (Reference)   inka reference memory me direct allocate kiya jata hai

//1 ----Array , 2 objects(Imp) , 3 Functions


const score=100
const scoreValue =100.3

const isLoggedIn=false
//const outsideTemp=nulll
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')

    console.log(id===anotherId);        //output iska aya hai false

    const bigNumber =362463246387657326n        //bigInt


    // Non---premitive examples

    const heros=["hello","My","Name"];  // ye array ho gya
     
    let myobj = {
        name:"sarthak",
        age:22,             //-------ye object hai
     }
     console.log(myobj);

     const myFunction=function(){
        console.log("hello sarthak")
     }
     console.log(myFunction)


     

    




