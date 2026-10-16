var name = "Alex";
let age = 20;
const PI = 3.14159;

console.log(name);
console.log(age);
console.log(PI);
let score = 0;

score += 10;
console.log(score);

score += 5;
console.log(score);

score -= 3;
console.log(score);

const maxScore = 100;
let myNumber = 42;
let myDecimal = 3.14;
let myText = "Hello";
let isReady = true;
let notReady = false;
let nothing;
let emptyValue = null;
let myBigInt = 123456789012345678901234567890n;

console.log("myNumber:", myNumber, "Type:", typeof myNumber);
console.log("myDecimal:", myDecimal, "Type:", typeof myDecimal);
console.log("myText:", myText, "Type:", typeof myText);
console.log("isReady:", isReady, "Type:", typeof isReady);
console.log("notReady:", notReady, "Type:", typeof notReady);
console.log("nothing:", nothing, "Type:", typeof nothing);
console.log("emptyValue:", emptyValue, "Type:", typeof emptyValue);
console.log("myBigInt:", myBigInt, "Type:", typeof myBigInt);
let x;
let y = null;

console.log("x =", x);
console.log("y =", y);
console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);
console.log("x == y:", x == y);
console.log("x === y:", x === y);
let student = {
  name: "Alex",
  age: 20,
  isEnrolled: true
};

console.log(student);
console.log(student.name);
console.log(student.age);

let numbers = [10, 20, 30, 40, 50];
let mixed = [1, "hello", true, null];

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(mixed);

function greet(personName) {
  return "Hello, " + personName + "!";
}

let message1 = greet("Rahul");
let message2 = greet("Priya");

console.log(message1);
console.log(message2);
let a = 10;
let b = "10";
let c = true;
let d;
let e = null;
let f = { name: "Ali" };
let g = [1, 2, 3];
let h = function() { return 5; };

console.log("a =", a, "Type:", typeof a);
console.log("b =", b, "Type:", typeof b);
console.log("c =", c, "Type:", typeof c);
console.log("d =", d, "Type:", typeof d);
console.log("e =", e, "Type:", typeof e);
console.log("f =", f, "Type:", typeof f);
console.log("g =", g, "Type:", typeof g);
console.log("h =", h, "Type:", typeof h);
let firstName = "Rohan";
let _privateData = "Secret";
let $elementValue = 500;
let user123 = "Active";
let message;
console.log(message);

message = "Hello, World!";
console.log(message);

let userName = "Alice";
let userAge = 25;
let isStudent = true;
const MAX_USERS = 100;

console.log(userName);
console.log(userAge);
console.log(isStudent);
console.log(MAX_USERS);
let itemCount = 0;
let firstNum = 1;
let secondNum = 2;
let thirdNum = 3;
const PI_VAL = 3.14159;
let profileName = "John";
let totalCartItems = 0;

console.log(itemCount, firstNum, secondNum, thirdNum, PI_VAL, profileName, totalCartItems);