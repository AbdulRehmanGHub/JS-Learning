// 
let myName = "Abdul Rehman"
let length = myName.length;
console.log(myName);
console.log(length);

//
let city = "New York";
console.log(city.length);

//
let firstName = "Abdul";
console.log(firstName[0]);
console.log(firstName);
console.log(firstName[firstName.length-1]);


//
let name = "abdul" + 123;
console.log(name);

let empty = "";
console.log(empty);
console.log(empty.length);

let empty1 = " ";
console.log(empty1);
console.log(empty1.length);

// Traffic Signal Light
let redColor;
let yellowColor;
let greenColor;

let lightStatus = redColor;

if(lightStatus == redColor){
    console.log('stop the car!');
}else if(lightStatus == yellowColor){
    console.log('slow the car!');
}else{
    console.log('go!');
};

// Traffic Signal Light with Other Method
let lightColors = 'green';

if(lightColors == 'green'){
    console.log('run the car');
}else if(lightColors == 'red'){
    console.log('stop the car');
}else if(lightColors == 'yellow'){
    console.log('slow the car');
};

// Months - Switch Method
let month = 3;

switch(month){
    case 1:
        console.log("jan");
    break;

    case 2:
        console.log("feb");
    break;

    case 3:
        console.log("march");
    break;

    case 12:
        console.log("dec");
    break;

    default:
        console.log("not selected correct number!");
};

