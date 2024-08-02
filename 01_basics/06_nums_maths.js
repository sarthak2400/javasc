const balance= new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));    // mtlb decimal ke bad kitne decimal lene hai 

const otherNumber =24.9088

//console.log(otherNumber.toPrecision(3));

const hundereds = 1000000
//console.log(hundereds.toLocaleString('en-IN'));  //comalag jaynge indian numbers ke hisab se

//+++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(23.457));
console.log(Math.ceil(4.2)); // ki me 4.2 ka --->5 hi hoga 
console.log(Math.floor(4.9));


//-----------------IMP

console.log(Math.random())
console.log((Math.random()*10)+1);      //ki min value 1 to aye hi 
console.log(Math.floor(Math.random()*10)+1)   //random hme 0. me value de or floor use zero kar dega to us se bachne ke liye 1 add kiya 
 

// +++++++++++IMP++++++++++++++

const min=1
const max=6
console.log(Math.floor(Math.random()*(max - min +1 )) +min);  //last me min isiliye add kiya bcz min ye no to chaiye hi 








