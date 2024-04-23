// T17:
const favSports = ["Cricket", "Hockey", "FootBall", "Tennis"];
const favBooks = ["Rich Dad Poor Dad", "The Power of Minds", "Alchemist"];
// console.log(favSports);
// console.log(favBooks);

// favSports.push(favBooks);
// console.log(favSports);
// console.log(favSports[4][1]);                // it's working but not a recommended method for merging arrays.

// Concat Method -- The proper way for merging the arrays.
// const myFavThings = favSports.concat(favBooks);
// console.log(myFavThings);                    // it's properly merged our two arrays.

// Spread Method -- The recommended method for merging the arrays.
// const myFavThings1 = [...favSports, ...favBooks];
// console.log(myFavThings1);                   // Same result as concat. It spreadout all the values individually from arrays.

// Flat Method -- For solving some complex and in-depths arrays
const newArray = [1,2,3, [4,5, [6,7]], [8,9,10]];
const toSolve = newArray.flat(1);               // flat(1) means to solve it for depth 1, infinity means to solve it for infintely depths.
const toSolve1 = newArray.flat(Infinity);
console.log(toSolve);
console.log(toSolve1);


// Few more Methods

console.log(Array.isArray("Abdul Rehman"));         // to check whether it is in the array or not. it will give true of false.
console.log(Array.from('Rehman'));                  // this will create array for us, and also separate each elements in the array.
console.log(Array.from({name: "AbdulRehman"}));     // this will give us empty array    -- we need to tell here that make array from values or make array from keys etc.

// More learning Arrays
let item1Price = 100;
let item2Price = 200;
let item3Price = 300;

console.log(Array.of(item1Price, item2Price, item3Price));      // all the vaules of variables will be show in a single array.