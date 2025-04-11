// Task 1: Age check
let age = 25;
let isAdult = age >= 18;
console.log("Is adult:", isAdult); 

// Task 2: Operations with x and y
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);        
console.log("Multiplication:", multiplication); 
console.log("Modulus:", modulus);           

// Task 3: Check even or odd
let n = 7;
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log("Number is", result); 

// Task 4: Store numbers 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log("Array from 1 to 5:", numbers); 

// Task 5: Square function
function square(num) {
  return num * num;
}
console.log("Square of 4 is:", square(4)); 
