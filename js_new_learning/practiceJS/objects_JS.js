// objects JS 1
// const newPost = {
//     username: "@abdulrehman",
//     content: "education is the key to success",
//     likes: 200,
//     reposts: 18,
//     tags: ["@ali", "@farooq", "@adeel"]
// };

// console.log(newPost);

// let totalTags = newPost.tags;
// console.log("The tagged accounts are:", totalTags);

// let totalLikes = newPost['likes'];
// console.log("The total likes on post are:", totalLikes)

// objects JS 2
// const companyEmployee = {
//     Abdul_Rehman : {
//         position: "Founder",
//         age: 30,
//         skills: ['Web Dev', 'DevOps', 'Management'],
//         yearsOfExperience: 10
//     },

//     Ali_Ahmed : {
//         position: "CEO",
//         age: 36,
//         skills: ['Web', 'Team Building', 'Management'],
//         yearsOfExperience: 13
//     },

//     Usman_Khan : {
//         position: "Developer",
//         age: 25,
//         skills: ['Web Dev'],
//         yearsOfExperience: 2
//     }
// };

// console.log(companyEmployee.Abdul_Rehman.age);

// Array of objects
const studentNames = [
    {
        name: 'abdul',
        rollNo: 1002,
        grades: 3.25,
        college: 'VU'
    },

    {
        name: 'saim',
        rollNo: 1005,
        grades: 3.29,
        college: 'KU'
    },

    {
        name: 'ayub',
        rollNo: 1101,
        grades: 3.83,
        college: 'VU'
    },

    {
        name: 'ali',
        rollNo: 2392,
        grades: 3.05,
        college: 'NUML'
    }
];

console.log(studentNames);

console.log(studentNames[1].grades = 3.97);
console.log(studentNames[3].gender = 'MALE');

console.log(studentNames);
