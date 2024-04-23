// T15: basics of Array
// let newArray = [1,2,3,4,5];
// console.log(newArray);
// console.log(newArray[2]);                   // output = 3 -- 0 based index

// const myFavSubjects = ["Computer", "Science", "History"];
// console.log(myFavSubjects[0]);

// Array Methods
// let myArray = [10,20,30,40,50];
// console.log(myArray);

// myArray.push(70);                               // push is used to insert value in array
// console.log(myArray);

// myArray.pop();                                  // pop is used to remove the last value from the array
// console.log(myArray);

// myArray.unshift(0);                             // add one more element in the start of array. -- the other elements positions affects, like move to next postitions.
// console.log(myArray);

// myArray.shift();                                // remove the very first element of array -- 
// console.log(myArray);


// console.log(myArray.includes(4));               // output: false  -- not in array
// console.log(myArray.includes(20));              // output: true -- in array

// console.log(myArray.indexOf(9));                // output: -1  -- if not in array
// console.log(myArray.indexOf(30));               // output: 2   -- because 30 is at index 2.


// const newArray2 = myArray.join();               
// console.log(myArray);                           // output: [ 10, 20, 30, 40, 50 ]  -- in array
// console.log(newArray2);                         // output: 10,20,30,40,50  -- in strings, because join converted this into strings.
// console.log(typeof newArray2);                  // output: string

// T16: Slice and Splice Methods

let array1 = [5,10,15,20,25];

console.log("A = ", array1);

const array2 = array1.slice(1, 3);
console.log("B = ", array2);                            // output:  [10, 15]     -- this includes the elements from index 1 to 3. The last value (3) will not be shown. -- final range not included

const array3 = array1.splice(1, 3);    

console.log("A = after using splice = ", array1);       // output:  [ 5, 25 ]    -- splice method have interchanged the values, like which was showing using slice. The splice have removed the slice values and shows others. 

console.log("C = ", array3);                            // output:  [10, 15, 20] -- this includes the elements from index 1 to 3. This will show all the elements between and including 1 to 3.  -- final range included.
