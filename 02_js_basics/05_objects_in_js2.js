// T20:

const course = {
    courseName: "Programming",
    tutorName: "Mr. Programmer",
    coursePrice: 4999
}
console.log(course.tutorName);         // generally we use this to extract values which is fine but there is a problem that we need to write this whole line again and again if we want to show the values many time.

// Good method -- valuable method to extract values.
const {courseName} = course;
console.log(courseName);

const {coursePrice: price} = course;   // we can also change the name of our key from here. Like I changed the name of coursePrice to price.
console.log(price);

/* ________________________________
// // Just for Learning -- React Object Destructuring method -- We will cover it in React
// // const navbar = (props.company) => {              // this is difficult, instead of giving props.name again and again simply use the below method which is easy and reliable.
// const navbar = ({company}) = {

// }
// navbar(company = "my company");
 _________________________________ */

// APIs -- Application Programmable Interface and JSON
// API -- get your github profile information from this api link: https://api.github.com/users/abdulrehmanghub

// {
//     name: "Abdul",
//     age: 23,
//     county: "Pakistan"
// }

// In JSON, we need to write this -- Proper way of declaring keys and values in JSON
// {
//     "name": "Abdul",
//     "age": 23,
//     "country": "Pakistan"
// }

// Sometimes the APIs are in the form of arrays. In arrays there are objects.
// [
//     {},
//     {},
//     {},
//     {},
//     {}
// ]

// We can get examples and learn more about APIs from jsonformatter.org

// We will learn more about APIs later on.



 



