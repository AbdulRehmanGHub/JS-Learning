// T11:
const firstName = "Abdul";
const lastName = "Rehman";
let uniName = "Virtual University of Pakistan"

// console.log(firstName + lastName + " is a Student.");       // this is old way of doing it.

// use this method of backticks (``) which is more readable and reliable -- String Interpolations
console.log(`${firstName} ${lastName} is a student at ${uniName}.`);

// recommended method of declaring string
const countryName = new String('Pakistan, Asia');       // paste it in browser console to view more info and protos etc.

console.log(countryName[0]);
console.log(countryName[5]);

console.log(countryName.__proto__);

// some of the protos/functions/methods
console.log(countryName.length);
console.log(countryName.slice(2));
console.log(countryName.toUpperCase());
console.log(countryName.toLowerCase());
console.log(countryName.charAt(4));
console.log(countryName.indexOf('s'));

const countryShortName = countryName.substring(0, 3);
console.log(countryShortName);

const countrySliceName = countryName.slice(3);
console.log(countrySliceName);

const removeXtraSpaces = "      abdul rehman      ";
console.log(removeXtraSpaces);
console.log(removeXtraSpaces.trim());
console.log(removeXtraSpaces.trimRight());
console.log(removeXtraSpaces.trimStart());


let newURL = "https://www.abdulrehmanwebsite.com/about%20page";
console.log(newURL.replace('%20' , '_'));

console.log(newURL.includes("abdul"));          // true
console.log(newURL.includes("google"));         // false

const fullAddress = "VU Campus Aboottabad Pakistan Asia";
console.log(fullAddress.split(" "));                // this will separate our text based on what we typed here e.g space or dashed etc.
