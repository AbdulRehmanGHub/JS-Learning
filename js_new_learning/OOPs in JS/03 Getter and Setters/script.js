class StudentsData {
  #age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#age = age;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const student1 = new StudentsData("abdul", "rehman", 24);
const student2 = new StudentsData("ali", "shah", 22);

// // The above  class is working fine and we can get result from it also.

// // If we want to access the fullName or any data here it will give error or undefined. Means we cannot able to get and set the data here.
// // Note: The classes are not necessary for get and set, we can use it with simple functions.

// // console.log(StudentsData.firstName);             // undefined
// // console.log(StudentsData.fullName());             // Type Error, because we are accessing it outside

// // But we can fix it with the help of getter and setter function. Just write get before any property or method.
const studentData = {
  firstName: "Abdul",
  lastName: "Rehman",
  age: 23,

  // // Added 'get' before. So, it will be act as property and will show inside the student3 and student4 property.
  // // Now, we can easily access it in console using   student3.fullName or student4.fullName etc.
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // // Now, we can easily set it's value to something else. like
  set fullName(value) {
    console.log(value);
  },

  // // Now, we can also split values for firstName and lastName to set it's value separately to something else. like
  // set fullName(value) {
  //   const splitted = value.split(" ");
  //   console.log(splitted);
  //   this.firstName = splitted[0];
  //   this.lastName = splitted[1];
  // },

  // // We can also use the destructuring method to split values.
  // set fullName(value) {
  //   const [firstName, lastName] = value.split(" ");
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // },
};

// // We can check value here before set value.
// console.log(studentData.fullName);

// // This will set the value to new Value.
studentData.fullName = "Pakistan Khan";
