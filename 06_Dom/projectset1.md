# projects related to DOM
## Prjoect link [https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)]

# # Solution code 
## PROJECT 1

const buttons =document.querySelectorAll(".button")
const body = document.querySelector("body")


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
if(e.target.id=='grey'){
  body.style.backgroundColor ='grey'
}
if(e.target.id=='white'){
  body.style.backgroundColor ='white'
}
if(e.target.id=='yellow'){
  body.style.backgroundColor ='yellow'
}
if(e.target.id=='blue'){
  body.style.backgroundColor ='blue'
}

  })
})
     *********************** click on edit this file ******upper jha code likha hai agr code ache se dekhna hai to  **********
     
# #     Project  2 solution 
const form  = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.prevent.Default();

  const height= parseInt(document.querySelector('#height').value);
  const weight= parseInt(document.querySelector('#weight').value);
 const results =document.querySelector('#results')

  if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML =`please give a valid height $(height)`;
  }else if(weight == ''|| weight<0 || isNaN(weight)){
    results.innerHTML =`please give a valid weight $(weight)`;
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //to show this bmi in result
    results.innerHTML =`<span>${bmi}</span>`;
  }
})


## PROJECT -3 SOLUTION CODE
document.getElementById('clock')
// document.querySelector('#clock')




setInterval(function(){
  let date  = new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString();

},1000)    //jis kam ko kisi particular time ke bad chlana hai   1000 mtlb mili second me time 


