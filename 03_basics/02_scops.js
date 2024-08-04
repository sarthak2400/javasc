
          //{ }   ye curley braces hi scope decide karte hai 


let a =300          //global scope 
if(true){
    let a =10
    const b=20                      
  //   console.log("INNER:", a)
}
// console.log(a);
 //console.log(b);
//  console.log(c);


// nested scope

function one(){
    const username="sarthak"

    function two(){
        const website ="youtube"
       // console.log(username);             //hmm dekhna chahte ki kya hmm is function ke andar username ko access kar sakte hai?
    }
// console.log(website);        -error dega 

two()
}
//one()

if(true){
    const username="sarthak"
    if(username==="sarthak"){
        const website=" Youtube"
        //console.log(username+website)
    }
   // console.log(website);         //ye access nhi hoga due to scope
    
}
//console.log(username)           //ye bhi scope me nhi hai 


//***********INTERESTING */
console.log(addone(5))           //is case me ans ayega 
function  addone(num){
    return num+1
}
addTwo(5)                 //upper lijh diya 
const addTwo=function(num){                  //is case me error ayega 
    return num+2                             // refer to notebook
}


