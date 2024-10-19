class Person {
  constructor(name, age, address, city, country, phone) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.city = city;
    this.country = country;
    this.phone = phone;
  }

  get fullAddress(){
    return `${this.address} ${this.city}, ${this.country}`;
  }

  set fullAddress(value){
    console.log(value);
  }
}

class Student extends Person{
   constructor(name, age, address, city, country, phone, fieldofStudy){
    super(name, age, address, city, country, phone)
    this.fieldofStudy = fieldofStudy;
   }
}

class Teacher extends Person{
    constructor(name, age, address, city, country, phone, department){
        super(name, age, address, city, country, phone)
        this.jobField = department;
    }
}

const student1 = new Student('abdul rehman', 24, 'Punjab Chowk', 'Mansehra', 'Pakistan', '+92300000100', 'Computer Science');
const teacher1 = new Teacher('Awias Zia', 40, 'Phase 3', 'Abbottabad', 'Pakistan', '+92300000222', 'Software Engineering');



// // Summary of the above code.

// // We have created a class Person and then inherit its properties to the child classes of it like Student and Teacher with the help of extends keyword.

// // Also, we have seen that we can create constructor for child classes and assign the previous properties there in the constructor + we can add new properties there in constructor also.

// // Now, if we created a constructor for child classes then we must use super() to assign the properties there in super() and for new property we have assigned it using this keyword.

// // Just like this, we can also make the Person as a child of its parent by creating new parent like class User. If we use the extends keyword with the Person then person will inherit the properties of User in the same way.