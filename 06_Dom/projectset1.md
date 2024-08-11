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
     *********************** click on edit in space **********

