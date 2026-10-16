// SCOPE
/*
Q1.
Consider the following code:
Answer the following:
- Which variable is declared in the global scope?
- Which variable is declared inside the function?
- Can both variables be accessed inside "display()"?
*/
var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();
/*
ANS 1:
- Global variable: city
- Variable inside the function: country
- Yes, both can be accessed inside display(). country is local, and
  city is found in the global scope.
- Output: Surat, India
*/


/*
Q2.
Predict the output:
*/
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);
/*
ANS 2:
550
500
*/


/*
Q3.
Identify the scope of each variable.
Classify "college", "name", "age", and "subject" as global or
function-scoped variables.
*/
var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}
/*
ANS 3:
- college -> global
- name    -> function-scoped (inside student())
- age     -> function-scoped (inside student())
- subject -> function-scoped (inside teacher())
*/


/*
Q4.
What will happen when you execute this code? Explain why.
*/
function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
// second();   // ReferenceError (uncomment to see)
/*
ANS 4:
It gives "ReferenceError: number is not defined". The variable number
is local to first(), so second() cannot see it.
*/


/*
Q5.
Write a JavaScript program that:
- Declares one variable in the global scope.
- Declares another variable inside a function.
- Prints both variables inside the function.
- Prints the global variable outside the function.
*/
var globalVar = "I am global";
function showVariables() {
    var localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}
showVariables();
console.log(globalVar);
/*
ANS 5:
I am global
I am local
I am global
*/

/*
Q6.
Predict the output:
*/
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);
/*
ANS 6:
I like Cricket
Cricket
*/


/*
Q7.
What will be the output? Explain why the output changes.
*/
var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);
/*
ANS 7:
English
Gujarati
Gujarati
changeLanguage() does not use "var", so it changes the global variable.
That is why the output changes.
*/


/*
Q8.
Find the error, if any. Will this code produce an error? Explain.
*/
function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();
/*
ANS 8:
No error. marks is assigned 75 before displayMarks() is called, so it
prints 75.
*/


/*
Q9.
Predict the output. Which statement causes an error, and why?
*/
var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
// console.log(message);   // ReferenceError (uncomment to see)
/*
ANS 9:
Favorite color: Red
Red
The last line console.log(message) causes a ReferenceError, because
message is a local variable inside showColor().
*/


/*
Q10.
Write a program that declares a global variable named "school" with
the value "Sunrise School".
Create two functions:
- "showSchool()" should print the school name.
- "updateSchool()" should change the global variable to
  "Green Valley School".
Call both functions in an appropriate order and print the final value
of "school".
*/
var school = "Sunrise School";
function showSchool() {
    console.log(school);
}
function updateSchool() {
    school = "Green Valley School";
}
showSchool();
updateSchool();
showSchool();
console.log(school);
/*
ANS 10:
Sunrise School
Green Valley School
Green Valley School
*/

