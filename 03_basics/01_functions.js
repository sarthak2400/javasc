function sayMyname(){                //function defination
  //  console.log("sarthak")          
}
sayMyname()                          // function call 

//add to two number
function adddTwoNumber(number1,number2){      //parameters diye hai number1 and 2 
   //console.log( number1+number2)

   //2 way to print 
  // let result=number1+number2
   //return result

//3rd way
return number1+number2
}
adddTwoNumber(3,4)                           //arguments 3,4

//if 
//adddTwoNumber(3,"4")
//adddTwoNumber(3,null)

//ek veriable ke andar store krate hai result ko 
const result =adddTwoNumber(3,5)           //ye to ans sahi dega 
 // console.log("Result: ", result)           //**

// ************IF-else


 // 2nd way parameters lene ka 
 function loginUserMessage(username){

    if(username === undefined){            //is line ki jgah (!username) likh do tab bhi same kam karega             //agr username undefined hoga to msg print karo please enter a username
     //   console.log("please enter a username")
    }

    return`${username} just logged in`
 }
 //console.log(loginUserMessage("sarthak"))
 //console.log(loginUserMessage())          //undefined jab user kuch pass nhi karega 

//   function loginUserMessage(username ="sarthak"){          ese default value bhi pass kar skte hai 

 // cl------2

 function calCulatecartPrice(...num1){          //rest operator 
return num1                                     // mtlb ab jitne marji number pass karo vo sab array me dalenge
 }
 console.log(calCulatecartPrice(200,600,700));

 //object ko function me kese pass or use kiya jata hai 
 const user ={
    username:"sarthak",
    price:199
 }
function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
// handleObject({
  //  username:"sam",
   // price:399
// })

// arrays pass kar skte hai function me 

const myNewArray =[200,700,600,1000]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));



 

