// ----------------------------------------------------
//                 STRING 
// ----------------------------------------------------

// String Declaration
let employee = "shikhavglmnopqts";

// ----------------------------------------
// 1. length
console.log("Length:", employee.length);

// ----------------------------------------
// 2. includes()
console.log("Includes 'g':", employee.includes("g"));

// ----------------------------------------
// 3. indexOf()
console.log("Index of 'v':", employee.indexOf("v"));

// ----------------------------------------
// 4. charAt()
console.log("Char at index 3:", employee.charAt(3));

// Example
let lang = "javascript";
console.log("Char at index 5 of lang:", lang.charAt(5));
console.log("Includes 'I':", lang.includes("I"));

// ----------------------------------------
// 5. slice(start, end)
let str = "Tanisha";
console.log("Slice (0,3):", str.slice(0, 3));

let stu_name = "Jackson Kailath";
console.log("Replace last name:", stu_name.replace("Kailath", "Kapoor"));

// ----------------------------------------
// 6. replace() – replaces first match only
let demo1 = "I love JavaScript, and JavaScript loves me";
console.log("replace() example:", demo1.replace("JavaScript", "Python"));

// ----------------------------------------
// 7. replaceAll() – replaces every match
let msg = "I am learning JS. I am improving daily. I am confident.";
console.log("replaceAll() example:", msg.replaceAll("I", "You"));


// ----------------------------------------
// 8. toString() – Number to String
let num = 100;
console.log("Type after toString:", typeof num.toString());
console.log("Type using literal:", typeof (50).toString());

// ----------------------------------------
// 9. split() – Convert string to array
let fruits = "apple, banana, orange, guava, papaya, watermellon";
console.log("Split all:", fruits.split(","));
console.log("Split first 4:", fruits.split(",", 4));

// slice() on Fruits
console.log("Slice fruits:", fruits.slice(0, 21));

// ----------------------------------------
// Number and Math Functions
let val = true;
console.log("Convert boolean to Number:", Number(val)); // true → 1, false → 0

let number = 1003;
console.log("Is finite:", isFinite(number));

let value = Infinity;
console.log("Is finite Infinity:", isFinite(value));

let dig = 10.6667839647364647835647838;
console.log("toFixed(6):", dig.toFixed(6));

// ----------------------------------------
// parseInt()
let dat = "px50";
console.log("parseInt:", parseInt(dat)); // NaN



// ----------------------------------------------------
//        PRACTICE QUESTIONS – STRING METHODS
// ----------------------------------------------------

// BASIC
console.log("\n--- BASIC QUESTIONS ---");

// 1. Find first and last character of a string
let q1 = "JavaScript";
console.log("Q1:", q1.charAt(0), q1.charAt(q1.length - 1));

// 2. Check if the word "code" exists in the string
let q2 = "I love to code in JavaScript";
console.log("Q2:", q2.includes("code"));

// 3. Count vowels in a string
let q3 = "Hello World"; 
let vowels = q3.match(/[aeiou]/gi);
console.log("Q3:", vowels ? vowels.length : 0);

// 4. Convert string to uppercase
console.log("Q4:", q3.toUpperCase());

// 5. Convert string to lowercase
console.log("Q5:", q3.toLowerCase());

// 6. Find index of the first space in a string
let q6 = "JavaScript Course";
console.log("Q6:", q6.indexOf(" "));

// 7. Extract first word from string
console.log("Q7:", q6.slice(0, q6.indexOf(" ")));

// 8. Convert a numeric string "123" into a number
console.log("Q8:", Number("123"));

// 9. Convert number to string (toString)
console.log("Q9:", (500).toString());

// 10. Check if string starts with "Java"
console.log("Q10:", q6.startsWith("Java"));

// 11. Check if string ends with "Course"
console.log("Q11:", q6.endsWith("Course"));

// 12. Replace "Course" with "Tutorial"
console.log("Q12:", q6.replace("Course", "Tutorial"));

// 13. Replace all occurrences of "a" with "@"
console.log("Q13:", q6.replaceAll("a", "@"));

// 14. Convert a string into an array of characters
console.log("Q14:", q6.split(""));

// 15. Count total characters excluding spaces
console.log("Q15:", q6.replaceAll(" ", "").length);


// ----------------------------------------------------
//                MEDIUM LEVEL
// ----------------------------------------------------

console.log("\n--- MEDIUM QUESTIONS ---");

// 16. Replace all spaces with dashes
let m1 = "JavaScript is awesome";
console.log("M1:", m1.replaceAll(" ", "-"));

// 17. Extract first 5 characters
console.log("M2:", m1.slice(0, 5));

// 18. Convert sentence into array
console.log("M3:", m1.split(" "));

// 19. Reverse a string
let m2 = "coding";
console.log("M4:", m2.split("").reverse().join(""));

// 20. Check if string starts with "Java"
console.log("M5:", m1.startsWith("Java"));


// ----------------------------------------------------
//                ADVANCED LEVEL
// ----------------------------------------------------

console.log("\n--- ADVANCED QUESTIONS ---");

// 21. Count how many times a word appears
let a1 = "I am happy because I am learning JavaScript and I am growing";
let count = a1.match(/am/gi);
console.log("A1:", count ? count.length : 0);

// 22. Capitalize first letter of each word
let a2 = "javascript makes development easier";
let caps = a2.split(" ").map(word =>
  word.charAt(0).toUpperCase() + word.slice(1)
).join(" ");
console.log("A2:", caps);

// 23. Remove all digits from a string
let a3 = "JS123 is 456 powerful";
console.log("A3:", a3.replace(/[0-9]/g, ""));

