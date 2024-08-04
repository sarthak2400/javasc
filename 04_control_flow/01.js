// if 

//if(true){            ex- (4 != 2 )  ye true hai to loop me jayega 
  //  agr true hai to is ke andar ka code execute hoga verna nhi hoga
  //  condition like  ex--comparision 2===2 , 2>3 ,true or false ,<=,<,> , ==(check kar rhe hai) !=
// } 
//  === strict checking ki unka deta type bhi same hona chiaye tab hi enter kargea 
//   ex---
//   if (2 == "2"){
    //console.log("executed")      //ye execute ho jayega 
//}
if (2 === "2"){
    console.log("executed")      //ye execute nhi hoga  
}

 // falsy values  false, "" , BigInt, null, undefined , NaN 

 //truthy value   "0", 'false', " ", [],,  {}, function(){}


 //truthy  check
if(userEmail.length === 0){
  console.log("Array is empty")
}

//ternniary operator 

//  syntax ---  condition ? true : false

const iceTeaPrice =100 
iceTeaPrice <=80 ? console.log("LESS THAN 80") : console.log("more than 80")
