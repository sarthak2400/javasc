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
        console.log("please enter a username")
    }

    return`${username} just logged in`
 }
 //console.log(loginUserMessage("sarthak"))
 console.log(loginUserMessage())          //undefined jab user kuch pass nhi karega 

//   function loginUserMessage(username ="sarthak"){          ese default value bhi pass kar skte hai 

 

