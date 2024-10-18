// // Topic 1 - Encapsulation & Abstraction

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

// function birthYear() {
//   return new Date().getFullYear() - studentInfo.age;
// }

// // In simple func like birthYear, we can do access the key or value of our obj from outside.
// // But now we have created this logic in our studentInfo object, which is now became like a concept of both encapsulation and abstraction. Which means we can now creating and accessing elements or whatever from inside our studentInfo.

// Abstraction can be acheived by simple functions also, like in our function birthYear, we have already acheived abstraction that user only need to enter his/her age to see his birthYear. So, abstraction is not only acheive by OOP but we can acheive it in many ways. Basically, it is important to show the only relevant details to user.

// // Factory Functions
// // Let, say we have to create another / many student info. So, we have to do like copy paste the whole object like this as below and so on, which is making our coding so repitive. To solve this problem, the factory functions introduced to write the same features(key, values) for multiple students etc.

// const studentInfo2 = {
//     f_name: "abc",
//     l_name: "xyz",
//     roll_no: 1002,
//     age: 23,
//     birthYear() {
//       return new Date().getFullYear() - studentInfo2.age;
//     },
//   };

//   const studentInfo3 = {
//     f_name: "new",
//     l_name: "stud",
//     roll_no: 1003,
//     age: 21,
//     birthYear() {
//       return new Date().getFullYear() - studentInfo3.age;
//     },
//   };

// // Topic 2: Factory Functions - implementation.

// const studentData = {
//   f_name: "abc",
//   l_name: "xyz",
//   roll_no: 1002,
//   age: 23,
//   birthYear() {
//     return new Date().getFullYear() - studentData.age;
//   },
// };
// // we don't need the above obj now. As we created new here.

function createStudent(f_name, l_name, roll_no, age) {
  const stu = {
    f_name,
    l_name,
    roll_no,
    age,
    birthYear() {
      return new Date().getFullYear() - stu.age;
    },
  };
  return stu;
}

const student1 = createStudent("ali", "usman", 1005, 20);
const student2 = createStudent("furqan", "qureshi", 1007, 24);

// // This is called the factory functions, like we don't have to create all the object values, keys etc. We just need to provide values, and createStudent func will automatically insert student data. We can further simplify it with more features.

// // Note: student1.birthYear() === student2.birthYear()   -   false, which means it is creating with every new student we are creating. So, it is not good because it takes more memory and creating a separate birthYear func each time. We can fix it with Constructor functions and then also with Classes concept.

// // Topic 3: Constructor Functions
// // First let's fix the above problem of birthYear which is creating separately each time with some methods.

// // We have bring this func outside and used the this keyword with age because the stu will be not defined outside. Now it's working good and we have solve the above problem.

// // Also by doing this we have acheived the Polymorphism. Polymorphism means, doing multiple tasks/work with a sinlge function. In the below example we have created a birthYear func and used this keyword, the value of this keyword is changing or acting differently in different scenarios. It is created only once in memory but working for every student differently.

function birthYear() {
  return new Date().getFullYear() - this.age;
}

function createStudents(f_name, l_name, roll_no, age) {
  const stu = {
    f_name,
    l_name,
    roll_no,
    age,
    // birthYear() {                 // this is creating each time for each student. We need to fix it.
    //   return new Date().getFullYear() - stu.age;
    // },
    birthYear,
  };
  return stu;
}

const stu1 = createStudents("ali", "usman", 1005, 20);
const stu2 = createStudents("furqan", "qureshi", 1007, 24);

// // Note: stu1.birthYear === stu2.birthYear   -   true, because it's creating only once in memory. Fixed.

// // Look, we have achieved the Polymorphism but in the same time by creating function outside, the Encapsulation and Abstraction are compromised. Now our coding has no encapsulation(putting things in 1 place) and abstraction(hiding complexity).

// // We have to solve this now

function createStus(f_name, l_name, roll_no, age) {
  const stu = {
    f_name,
    l_name,
    roll_no,
    age,
    birthYear: createStus.commonMethods.birthYear,
  };

  return stu;
}

createStus.commonMethods = {
  birthYear() {
    return new Date().getFullYear() - this.age;
  },
};

const stu5 = createStus("ahmed", "ali", 1015, 22);
const stu6 = createStus("noman", "khan", 1017, 24);

// // The above method is good, but there is again some problems of OOPs concepts there, for resolving that we have to make it fix. We are going to use the Constructor function and this keyword. It is optional but recommended to start the name of contstructor function with capital letter like CreateSt.

function CreateSt(f_name, l_name, roll_no, age) {
  this.f_name = f_name,
  this.l_name = l_name,
  this.roll_no = roll_no,
  this.age = age;
}

CreateSt.prototype.birthYear = function () {
  return new Date().getFullYear() - this.age;
};

// // for getting Full Name
// CreateSt.prototype.fullName = function() {
//     return this.f_name + " " + this.l_name;
// }
// // stu7.fullName()      ==      output: wali shah

const stu7 = new CreateSt("wali", "shah", 1025, 22);
const stu8 = new CreateSt("khan", "bahadur", 1027, 24);


// // We will see more in Class in JS folder