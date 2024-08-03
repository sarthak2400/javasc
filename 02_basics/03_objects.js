//object literals

const mySym = Symbol("key1")     //declare symbol of key1

const JsUser={
    name:"sarthak",
    age:21,
//**************** */
    [mySym]:"mykey1",   
    //*********** */                     //Interview wala question symbol ka syntax ese hota hai object me 
    location: "Chandigarh",
    email:"sarthak@google.com",
    isLoggedIn:false,

}
//2 ways to print the result
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(typeof(JsUser[mySym]));      

//change the value

JsUser.email="bagga24@.com"

// ki value ko change na kar paye 

// Object.freeze(JsUser)     //object me JsUser ko freez kar do 
// console.log(JsUser)

JsUser.greeting = function(){
    
    console.log("hello Js user")
}

console.log(JsUser.greeting());              //ye execute nhi hua hai sirf reference aya hai function ka 

JsUser.greetingTwo = function(){
    
    console.log(`hello Js user, ${this.name}`)   //JsUser ke name ko acess kar rhe hai 
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())

