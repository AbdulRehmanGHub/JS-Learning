// // T23:     Some more concept/situations of Functions

function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(20))                     // output: 20
console.log(calculateCartPrice(100, 200, 300))          // output: 20,   because we have only one parameter and 3 argeuments, the only 1st arguement will show. easy concept.

// // To solve this issue, like we want all the arguements then there is a simple method to do that.
// // Before the parameters add 3 dots like ...    -- Sometimes it's called spread method and sometimes it's a rest operators/method. Now if it's using here we will call is rest operator. This will add all the arguements in a single array and give output.
function calculateNewCartPrice(...num1){
    return num1;
}
console.log(calculateNewCartPrice(100, 200, 300));

// // One more concept of rest operator ...                            -- val1, val2 is adjusts for the same position arguements and rest operator will apply on next arguments.
function calculateTheCartPrice(val1, val2, ...num1){                // val1 will be the first arg, val2 is 2nd and then all the othere args will be showing in array because of rest operator.
    return num1;
}
console.log(calculateTheCartPrice(100, 200, 300, 400));

// // T24: Handling objects -- a short concept, we will see it more next.
// // In these type of situations we need to check the type safety by if else or any method to avoid errors/mistakes.
const user = {
    username: "Abdul",
    totalItems: 4,
    price: 950                   
    // // prices: 950               // if we change the key name from price to any other, then it will show undefined.
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username}, the total items purchased are ${anyObject.totalItems}, and total price is ${anyObject.price}`);
}
handleObject(user);

// // we can also pass the direct object like
// handleObject({
//     username: "SomeUser",
//     totalItems: 4,
//     price: 599
// });


// // handling Objects in Array
const myNewArray = [10, 20, 50, 80, 100];

function returnValue(getArray){
    return getArray[2];
}
console.log(returnValue(myNewArray));

// // we can also pass the direct object like
// console.log(returnValue([10, 20, 30, 40, 50]));

