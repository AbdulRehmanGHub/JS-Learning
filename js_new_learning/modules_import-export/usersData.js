// generate an array with 10 users info as objects
const users = [];

for (let i = 1; i <= 10; i++) {
  users.push({
    id: i,
    name: `User${i}`,
    email: `user${i}@example.com`,
    age: Math.floor(Math.random() * 50) + 18, // Random age between 18 and 67
  });
}

console.log(users);

export { users };
