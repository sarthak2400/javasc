// for loop

    for(let i =0; i<10; i++){
        const element =i;
        if(element==5){
         //   console.log("5 is the best number");
        }
       // console.log(element)
    }
    // console.log(element)           //ye error hai due to scope
      

    //0 se 10  tak ki table
    for (let i = 0; i <=10; i++) {
        console.log(`outer loop ${i}`)
          for (let j = 0;  j <=10; j++) {
           // console.log(`inner loop value ${j} and inner loop ${i}`)
           console.log(i +'*' + j + '=' + i*j);
           
            
        }
    }


    //break and continue
        
    for (let index = 1; index <= 20; index++) {
        if(index==5){
           //  console.log("detected 5")              // bich me hi break karva dena loop ko 
            break;
        }
       // console.log(`value if i is ${index}`)
        
    }
    for (let index = 1; index <= 20; index++) {
        if(index==5){
            console.log("detected 5")              // jese game khelte hue galti kar do to sab bolte hai koi ni maf kardo skip karo or game kehlte rho sirf ek bar ke liye 
            continue;
        }
        console.log(`value if i is ${index}`)
        
    }

    //while loop
let index=0
    while(index <= 10){
        console.log(`value of index is ${index}`);
        index=index+2

    }

    // arrays me 
    let myArr =["a","b","c"]
    let arr =0
    while(arr<myArr.length){
        console.log(`value is ${myArr[arr]}`);
        arr=arr+1 
    }

    //do while loop
let score =1

    do{
        console.log(`score is ${score}`);
        score ++
    } while(score <=10);

    
