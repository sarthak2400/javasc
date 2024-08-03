let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate) /*

//SPECIFIC DATE 
let myCreatedDate=new Date(2023,0,24)    //java script ke andar months 0 se start hote hai jan-->0
//  console.log(myCreatedDate.toDateString());

let newDate=new Date("2024-01-24")
//  console.log(newDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());   //milisecond 1 st jan se
console.log(Math.floor(Date.now()/1000)) // ye answer seconds me ayega 

newDate.toLocaleString('default',{
    weekday:"long",

})






