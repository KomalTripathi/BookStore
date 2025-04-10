// Task 1
let age = 25;
let isAdult = age >= 18;

// Task 2
let x = 10, y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

// Task 3
let n = 20; // Example number
let isEven = (n % 2 === 0) ? "Even" : "Odd";

// Task 4
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

// Task 5
function square(num) {
    return num * num;
}

// Testing outputs
console.log("Age:", age, "Is Adult:", isAdult);
console.log("Addition:", addition, "Multiplication:", multiplication, "Modulus:", modulus);
console.log("Number:", n, "is", isEven);
console.log("Numbers Array:", numbers);
console.log("Square of 6:", square(6));
