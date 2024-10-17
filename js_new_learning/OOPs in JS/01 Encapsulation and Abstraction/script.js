const studentInfo = {
  f_name: "Abdul",
  l_name: "Rehman",
  roll_no: 1001,
  age: 22,
  birthYear() {
    // console.log(new Date().getFullYear() - studentInfo.age);
    return new Date().getFullYear() - studentInfo.age;
  },
};


// // In simple, we can do this. But now we have created this in our studentInfo, which is now became like a concept of both encapsulation and abstraction. Which means we can now creating and accessing elements or whatever from inside our studentInfo.

// function birthYear() {
//   return new Date().getFullYear() - studentInfo.age;
// }