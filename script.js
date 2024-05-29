// Loop Exersise: 

// 1. Write a js program to print all natural numbers from 1 to n. - using while loop

var i = 1;
var n = 10;
while (i <= n){
    console.log (i)
    i++
}
// result 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop

let $n = 10;  
while ($n >= 1) {
    console.log($n);  
    $n--;  
}
// result
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// 3. Write a js program to print all alphabets from a to z. - using while loop

var i = 97;
while (i <= 122){
    console.log (String.fromCharCode(i));
    i++
}
// result
// a
// b
// c
// d
// e
// f
// g
// h
// i
// j
// k
// l
// m
// n
// o
// p
// q
// r
// s
// t
// u
// v
// w
// x
// y
// z

// 4. Write a js program to print all even numbers between 1 to 100. - using while loop

let num = 1;
while (num <= 100) {
    if (num % 2 === 0) 
        console.log(num);
    
    num++;
}
// result
//  2
//  4
//  6
//  8
//  10
//  12
//  14
//  16
//  18
//  20
//  22
//  24
//  26
//  28
//  30
//  32
//  34
//  36
//  38
//  40
//  42
//  44
//  46
//  48
//  50
//  52
//  54
//  56
//  58
//  60
//  62
//  64
//  66
//  68
//  70
//  72
//  74
//  76
//  78
//  80
//  82
//  84
//  86
//  88
//  90
//  92
//  96
//  98
//  100

// 5. Write a js program to print all odd number between 1 to 100.

let Number = 1;  
while (Number <= 100) {
    console.log(Number);  
    Number += 2;  
}
// result
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19
// 21
// 23
// 25
// 27
// 29
// 31
// 33
// 35
// 37
// 39
// 41
// 43
// 45
// 47
// 49
// 51
// 53
// 55
// 57
// 59
// 61
// 63
// 65
// 67
// 69
// 71
// 73
// 75
// 77
// 79
// 81
// 83
// 85
// 87
// 89
// 91
// 93
// 95
// 97
// 99

// 6. Write a js program to find sum of all natural numbers between 1 to n.

let N = 100; 
let sum = 0;
let numb = 1;
while (numb <= N) {
    sum += numb;
    numb++;
}

console.log(`The sum of all natural numbers between 1 and ${N} is: ${sum}`);
// result
// The sum of all natural numbers between 1 and 100 is: 5050



// 7. Write a js program to find sum of all even numbers between 1 to n.

let $$n = 100;  
let Sum = 0;
let numbr = 2; 

while (numbr <= $$n) {
    Sum += numbr;
    numbr += 2;  
}

console.log(`The sum of all even numbers between 1 and ${$$n} is: ${Sum}`);
// result
// The sum of all even numbers between 1 and 100 is: 2550


// 8. Write a js program to find sum of all odd numbers between 1 to n.

let Nn = 100; 
let suM = 0;
let Num = 1;  
 
while (Num <= Nn) {
    suM += Num;
    Num += 2;
}

console.log(`The sum of all odd numbers between 1 and ${Nn} is: ${suM}`);
// result
// The sum of all odd numbers between 1 and 100 is: 2500






// If-else exercise



// 1. Write a js program to find maximum between two numbers.


let number1 = 10;  
let number2 = 20;  
if (number1 > number2) {
    console.log(`The maximum number is: ${number1}`);
} else if (number2 > number1) {
    console.log(`The maximum number is: ${number2}`);
} else {
    console.log('Both numbers are equal.');
}
// result
// The maximum number is: 20


// 2. Write a js program to find maximum between three numbers.

let Number1 = 10;  
let Number2 = 20;  
let Number3 = 30;  

let max;

if (Number1 >= Number2 && Number1 >= Number3) {
    max = Number1;
} else if (Number2 >= Number1 && Number2 >= Number3) {
    max = Number2;
} else {
    max = Number3;
}
console.log(`The maximum number is: ${max}`);
// result
// The maximum number is: 30


// 3. Write a js program to check whether a number is negative, positive or zero.

let numbeR = 10; 

if (numbeR > 0) {
    console.log("The number is positive.");
} else if (numbeR < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
// result 
// The number is positive.


// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

let NumbeR = 55;  
if (NumbeR % 5 === 0 && NumbeR % 11 === 0) {
    console.log(`${NumbeR} is divisible by both 5 and 11.`);
} else {
    console.log(`${NumbeR} is not divisible by both 5 and 11.`);
}
// result 
// 55 is divisible by both 5 and 11.


// 5. Write a js program to check whether a number is even or odd.

let number = 7;  
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}
// result 
// 7 is odd.


// 6. Write a js program to check whether a year is leap year or not.a js program to check whether a character is alphabet or not.

let year = 2024;  

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
// result 
// 2024 is a leap year.

let character = 'A';  
if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
    console.log(`${character} is an alphabet.`);
} else {
    console.log(`${character} is not an alphabet.`);
}
// result 
// A is an alphabet.


// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

let alphabet = 'A';  

// Convert alphabet to uppercase for consistency
alphabet = alphabet.toUpperCase();

// Check if the input is a single character
if (alphabet.length === 1) {
    if (alphabet === 'A' || alphabet === 'E' || alphabet === 'I' || alphabet === 'O' || alphabet === 'U') {
        console.log(`${alphabet} is a vowel.`);
    } else {
        console.log(`${alphabet} is a consonant.`);
    }
} else {
    console.log('Please enter a single alphabet.');
}
// result 
// A is a vowel.



// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

let characteR = '9';  
if ((characteR >= 'a' && characteR <= 'z') || (characteR >= 'A' && characteR <= 'Z')) {
    console.log(`${characteR} is an alphabet.`);
} else if (characteR >= '0' && characteR <= '9') {
    console.log(`${characteR} is a digit.`);
} else {
    console.log(`${characteR} is a special character.`);
}
// result 
// 9 is a digit.


// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

let Character = 'A'; 
if (Character >= 'a' && Character <= 'z') {
    console.log(`${Character} is a lowercase alphabet.`);
} else if (Character >= 'A' && Character <= 'Z') {
    console.log(`${Character} is an uppercase alphabet.`);
} else {
    console.log(`${Character} is not an alphabet.`);
}
// result 
// A is an uppercase alphabet.


// 11. Write a js program to input week number and print week day.

let weekNumber = 3;  

switch (weekNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid week number. Please enter a number between 1 and 7.");
}
// result 
// Wednesday

// 12. Write a js program to input month number and print number of days in that month.

let monthNumber = 2; 

switch (monthNumber) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
        console.log("31 days");
        break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
        console.log("30 days");
        break;
    case 2: // February
        console.log("28 or 29 days (depending on leap year)");
        break;
    default:
        console.log("Invalid month number. Please enter a number between 1 and 12.");
}
// result
// 28 or 29 days (depending on leap year)



// 13. Write a js program to count total number of notes in given amount.

let amount = 765; 
let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let count = 0;

console.log(`Amount: ${amount}`);
// result 
// Amount: 765

for (let i = 0; i < notes.length; i++) {
    if (amount >= notes[i]) {
        count = Math.floor(amount / notes[i]);
        console.log(`${notes[i]} notes: ${count}`);
        amount %= notes[i];
    }
}
// result 
// 500 notes: 1
// 200 notes: 1
// 50 notes: 1
// 10 notes: 1
// 5 notes: 1

// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

let angle1 = 60;  
let angle2 = 60;  
let angle3 = 60;  

// Check if all angles are positive and their sum equals 180 degrees
if (angle1 > 0 && angle2 > 0 && angle3 > 0 && angle1 + angle2 + angle3 === 180) {
    console.log("The triangle is valid.");
} else {
    console.log("The triangle is not valid.");
}
// result 
// The triangle is valid.


// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

let side1 = 3; 
let side2 = 4;  
let side3 = 5; 

// Check if all sides are positive and satisfy the triangle inequality theorem
if (side1 > 0 && side2 > 0 && side3 > 0 && side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("The triangle is valid.");
} else {
    console.log("The triangle is not valid.");
}
// result 
// The triangle is valid.


// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

let Side1 = 5;  
let Side2 = 5;  
let Side3 = 5; 

if (Side1 === Side2 && Side2 === Side3) {
    console.log("The triangle is an equilateral triangle.");
} else if (Side1 === Side2 || Side1 === Side3 || Side2 === Side3) {
    console.log("The triangle is an isosceles triangle.");
} else {
    console.log("The triangle is a scalene triangle.");
}
// result 
// The triangle is an equilateral triangle.


// 17. Write a js program to find all roots of a quadratic equation.

let a = 1; 
let b = -3; 
let c = 2;  

// Calculate the discriminant
let discriminant = b * b - 4 * a * c;

// Check if the discriminant is positive, zero, or negative
if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`The roots are ${root1} and ${root2}.`);
} else if (discriminant === 0) {
    let root = -b / (2 * a);
    console.log(`The root is ${root}.`);
} else {
    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    console.log(`The roots are ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i.`);
}
// result 
// The roots are 2 and 1.


// 18. Write a js program to calculate profit or loss.

let costPrice = 1000;   
let sellingPrice = 1200;  

if (sellingPrice > costPrice) {
    let profit = sellingPrice - costPrice;
    console.log(`Profit: ${profit}`);
} else if (sellingPrice < costPrice) {
    let loss = costPrice - sellingPrice;
    console.log(`Loss: ${loss}`);
} else {
    console.log("No profit, no loss.");
}
// result 
// Profit: 200



// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let physics = 85;     
let chemistry = 90;    
let biology = 75;      
let mathematics = 80; 
let computer = 95;     

// Calculate total marks and percentage
let totalMarks = physics + chemistry + biology + mathematics + computer;
let percentage = (totalMarks / 500) * 100;

// Determine the grade based on percentage
let grade;
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
// result 
// Percentage: 85.00%
// Grade: B


// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%


let basicSalary = 15000; 

let hra, da;

if (basicSalary <= 10000) {
    hra = 0.2 * basicSalary;
    da = 0.8 * basicSalary;
} else if (basicSalary <= 20000) {
    hra = 0.25 * basicSalary;
    da = 0.9 * basicSalary;
} else {
    hra = 0.3 * basicSalary;
    da = 0.95 * basicSalary;
}

let grossSalary = basicSalary + hra + da;

console.log(`Gross Salary: Rs. ${grossSalary.toFixed(2)}`);
// result 
// Gross Salary: Rs. 32250.00


// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 150 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit

let units = 300; 

let bill = 0;

if (units <= 50) {
    bill = units * 0.50;
} else if (units <= 150) {
    bill = (50 * 0.50) + ((units - 50) * 0.75);
} else if (units <= 250) {
    bill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
} else {
    bill = (50 * 0.50) + (100 * 0.75) + (150 * 1.20) + ((units - 250) * 1.50);
}

console.log(`Total electricity bill: Rs. ${bill.toFixed(2)}`);
// result
// Total electricity bill: Rs. 355.00




