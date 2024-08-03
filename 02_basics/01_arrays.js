// ARRAYS

const myArray=[0,1,2,3,4,5]   //ese declare karte  hai 
const myHeroes =["sarthak", "Ironman "]
//console.log(myArray[0])


// ARRAYS METHODS

myArray.push(6)      // 6 bhi add ho gya 
//console.log(myArray)
myArray.pop(6)   // remove last elememt 
//console.log(myArray)

// unshift

myArray.unshift(9)          //starting me insert ho gya 
myArray.shift()
// console.log(myArray);
myArray.shift()              // starting me se 0 ud gya 
//console.log(myArray)
 

// question bhi puch sakte hai 
// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3))

// 
const newArr = myArray.join()
// console.log(myArray);                 //join ne hmare arraay ko bind or string me convert kar diya hai 
// console.log(newArr);



//slice , splice           IMP QUESTIONS

console.log("A",myArray);

const myn1 =myArray.slice(0,3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(0,3)
console.log( "C",myArray);
console.log(myn2);










