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

class CreateStudents {
  constructor(f_name, l_name, roll_no, age) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.roll_no = roll_no;
    this.age = age;
  }

  // // console.log('hi');               // this will not print because it's outside the function or not in constructor func.s
  
  birthYear() {
    return new Date().getFullYear() - this.age;
  }

  fullName() {
    return this.f_name + " " + this.l_name;
  }
}

const stu9 = new CreateStudents("Abdul", "Rehman", 1030, 24);
const stu10 = new CreateStudents("Ali", "Niazi", 1033, 23);

// // stu10.birthYear === stu9.birthYear       ==  output: true, because it is now stored only once in memory which is good.


