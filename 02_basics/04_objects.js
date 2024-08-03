//object ko singalton kese kar sakte hai or 
//constructor ki help se kese declare kar sakte hai 

// const tinderUser2= new Object()   //singalton object hai 
const tinderUser={}             //YE EK Non-singalton object hai 
// but dono hi empty objects hai 

tinderUser.id="123abc"
tinderUser.name="sammy"            //copy refer 
tinderUser.isLoggedIn = false

// console.log(tinderUser)
//console.log(tinderUser2)


// NESTING OF OBJECTS
const regularUser ={
    email:"sarthak@google.in", 
    fullname : { 
        userFullName:{
            firstName:"sarthak",
            lastName:"sharma"
        }

    }
}
// console.log(regularUser.fullname.userFullName.firstName);

//MERGE TWO OBJECTS

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}
// const obj3 = Object.assign(obj1, obj2 )    //same like array
// console.log(obj3);

//2 way to merge 
const obj3 ={...obj1,...obj2}
// console.log(obj3)

const users={
    id:1,
    email:"google@"
}
 //users[1].email
 // console.log(tinderUser);

// console.log(Object.keys(tinderUser));     //sare keys ki value de do tinderuser ki 

//***IMP jo result ayega vo array ki formate me ayega to hmm uspe loop lga sakte hai  */

//DESTRUCTURING 

const course ={
    courseName:"jshindi",
    coursePrice:"2000",
    courseIntructor:"sarthak"
}
//value ko print karvane ka dusra tarika 
const {courseIntructor}= course
console.log(courseIntructor)





