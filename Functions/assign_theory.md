# JavaScript Functions – Answers

## 1. Conceptual Understanding
A function is a block of code that does one specific task. We write it once and can use it many times.

Advantages:
1. Code can be reused.
2. Program stays clean and organized.
3. Easy to find and fix errors.
4. Avoids writing the same code again and again.

## 2. Function Declaration
```javascript
function greetStudent(name) {
    return "Hello " + name + ", welcome to CodingGita!";
}
console.log(greetStudent("Rahul"));
console.log(greetStudent("Priya"));
```

## 3. Hoisting
Hoisting means JavaScript moves function declarations to the top of their scope before running the code. So a function declaration can be called before it is written.

```javascript
sayHello();
function sayHello() {
    console.log("Hello!");
}
```
It works because the whole function is stored in memory before the code starts running.

## 4. Function Expression
```javascript
const calculateAverage = function (a, b, c) {
    return (a + b + c) / 3;
};
console.log(calculateAverage(80, 90, 70)); // 80
```

## 5. Parameters vs Arguments
- Parameters are the variable names written in the function definition.
- Arguments are the actual values passed when calling the function.

Example: in `function add(a, b)`, `a` and `b` are parameters. In `add(5, 3)`, `5` and `3` are arguments.

In the given code: parameters are `x` and `y`; arguments are `12` and `5`.

## 6. Return Statement
```javascript
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(24)); // true
console.log(isEven(17)); // false
```

## 7. Multiple Parameters
```javascript
function findPercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}
console.log(findPercentage(456, 500)); // 91.2
```

## 8. Function Without Return
A function without a return statement returns `undefined`.

```javascript
function show() {
    console.log("Hi");
}
console.log(show()); // prints Hi, then undefined
```

## 9. Simple Interest
```javascript
const calculateSimpleInterest = function (principal, rate, time) {
    return (principal * rate * time) / 100;
};
console.log(calculateSimpleInterest(10000, 5, 2)); // 1000
```

## 10. Mixed Concept Question
a) A function declaration is hoisted, so it can be called before it is defined. A function expression is not, so it can be called only after it is defined.

b)
```javascript
function studentMessage(name, marks) {
    return "Student " + name + " has scored " + marks + " marks.";
}
console.log(studentMessage("Amit", 85));
console.log(studentMessage("Neha", 92));
```

## 11. Function Scope
a)
- Local scope: a variable declared inside a function can be used only inside that function.
- Global scope: a variable declared outside all functions can be used anywhere in the program.

b)
```javascript
function displayAge() {
    let age = 20;
    console.log(age);
}
displayAge();
// console.log(age); // Error

let course = "JavaScript";
function showCourse() {
    console.log(course);
}
showCourse();
```
Printing `age` outside gives `ReferenceError: age is not defined`, because `age` exists only inside the function.

## 12. Combining Multiple Concepts
```javascript
function analyzeStudent(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    return name + " scored total " + total + " with average " + average.toFixed(2);
}
console.log(analyzeStudent("Rohan", 80, 75, 90));
console.log(analyzeStudent("Sneha", 60, 70, 85));
```

## 13. Nested Functions
a) A nested function is a function defined inside another function. The inner function can be used only inside the outer function.

b)
```javascript
function studentReport(name, m1, m2, m3) {
    function total() {
        return m1 + m2 + m3;
    }
    return name + " total marks: " + total();
}
console.log(studentReport("Karan", 70, 80, 90)); // Karan total marks: 240
```

## 14. Report Card Generator
```javascript
function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";
    return "Name: " + name + "\nTotal: " + total +
           "\nAverage: " + average.toFixed(2) + "\nResult: " + result;
}
console.log(generateReport("Aarav", 78, 85, 92));
console.log(generateReport("Diya", 30, 35, 40));
```

## 15. Multiple Utility Functions
```javascript
function sumOfThree(a, b, c) { return a + b + c; }
function averageOfTwo(x, y) { return (x + y) / 2; }
function maxOfTwo(a, b) { return a > b ? a : b; }
function fullName(first, last) { return first + " " + last; }

console.log(sumOfThree(10, 20, 30)); // 60
console.log(averageOfTwo(40, 60));   // 50
console.log(maxOfTwo(15, 25));       // 25
console.log(fullName("Virat", "Kohli"));
```

## 16. Grade Calculator
```javascript
const calculateGrade = function (p) {
    if (p >= 90) return "A+";
    if (p >= 80) return "A";
    if (p >= 70) return "B";
    if (p >= 60) return "C";
    if (p >= 40) return "D";
    return "F";
};
console.log(calculateGrade(95)); // A+
console.log(calculateGrade(82)); // A
console.log(calculateGrade(67)); // C
console.log(calculateGrade(45)); // D
console.log(calculateGrade(32)); // F
```

## 17. Shopping Discount
```javascript
function calculateFinalPrice(price, discountPercent) {
    return price - (price * discountPercent / 100);
}
console.log(calculateFinalPrice(2500, 15)); // 2125
console.log(calculateFinalPrice(1200, 10)); // 1080
```

## 18. Temperature Converter
```javascript
const celsiusToFahrenheit = function (c) { return (c * 9 / 5) + 32; };
const fahrenheitToCelsius = function (f) { return (f - 32) * 5 / 9; };

console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212
console.log(fahrenheitToCelsius(32));  // 0
console.log(fahrenheitToCelsius(212)); // 100
```

## 19. Mixed Advanced Question
a) No. A function expression is stored in a variable, and the function is assigned only when that line runs. Calling it earlier gives an error.

b)
```javascript
function calculateBill(price, quantity) {
    function addTax(amount) {
        return amount + (amount * 18 / 100);
    }
    return addTax(price * quantity);
}
console.log(calculateBill(500, 3)); // 1770
```

## 20. Challenge Question
```javascript
function processStudent(name, m1, m2, m3) {
    function calculate() {
        let total = m1 + m2 + m3;
        return { total: total, average: total / 3 };
    }
    let data = calculate();
    let result = data.average >= 40 ? "Pass" : "Fail";
    return name + " | Total: " + data.total +
           " | Average: " + data.average.toFixed(2) + " | " + result;
}

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) return "First average is higher";
    if (avg2 > avg1) return "Second average is higher";
    return "Both averages are equal";
}

console.log(processStudent("Aman", 85, 90, 95));
console.log(processStudent("Pooja", 60, 70, 65));
console.log(processStudent("Rahul", 30, 35, 25));
console.log(compareAverages(90, 65));
```