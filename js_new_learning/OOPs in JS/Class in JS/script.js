// // We have solved so much in prev files.
// function CreateSt(f_name, l_name, roll_no, age) {
//   (this.f_name = f_name),
//     (this.l_name = l_name),
//     (this.roll_no = roll_no),
//     (this.age = age);
// }

// // for getting birthYear
// CreateSt.prototype.birthYear = function () {
//   return new Date().getFullYear() - this.age;
// };
// // stu7.birthYear()          ==   output: 2002

// // for getting Full Name
// CreateSt.prototype.fullName = function () {
//   return this.f_name + " " + this.l_name;
// };
// // stu7.fullName()      ==      output: wali shah

// const stu7 = new CreateSt("wali", "shah", 1025, 22);
// const stu8 = new CreateSt("khan", "bahadur", 1027, 24);

// // But that's not enough there is still a lot more to improve, like we are still creating different different or separate functions outside which breaks our OOP concept somehow. So, we can solve it with the help of classes.

// // Topic 1: Classes

// class CreateStudents {
//   constructor(f_name, l_name, roll_no, age) {
//     this.f_name = f_name;
//     this.l_name = l_name;
//     this.roll_no = roll_no;
//     this.age = age;
//   }

// // console.log('hi');               // this will not print because it's outside the function or not in constructor func.s

//   birthYear() {
//     return new Date().getFullYear() - this.age;
//   }

//   fullName() {
//     return this.f_name + " " + this.l_name;
//   }
// }

// const stu9 = new CreateStudents("Abdul", "Rehman", 1030, 24);
// const stu10 = new CreateStudents("Ali", "Niazi", 1033, 23);

// // stu10.birthYear === stu9.birthYear       ==  output: true, because it is now stored only once in memory which is good.

// // Topic 2: Public, Private fields in Classes.

// class CreateStud {
//   #age;
//   #roll_no;
//   constructor(f_name, l_name, roll_no, age) {
//     this.f_name = f_name;
//     this.l_name = l_name;
//     this.#roll_no = roll_no;
//     this.#age = age;
//   }

// // Inserting #(hash) before any property will make it private, means we cannot access it directly now. Must include the #property_name above the constructor for working. just like we did #age with property and above the constructor.

// gender = "Male"; // Pubic Class Field - We can write in this way, also this will be a global property for all the students. Means if we console stu11 or stu12, this property will also be included with others like f_name, age etc.

// #country = "Pakistan"; // Private Class Field - We can write in this way, also this will be a global property for all the students. Means if we console stu11 or stu12, this property will also be included with others like f_name, age etc. But it's private and we cannot access it directly.

// // We can aslo make the private method just like private fields. Just write # before it. For example.
// // #birthYear() {
//   // return new Date().getFullYear() - this.#age;
// // }

//   birthYear() {
//     return new Date().getFullYear() - this.#age;
//   }

//   fullName() {
//     return this.f_name + " " + this.l_name;
//   }
// }

// const stu11 = new CreateStud("Moazzam", "khan", 1032, 24);
// const stu12 = new CreateStud("Sikandar", "Javed", 1031, 23);

// // Topic 3: Static property, methods in Classes.
class CreateStu {
  #age;
  #roll_no;
  constructor(f_name, l_name, roll_no, age) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.#roll_no = roll_no;
    this.#age = age;
  }

  // // Inserting static keyword before any property or method will make it static, means the property or method is now static and the property is applied directly on class rather than objects or constructor func.
  // // we can see by console.dir(CreateStu);

  static location = "Abbottabad, Pakistan";

  // // We can aslo make the static method just like static fields/properties. Just write static before it. For example.

  static {
    // // console.log(`hi, I'm student.`); // this will print directly without calling
    // // console.log(`Good`); // this will print directly without calling
    this.hi = "hello";

    // // we can also write method here like.
    this.birthYear = function () {
      return new Date().getFullYear() - this.age;
    };
    // // write anything here
  }

  // // Static Function
  // // static birthYear() {
  //   // return new Date().getFullYear() - this.#age;
  // // }

  birthYear() {
    return new Date().getFullYear() - this.#age;
  }

  fullName() {
    return this.f_name + " " + this.l_name;
  }
}

const stu13 = new CreateStu("Mubashir", "Farooq", 1035, 25);
const stu14 = new CreateStu("Kamran", "Liaquat", 1036, 24);
