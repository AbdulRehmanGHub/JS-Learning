// // T26: More examples of scopes.

function one(){
    const value1 = "Abdul Rehman";

    function two(){
        const value2 = "JavaScript";
        // console.log(value1);
    }
    // console.log(value2);                     // it's giving error because we have defined the value2 inside the scope. And accessing it from outside.
    two();
}
one();                                          // output: Abdul Rehman. Which is correct. Because value1 is defined inside the scope and accessing it from inside the function.

// This will work same in if else or loops etc, let's see an example
if(true){
    const myName = "Abdul";
    
    if(myName === "Abdul"){
        const age = 23
        // console.log(myName + ", age " + age + " is a student.");
    }
    // console.log(age);                          // Error -- defined outside the scope
}
// console.log(myName);                          // Error -- definde outside the scope


// // T27: Few types of function declaration.
// Function 1 -- Simple as we all know from beginning.

// funcNumber1();                                   // if I call it here, it will work same as I called it below the function.

function funcNumber1(num1){
    return num1 + 1;
}
funcNumber1();
console.log(funcNumber1(10));

// // Function 2 -- this is also a function, sometimes called as expression.

// // funcNumber2();                              // Error: Cannot access 'funcNumber2' before initialization -- this will not work, if we declared it above the function. It will only work if we call it below the function.

const funcNumber2 = function(num2){
    return num2 + 2;
}
funcNumber2();
console.log(funcNumber2(10));

// We will see the concept of Hoisting where we learn how to declare variable, functions etc with different methods to avoiid these types of errors.
// // Also there are many types of declaration of Funnction like Arrow function etc., we will see it next




