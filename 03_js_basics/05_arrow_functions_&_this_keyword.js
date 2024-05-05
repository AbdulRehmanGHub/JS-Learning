// T28

const user = {
    username: "Abdul Rehman",
    reg_price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website!`);
        console.log(this)            // output: {username: 'Abdul Rehman', reg_price: 1000, welcomeMessage: [Function: welcomeMessage]}
    }
}

user.welcomeMessage();                  // output: Abdul Rehman, welcome to the website!
user.username = "SomeName";
user.welcomeMessage();                  // output: SomeName, welcome to the website!

// console.log(this)                    // output: {}