// T21:

// console.log("A");
// console.log("B");
// console.log("D");
// console.log("U");
// console.log("L");

// // Function in JS:
// // function functionName(){ function data }
// function myName() {
//     console.log("A");
//     console.log("B");
//     console.log("D");
//     console.log("U");
//     console.log("L");
// }
// myName();

// // let's see another example
// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }
// addTwoNumbers();                // output: NaN
// addTwoNumbers(10,5);            // Good, output: 15

// // suppose, if we not provide a number, let's see
// addTwoNumbers(10,"Abdul")       // output will be 10Abdul, we already saw this previously(Data Types) that how it's working (Conversions). Checking is necessary for these.
// addTwoNumbers(5,-3)             // Good, output: 2

// // Parameters and Arguments in Functions.
// function newFunction(par1, par2){               // par1 and par2 are two parameters of this function. It can be strings, numbers etc.
//     console.log(par1 * par2);
// }
// newFunction(6, null);                              // 6 and null are two arguements of this function. It can be strings, null, numbers etc.


// // T22:
// function myNumbers(numb1, numb2){
//     console.log(numb1 + numb2);
// }
// myNumbers(20, 30);                                  // output: 5
// const result = myNumbers(20, 30);
// console.log("result is = ", result)                 // it is showing undefined, it's intersting we are learning it next.


// function addFourNumbers(num1, num2, num3, num4) {
    // // Scope -- will learn it more in advance topics, because it is important. For now just remember some of its methods.
    
    // // Number 1:
    // let result = num1 + num2 + num3 + num4;
    // return result;                                     // Now the value is defined. and it's not showing undefined. So it's a proper way of doing that.
    
    // console.log("abdul");                              // Unreachable -- this will not run because the value after return line will not print. If we carry it to above line than return than it will work.

    // // Number 2: also there is another easy and direct method of declaring it
    // return num1 + num2 + num3 + num4;                     // easy and just one line method.
// }

// const result = addFourNumbers(1, 1, 2, 2);
// console.log("Result = ", result);


function loginUserMessage(username) {
    return `${username} is just logged in.`;

    // // Example of how to solve the undefined with if else method.
    // if(username === undefined){
    // // if(!username){                                    // same as above line, Meanning and working is same. both are using in JS and React.
    //     console.log("Please Enter your Username");
    //     return                                           // return, if we want not to execute anything else below this line.
    // }
    // return `${username} is just logged in.`
}

// console.log(loginUserMessage("Abdul Rehman"));             // output: Abdul Rehman is just logged in.        working great.
// console.log(loginUserMessage(""));                      // output:  is just logged in.                    this will execute also with empty string and then the next message. It's also good.
// console.log(loginUserMessage());                        // output: undefined is just logged in.           this will show undefined, because there is no arguements passed. For this we can also apply if and else method. See the above Example in funcion.


// Some more situations -- Making another function for it because applied many situations on the above function.
function logoutUserMessage(username = "Someone"){                  // we can make the condition here, so it will never be undefined again. If the arguement not passed, then this will be print.
    if(!username){
        console.log("Enter your Name");
        return;
    }
    return `${username} is logged out.`;
}
console.log(logoutUserMessage());                                   // Now it's not giving the undefined.


// T23:     Some more concept/situations of Functions


















