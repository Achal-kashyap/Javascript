// Assignment : Arrays in JavaScript
// 1. What Is an Array?

// Q1: An array is a special variable that can hold many values under a single name, kept in order.
// Q2: The index.
// Q3: It always starts at 0.

var numbers = [10, 20, 30, 40];

// Q4: The value at index 2 is 30.
console.log(numbers[2]);

// Q5: The number 40 sits at index 3, because counting starts from 0.
console.log(numbers[3]);

// 2. Creating Arrays

// Q1: You can use an array literal (square brackets) or the Array constructor with new Array().
// Q2: The array literal method with square brackets is the recommended one.
// Q3:
var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

// Q4:
var marks = new Array(85, 90, 78);

// Q5: The new keyword.

// 3. Accessing Values in an Array


// Q1: You use the index number inside square brackets, like arrayName[index].
var team = ["Jenil", "Mahir", "Priyesha"];

// Q2: It prints Jenil.
console.log(team[0]);

// Q3: It prints Priyesha.
console.log(team[2]);

// Q4: It returns undefined, since nothing exists at that index.
console.log(team[10]);

// Q5:
var colors = ["red", "green", "blue"];
console.log(colors[0]);

// 4. Updating Values


// Q1: Assign a new value to that index, like arrayName[index] = newValue.
var scores = [80, 75, 90];

// Q2:
scores[1] = 95;

// Q3: It prints [80, 95, 90].
console.log(scores);

// Q4: False. A plain assignment is enough, there is no update() method.
// Q5: Yes, you can. The array grows to fit that index and the gap in between is left empty (undefined).
var demo = [1, 2, 3];
demo[6] = 99;
console.log(demo);
console.log(demo.length); // 7


// 5. Array Length


// Q1: The length property.
var arr = [1, 2, 3, 4];

// Q2: It prints 4.
console.log(arr.length);

// Q3: The length of an empty array is 0.
var emptyArr = [];
console.log(emptyArr.length);
// Q4: It tells you how many items the array has, so you can loop safely without hardcoding a number, and it helps you reach the last element with arr[arr.length - 1].
// Q5: It is a property, so no parentheses are needed.

// 6. Looping Through Arrays

// Q1: The for loop and the while loop.
// Q2: i < array.length
// Q3: The increment i++ goes after the array access statement, at the end of the loop body.
var names = ["Jenil", "Mahir", "Priyesha", "Yashvi"];
var i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
// Q4:
for (var j = 0; j < names.length; j++) {
  console.log(names[j]);
}
// Q5: The loop runs one extra time with an index that does not exist, so the last output is undefined.
for (var k = 0; k <= names.length; k++) {
  console.log(names[k]);
}