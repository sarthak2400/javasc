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

    //console.log(id===anotherId);        //output iska aya hai false

    const bigNumber =362463246387657326n        //bigInt


    // Non---premitive examples

    const heros=["hello","My","Name"];  // ye array ho gya
     
    let myobj = {
        name:"sarthak",
        age:22,             //-------ye object hai
     }
     //console.log(myobj);

     const myFunction=function(){
        //console.log("hello sarthak")
     }
     // console.log(myFunction)

     //+++++++++++++++++++++++++++++++++++++++++ MEMORY////////////***********8 *
    //STACK (primitive) mermory use hoti hai
    //HEAP  (non-PRIMITIVE)  Memory use hoti hai 
// ex***************************
    let  myYouTubename="sarthakbagga"

    let anothername=myYouTubename
    anothername = "sharma"

    console.log(myYouTubename)   
    console.log(anothername)
// myYoutube ke andar abhi bhi purane wala name hai or anothername ke andar purani wali  

//ex-----------2(heap)     value change ho gyi og wali bhi 

let userOne={
   email:"sarthakbagga24@gmail.com",
   upi:"sharma@sbi",
}
     let userTwo = userOne
     userTwo.email="sarthaksharma3278@gmail.com"     //user two ki email ko change kar do 3278 wali mail se 
     
     console.log(userOne.email);
     console.log(userTwo.email);
     
     

     

    




