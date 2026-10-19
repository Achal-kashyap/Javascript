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


// ===================================================================
// Section 3: Function Scope
// ===================================================================

/*
Q11.
Predict the output. Explain the behavior of the last statement.
*/
function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
// console.log(first);   // ReferenceError (uncomment to see)
/*
ANS 11:
300
Then "ReferenceError: first is not defined". first exists only inside
the function.
*/


/*
Q12.
Find and explain the error.
*/
function employee() {
    var salary = 30000;
}
employee();
// console.log(salary);   // ReferenceError (uncomment to see)
/*
ANS 12:
ReferenceError: salary is not defined. salary is a local variable, so
it cannot be used outside employee().
*/


/*
Q13.
What will be the output? Why doesn't the value printed inside the
function change the global variable?
*/
var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);
/*
ANS 13:
25
15
The variable inside the function is a separate local variable. It only
hides (shadows) the global one, so the global value does not change.
*/


/*
Q14.
Consider this code. Answer the following:
- What is the output?
- Is a new local variable created each time the function is called?
- Does the local variable remain accessible after the function
  finishes executing?
*/
function calculateResult() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculateResult();
calculateResult();
/*
ANS 14:
- Output: 50 and 50
- Yes, a new local variable is created every time the function is
  called (result starts at 40 again).
- No, the local variable is not accessible after the function finishes.
*/


/*
Q15.
Write a function named "calculateArea()" that:
- Declares a local variable "length" with the value 8.
- Declares a local variable "width" with the value 4.
- Calculates and prints the area of a rectangle.
- Does not make either variable accessible outside the function.
*/
function calculateArea() {
    var length = 8;
    var width = 4;
    console.log(length * width);
}
calculateArea();
/*
ANS 15:
32
length and width are local, so they cannot be used outside the function.
*/


// ===================================================================
// Section 4: No Block Scope with "var"
// ===================================================================

/*
Q16.
Predict the output. Explain why "result" is accessible outside the
"if" block.
*/
if (10 > 5) {
    var result = "Success";
}
console.log(result);
/*
ANS 16:
Success
var does not have block scope. It is limited only to the function (or
global), so it is accessible outside the if block.
*/


/*
Q17.
What will be printed? Why does the output differ from what you might
expect if the block had its own scope?
*/
var num17 = 1;
if (true) {
    var num17 = 2;
}
console.log(num17);
/*
ANS 17:
2
The var inside the block is the same variable as the outer one, so its
value is overwritten. With block scope, it would have stayed 1.
*/


/*
Q18.
Predict the output. Does the standalone block create a separate scope
for "var"?
*/
var message = "Start";
{
    var message = "End";
}
console.log(message);
/*
ANS 18:
End
No, a standalone block does not create a separate scope for var.
*/


/*
Q19.
Find the output and explain the variable's scope. Does the condition
being "false" prevent the "var" declaration from being hoisted?
*/
if (false) {
    var result19 = 100;
}
console.log(result19);
/*
ANS 19:
undefined
No. The declaration is still hoisted even if the condition is false.
Only the assignment (= 100) does not run.
*/


/*
Q20.
Rewrite the following code so that the variable "secret" cannot be
accessed outside the "if" block. Use a variable declaration that
supports block scope. Explain why your solution works.
*/
if (true) {
    let secret = "Hidden";
}
// console.log(secret);   // ReferenceError (uncomment to see)
/*
ANS 20:
let is block-scoped, so secret exists only inside the { } block.
Printing it outside gives a ReferenceError.
*/


// ===================================================================
// Section 5: Block Scope with Loops
// ===================================================================

/*
Q21.
Predict the complete output. Explain why "number" can be accessed
after the loop.
*/
for (var number21 = 2; number21 <= 6; number21 += 2) {
    console.log(number21);
}
console.log("Final:", number21);
/*
ANS 21:
2
4
6
Final: 8
var is not block-scoped, so number stays available after the loop.
Its last value is 8 (the loop stops when the condition fails).
*/


/*
Q22.
What will be printed? Explain what happens to the original value of
"count".
*/
var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);
/*
ANS 22:
1
2
3
Count: 4
The loop uses the same variable, so the original value 10 is
overwritten.
*/


/*
Q23.
Predict the output. Is "i" accessible after the loop? Why?
*/
var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);
/*
ANS 23:
5
4
3
After loop: 2
Yes, i is accessible because it is declared with var in the global scope.
*/


/*
Q24.
Find the error, if any. Does the final statement cause an error? What
value does "item" contain?
*/
for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);
/*
ANS 24:
Item: 1
Item: 2
Item: 3
Last item: 4
No error. item contains 4 after the loop.
*/


/*
Q25.
Rewrite the following loop so that the loop variable is not accessible
outside the loop. Use a declaration that provides block scope. Explain
the difference between your solution and the original code.
*/
for (let step = 1; step <= 4; step++) {
    console.log(step);
}
// console.log(step);   // ReferenceError (uncomment to see)
/*
ANS 25:
1
2
3
4
With let, step exists only inside the loop. With var (original code),
step stayed available after the loop and printed 5.
*/


// ===================================================================
// Section 6: Function Scope Inside Loops
// ===================================================================

/*
Q26.
Predict the output. Explain why "number" is accessible after the loop
but not outside the function.
*/
function calculateLoop() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculateLoop();
/*
ANS 26:
10
20
30
Final: 4
var is function-scoped, so number is available anywhere inside the
function, but not outside it.
*/


/*
Q27.
Identify which statements cause errors. Explain your answer for each
occurrence of "marks".
*/
function studentMarks() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
studentMarks();
// console.log(marks);   // ReferenceError (uncomment to see)
/*
ANS 27:
- marks inside the loop: no error (prints 60, 70, 80).
- marks after the loop but inside the function: no error (prints 90).
- marks outside the function: ERROR (ReferenceError), because marks is
  local to the function.
*/


/*
Q28.
Predict the output. How many times does the loop execute?
*/
function testLoop() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
testLoop();
/*
ANS 28:
5
6
7
Final value: 8
The loop executes 3 times.
*/


/*
Q29.
Find and explain the error. Why does the order of these statements
matter?
*/
function calculateI() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
// console.log(i);   // ReferenceError (uncomment to see)
calculateI();
/*
ANS 29:
console.log(i) outside the function gives "ReferenceError: i is not
defined", because i is local to the function. The error stops the
program, so calculateI() never runs and 1, 2 are never printed.
*/


/*
Q30.
Write a function named "printNumbers()" that:
- Uses a "for" loop to print numbers from 1 to 5.
- Declares the loop variable using "var".
- Prints the loop variable again after the loop, inside the function.
- Demonstrates that the loop variable cannot be accessed outside the
  function.
Write the function call and the statement that attempts to access the
variable outside the function. Explain the expected error.
*/
function printNumbers() {
    for (var n = 1; n <= 5; n++) {
        console.log(n);
    }
    console.log("After loop:", n);
}
printNumbers();
// console.log(n);   // ReferenceError (uncomment to see)
/*
ANS 30:
1
2
3
4
5
After loop: 6
The last statement gives "ReferenceError: n is not defined", because n
is local to printNumbers().
*/


// ===================================================================
// Section 7: Hoisting with "var"
// ===================================================================

/*
Q31.
Predict the output. Explain why the first statement does not produce a
"ReferenceError".
*/
console.log(score);
var score = 90;
console.log(score);
/*
ANS 31:
undefined
90
The declaration "var score" is hoisted to the top with the value
undefined, so there is no ReferenceError.
*/


/*
Q32.
What will be the output? Why doesn't the first "console.log()" print
the global value of "a"?
*/
var a = 10;
function testHoist() {
    console.log(a);
    var a = 20;
    console.log(a);
}
testHoist();
/*
ANS 32:
undefined
20
The local "var a" is hoisted to the top of the function, so it hides
the global a. At that point it is still undefined.
*/


/*
Q33.
Identify which statements produce "undefined" and explain why.
*/
console.log(first33);
console.log(second33);
var first33 = 100;
var second33 = 200;
console.log(first33);
console.log(second33);
/*
ANS 33:
undefined
undefined
100
200
The first two statements print undefined, because the variables are
hoisted but not yet assigned.
*/


/*
Q34.
Predict the output. Rewrite the code in a way that represents how the
variable declaration is handled during hoisting.
*/
function calculateTotal34() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculateTotal34();

// How hoisting treats it:
function calculateTotal34Hoisted() {
    var total;
    console.log(total);
    total = 50;
    console.log(total);
}
calculateTotal34Hoisted();
/*
ANS 34:
undefined
50
*/


/*
Q35.
Find and explain the issue. Answer the following:
- What does the first "console.log()" inside the function print?
- What does the final "console.log()" print?
- How does hoisting affect the local variable "price"?
*/
var price35 = 100;
function showPrice() {
    console.log(price35);
    var price35 = 500;
}
showPrice();
console.log(price35);
/*
ANS 35:
- The first console.log() inside the function prints: undefined
- The final console.log() prints: 100
- The local price is hoisted, so it shadows the global price for the
  whole function.
*/


// ===================================================================
// Section 8: Function Declaration Hoisting
// ===================================================================

/*
Q36.
Predict the output. Explain why this works even though the function is
called before it is written.
*/
sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}
/*
ANS 36:
Hello from CodingGita
Function declarations are fully hoisted (name and body).
*/


/*
Q37.
What will be the output? Explain the difference from a normal var
variable.
*/
displayHoisted();
function displayHoisted() {
    console.log("Function is hoisted completely");
}
/*
ANS 37:
Function is hoisted completely
A normal var variable is hoisted only as undefined, but a function
declaration is hoisted with its full body.
*/


/*
Q38.
Find and explain the issue (if any). Why does this behave differently
from a function declaration?
*/
// greet();   // TypeError: greet is not a function (uncomment to see)
var greet = function() {
    console.log("Hi");
};
/*
ANS 38:
It gives "TypeError: greet is not a function". Here "var greet" is
hoisted as undefined, and the function is assigned only later. A
function declaration would have worked.
*/


/*
Q39.
Predict the output.
*/
console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());
/*
ANS 39:
function
I am hoisted
*/


/*
Q40.
Write a small program that:
- Calls a function before its declaration.
- The function prints a message using a global variable.
- Demonstrates that the entire function (name + body) is available due
  to hoisting.
*/
var welcomeMessage = "Welcome to JavaScript";
showWelcome();
function showWelcome() {
    console.log(welcomeMessage);
}
/*
ANS 40:
Welcome to JavaScript
The function works before its declaration because the whole function
(name + body) is hoisted.
*/


// ===================================================================
// Section 9: Scope Chain
// ===================================================================

/*
Q41.
Predict the output and explain the lookup process.
*/
var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();
/*
ANS 41:
2025
CSE
CodingGita
JavaScript first looks in the current scope, then in the parent scope,
and finally in the global scope.
*/


/*
Q42.
What will happen when this code runs? Explain using the scope chain.
*/
var globalVar42 = "I am global";
function outer42() {
    var outerVar = "I am outer";
    function inner42() {
        console.log(globalVar42);
        console.log(outerVar);
        // console.log(innerVar);   // ReferenceError (uncomment to see)
    }
    inner42();
}
outer42();
/*
ANS 42:
I am global
I am outer
Then "ReferenceError: innerVar is not defined". JavaScript searches
inner, outer and global scope, and does not find innerVar anywhere.
*/


/*
Q43.
Identify which variables are accessible inside deep() and which are
not.
*/
var a43 = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a43, b, c);
        }
        deep();
    }
    level2();
}
level1();
/*
ANS 43:
1 2 3
a, b and c are all accessible inside deep(). A function can see its own
variables and those of all its outer functions, but outer functions
cannot see variables of inner functions.
*/


/*
Q44.
Predict the output. Explain why the value of x changes depending on
the location of console.log.
*/
var x44 = "global";
function firstX() {
    var x44 = "first";
    function secondX() {
        console.log(x44);
    }
    secondX();
}
firstX();
console.log(x44);
/*
ANS 44:
first
global
Inside secondX(), the nearest x is the one in firstX(). Outside, only
the global x is visible.
*/


/*
Q45.
Write a nested function structure (at least 3 levels) that prints:
- A variable from the innermost function
- A variable from the middle function
- A variable from the outermost function / global scope
Demonstrate the scope chain clearly.
*/
var outermost = "Global";
function outerLevel() {
    var middle = "Middle";
    function innerLevel() {
        var innermost = "Inner";
        console.log(innermost);
        console.log(middle);
        console.log(outermost);
    }
    innerLevel();
}
outerLevel();
/*
ANS 45:
Inner
Middle
Global
*/


// ===================================================================
// Section 10: Variable Shadowing
// ===================================================================

/*
Q46.
Predict the output. Explain what "shadowing" means in this example.
*/
var score46 = 50;
function test46() {
    var score46 = 90;
    console.log(score46);
}
test46();
console.log(score46);
/*
ANS 46:
90
50
Shadowing means a local variable with the same name hides the outer
variable inside the function.
*/


/*
Q47.
What will be printed? Does the local variable permanently change the
global one? Why or why not?
*/
var name47 = "Global Name";
function show47() {
    var name47 = "Local Name";
    console.log(name47);
}
show47();
console.log(name47);
/*
ANS 47:
Local Name
Global Name
No, the local variable does not change the global one, because they
are two different variables.
*/


/*
Q48.
Find the output and explain. Compare this with the previous questions
(where var was used inside the function).
*/
var value48 = 10;
function update() {
    value48 = 20;   // no var
    console.log(value48);
}
update();
console.log(value48);
/*
ANS 48:
20
20
Without var, the function changes the global variable. In the earlier
questions, var created a new local variable, so the global value stayed
the same.
*/


/*
Q49.
Predict the complete output.
*/
var color49 = "Blue";
function changeColor() {
    var color49 = "Red";
    console.log("Inside:", color49);
}
changeColor();
console.log("Outside:", color49);
/*
ANS 49:
Inside: Red
Outside: Blue
*/


/*
Q50.
Write a program that demonstrates variable shadowing:
- Declare a global variable marks = 70.
- Inside a function, declare another variable marks = 95.
- Print both values (inside and outside the function) so the
  difference is clear.
*/
var marks50 = 70;
function showMarks() {
    var marks50 = 95;
    console.log("Inside:", marks50);
}
showMarks();
console.log("Outside:", marks50);
/*
ANS 50:
Inside: 95
Outside: 70
*/


// ===================================================================
// Section 11: Nested Functions
// ===================================================================

/*
Q51.
Predict the output. Can you access teacher or student outside outer()?
Explain.
*/
function outer51() {
    var teacher = "Kartik Sir";
    function inner51() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner51();
}
outer51();
/*
ANS 51:
Jenil
Kartik Sir
No. teacher is accessible only inside outer51() and its inner
functions. student is accessible only inside inner51().
*/


/*
Q52.
What will this code print? Explain the accessibility of each variable.
*/
function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();
/*
ANS 52:
Parent
Child
Grandchild
- a is available in parent, child and grandchild.
- b is available in child and grandchild.
- c is available only in grandchild.
*/


/*
Q53.
Find the error(s). Why does the order and placement of the function
call matter?
*/
function outer53() {
    var secret = "Hidden";
    function inner53() {
        console.log(secret);
    }
}
// inner53();   // ReferenceError (uncomment to see)
outer53();
/*
ANS 53:
inner53() is called outside outer53(), so it gives "ReferenceError:
inner53 is not defined". This error happens first, so outer53() never
runs. Also, inner53() is never called inside outer53(). The fix is to
call inner53() inside outer53().
*/


/*
Q54.
Predict the output. Explain how the inner function still has access to
greeting.
*/
function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();
/*
ANS 54:
Hello students
The inner function remembers the variables of its outer function even
after the outer function has finished. This is called a closure.
*/


/*
Q55.
Write a function named studentInfo() that:
- Declares a local variable name
- Declares a local variable course
- Contains an inner function display() that prints both variables
- Calls the inner function from the outer function
(This is the mini-assignment style question from the notes.)
*/
function studentInfo() {
    var name = "Jenil";
    var course = "JavaScript";
    function display() {
        console.log(name + " - " + course);
    }
    display();
}
studentInfo();
/*
ANS 55:
Jenil - JavaScript
*/


// ===================================================================
// Section 12: Common Errors with var
// ===================================================================

/*
Q56.
What is the problem in this code? Explain the unintended side effect.
*/
function test56() {
    x56 = 100;   // missing var
}
test56();
console.log(x56);
/*
ANS 56:
100
Without var, x becomes a global variable automatically. The side
effect is that it pollutes the global scope and may overwrite other
variables by mistake.
*/


/*
Q57.
Predict the output and explain the misconception. Why do beginners
often expect an error here?
*/
if (true) {
    var x57 = 20;
}
console.log(x57);
/*
ANS 57:
20
Beginners expect an error because other languages have block scope,
but var is only function-scoped.
*/


/*
Q58.
What happens here? Explain why there is no ReferenceError and what
value is printed.
*/
console.log(a58);
var a58 = 10;
/*
ANS 58:
undefined
The declaration "var a58" is hoisted to the top with the value
undefined, so there is no ReferenceError.
*/


/*
Q59.
Find the issue. Is this allowed with var? Why can it become confusing?
*/
var x59 = 10;
var x59 = 20;
console.log(x59);
/*
ANS 59:
20
Yes, it is allowed with var. It is confusing because the same variable
can be redeclared and overwritten by mistake without any error.
*/


/*
Q60.
Rewrite the following code to avoid the common error of accidentally
creating a global variable, and also make the variable properly scoped.
*/
function calculate60() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate60();
// console.log(total);   // ReferenceError (as it should be)
/*
ANS 60:
15
total and i are now declared with let, so they stay inside the function
and loop. The last line gives a ReferenceError, which is correct.
*/