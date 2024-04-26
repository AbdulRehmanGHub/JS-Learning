// Previously we use the object literals methods to play with the objects.
// Now we will see the object singleton method. Let's start

// T:19
// const instaUser0 = {};                      // non-singleton object
// console.log(instaUser0);

// const instaUser = new Object ();               // singleton object       
// console.log(instaUser);

const newInstaUser = new Object ();

newInstaUser.id = "Insta123"
newInstaUser.name = "Abdul Rehman"
newInstaUser.email = "abdul_insta@gmail.com"
newInstaUser.isLoggedIn = true

// console.log(newInstaUser);

// const instaUserInfo = {
//     email: "abdul_insta@gmail.com",
//     fullName: {
//         userName: {
//             firstName: "Abdul",
//             lastName: "Rehman"
//         }
//     }
// }

// Method1 -- Note: we can go to as many nesting as we want like few examples are:
// console.log(instaUserInfo);
// console.log(instaUserInfo.fullName);
// console.log(instaUserInfo.fullName.userName);
// console.log(instaUserInfo.fullName.userName.lastName);

const obj1 = {1:"abc", 2:"abc"};
const obj2 = {3:"ghi", 4:"xyz"};

// Method 2
// const obj3 = {obj1, obj2};
// console.log(obj3);

// // Method 3
// const obj4a = Object.assign(obj1, obj2);
// console.log(obj4a);

// const obj4 = Object.assign({}, obj1, obj2);          // Works like this: const returnedTarget = Object.assign(target, source); The target {} is optional but it is better to give it to complete the syntax.
// console.log(obj4);

// Method 4 -- Spread Method: Recommended, easy and most widely used
const obj5 = {...obj1, ...obj2};
console.log(obj5);


// These methods are used when we want values from DataBase.
console.log(newInstaUser);
console.log(Object.keys(newInstaUser));         // it will show the result in array. Now we can do everything like loops etc on this.
console.log(Object.values(newInstaUser));       // it will show the result in array. Now we can do everything like loops etc on this.
console.log(Object.entries(newInstaUser));      // it will show each entry in a separate array format. First value will be key and the other will be its value.

console.log(newInstaUser.hasOwnProperty('isLoggedI'));         // it will check whether the property(key) is available or not. Result will be True or False.
// Note: We can find all the properties and methods on browser console.

// //The values will be showing like this when coming from DataBase.
// const users = [
//     {
//         id: "u1",
//         name: "user1",
//         email: "user1@gmail.com"
//     },{
//         id: "u2",
//         name: "user2",
//         email: "user2@gmail.com"
//     },{
//         id: "u3",
//         name: "user3",
//         email: "user2@gmail.com"

//     },{
//         id: "u4",
//         name: "user4",
//         email: "user4@gmail.com"

//     },
// ]

// console.log(users)