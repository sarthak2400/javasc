const user ={
    username:"sarthak",
    price:499,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        

    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
