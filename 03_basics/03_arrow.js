const user ={
    username:"sarthak",
    price:499,

    welcomeMessage: function(){
       // console.log(`${this.username} ,welcome to website`);
        

    }
}
// user.welcomeMessage()
// user.username="sam"             //username ko change kar diya 
// user.welcomeMessage()

// function chai(){
   // let username ="sarthak"
    // console.log(this.username)
//}
//chai()


//function declare through arrow 


const chai= () => {                             //ban gya arrow function
    let username ="sarthak"
   // console.log(this.username)
}
chai()

//PURE ARROW function               () => {}

     // const addTwo=(num1, num2) => {
       // return num1+num2
   // }
// console.log(addTwo(3,4))


//  2 way implicit function return keywrod nhi likho jab ek hi line ka code hia 

const addTwo=(num1,num2) => (num1+num2)
console.log(addTwo(3,4))                          //ese bhi likh sakte hai 

//      **************refer to notebook  for more imp info 