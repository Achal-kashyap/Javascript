// Q1: Array of 3 colors, push 2 more
let colors = ["Red", "Green", "Blue"];
colors.push("Yellow", "Pink");
console.log("1.1", colors);

// Q2: Empty array, push 5, 10, 15 one by one
let nums1 = [];
nums1.push(5);
nums1.push(10);
nums1.push(15);
console.log("1.2", nums1);

// Q3: ["Pen","Book"], add "Eraser" and "Scale" in a single push()
let stationery = ["Pen", "Book"];
stationery.push("Eraser", "Scale");
console.log("1.3", stationery);

// Q4: push() adds at the END of the array.
// Q5: Yes, push() changes (mutates) the original array.

// Q1: 5 numbers, pop twice
let nums2 = [1, 2, 3, 4, 5];
let r1 = nums2.pop();
let r2 = nums2.pop();
console.log("2.1 Array:", nums2, "Removed:", r1, r2);

// Q2: ["Red","Blue","Green"], pop last
let rbg = ["Red", "Blue", "Green"];
let removedColor = rbg.pop();
console.log("2.2 Array:", rbg, "Removed:", removedColor);

// Q3: [100,200,300,400], pop once and store value
let hundreds = [100, 200, 300, 400];
let popped = hundreds.pop();
console.log("2.3 Variable:", popped, "Array:", hundreds);

// Q4: pop() returns the removed last element.
// Q5: Calling pop() on an empty array returns undefined (no error).
console.log("2.5 pop on empty:", [].pop());

// Q1: ["CSS","JavaScript"], add "HTML" at start
let web = ["CSS", "JavaScript"];
web.unshift("HTML");
console.log("3.1", web);

// Q2: [20,30], add 5 and 10 at start
let n3 = [20, 30];
n3.unshift(5, 10);
console.log("3.2", n3);

// Q3: Empty array, unshift 3 cities one by one
let cities3 = [];
cities3.unshift("Delhi");
cities3.unshift("Mumbai");
cities3.unshift("Kolkata");
console.log("3.3", cities3);

// Q4: unshift() adds at the BEGINNING of the array.
// Q5: Yes, e.g. arr.unshift(1, 2, 3) adds all given values at once
//     (they keep the order in which you wrote them).

// Q1: 4 cities, remove first
let cities4 = ["Delhi", "Mumbai", "Pune", "Shimla"];
let firstCity = cities4.shift();
console.log("4.1 Remaining:", cities4, "Removed:", firstCity);

// Q2: [10,20,30,40], shift twice
let n4 = [10, 20, 30, 40];
let s1 = n4.shift();
let s2 = n4.shift();
console.log("4.2 Array:", n4, "Removed:", s1, s2);

// Q3: ["Apple","Banana","Mango"], store removed first element
let fruits4 = ["Apple", "Banana", "Mango"];
let firstFruit = fruits4.shift();
console.log("4.3 Variable:", firstFruit, "Array:", fruits4);

// Q4: shift() removes from the START; pop() removes from the END.
// Q5: shift() returns the removed first element (undefined if array is empty).

// Q1: 6 fruits, find existing and non-existing
let fruits5 = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Kiwi"];
console.log("5.1 Mango:", fruits5.indexOf("Mango"));
console.log("5.1 Papaya:", fruits5.indexOf("Papaya"));

// Q2: ["A","B","C","B","D"], index of "B"
let letters5 = ["A", "B", "C", "B", "D"];
console.log("5.2", letters5.indexOf("B"));

// Q3: 4 student names, check index of a name
let students = ["Jenil", "Mahir", "Arjun", "Krishna"];
console.log("5.3 Arjun:", students.indexOf("Arjun"));

// Q4: If the element is not found, indexOf() returns -1.
// Q5: If it appears more than once, indexOf() returns the FIRST index.

// Q1: Element repeated 3 times
let rep = ["a", "b", "a", "c", "a"];
console.log("6.1", rep.lastIndexOf("a"));

// Q2: ["X","Y","Z","Y","X"], last index of "Y" and "X"
let xyz = ["X", "Y", "Z", "Y", "X"];
console.log("6.2 Y:", xyz.lastIndexOf("Y"), "X:", xyz.lastIndexOf("X"));

// Q3: 5 numbers with one repeated
let n6 = [7, 3, 9, 3, 1];
console.log("6.3", n6.lastIndexOf(3));

// Q4: indexOf() searches from the start (first match);
//     lastIndexOf() searches from the end (last match).
// Q5: Use lastIndexOf() when you need the most recent / last occurrence
//     (e.g. last time a value appeared in a log or list).

// Q1: Friends' names
let friends = ["Jenil", "Mahir", "Arjun", "Krishna"];
if (friends.includes("Mahir")) {
  console.log("7.1 Mahir is in the friends list.");
} else {
  console.log("7.1 Mahir is not in the friends list.");
}

// Q2: [11,22,33,44], check 33 and 55
let n7 = [11, 22, 33, 44];
console.log("7.2 33:", n7.includes(33), "55:", n7.includes(55));

// Q3: 4 subjects, one existing, one not
let subjects = ["Maths", "Science", "English", "History"];
console.log("7.3 Maths:", subjects.includes("Maths"));
console.log("7.3 Physics:", subjects.includes("Physics"));

// Q4: includes() returns a boolean (true / false).
// Q5: Yes, it works for both numbers and strings (strict comparison, so
//     5 and "5" are NOT the same; strings are case-sensitive).

// Q1: 5 numbers, print before and after
let n8 = [1, 2, 3, 4, 5];
console.log("8.1 Before:", n8);
n8.reverse();
console.log("8.1 After:", n8);

// Q2: ["A","B","C","D"]
let abcd = ["A", "B", "C", "D"];
abcd.reverse();
console.log("8.2", abcd);

// Q3: 4 cities
let cities8 = ["Delhi", "Mumbai", "Pune", "Shimla"];
cities8.reverse();
console.log("8.3", cities8);

// Q4: reverse() modifies the ORIGINAL array (does not create a new one).
// Q5: "In-place" means the change is made directly inside the same array
//     (same memory/reference) without making a copy.

// Q1: 5 student names alphabetically
let names9 = ["Mahir", "Jenil", "Krishna", "Arjun", "Dev"];
names9.sort();
console.log("9.1", names9);

// Q2: ["Dog","Cat","Elephant","Ant"]
let animals = ["Dog", "Cat", "Elephant", "Ant"];
animals.sort();
console.log("9.2", animals);

// Q3: [40,100,5,25] with default sort
let n9 = [40, 100, 5, 25];
n9.sort();
console.log("9.3", n9); // [100, 25, 40, 5]  (wrong numeric order)

// Q4: Default sort() converts elements to strings and compares them
//     character by character, so "100" < "25" < "40" < "5".
//     (Correct way: n9.sort((a, b) => a - b))
// Q5: Yes, sort() changes the original array (in-place).

// Q1: 4 programming languages with " | "
let langs = ["JavaScript", "Python", "Java", "C++"];
console.log("10.1", langs.join(" | "));

// Q2: ["HTML","CSS","JavaScript"] with " - "
let web10 = ["HTML", "CSS", "JavaScript"];
console.log("10.2", web10.join(" - "));

// Q3: 3 favorite subjects with " / "
let favSub = ["Maths", "Science", "English"];
console.log("10.3", favSub.join(" / "));

// Q4: With no separator, join() uses a comma (",") by default.
// Q5: join() returns a STRING.

// Q1: Two number arrays combined
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let combined = a1.concat(a2);
console.log("11.1 New:", combined, "Original 1:", a1, "Original 2:", a2);

// Q2: arr1 = [1,2], arr2 = [3,4]
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log("11.2", arr1.concat(arr2));

// Q3: Three small arrays in a single concat()
let x = [1, 2];
let y = [3, 4];
let z = [5, 6];
console.log("11.3", x.concat(y, z));

// Q4: No, concat() does NOT change the original arrays; it returns a new one.
// Q5: Yes, e.g. a.concat(b, c, d) combines as many arrays as you pass.

// Q1: [5,10,15,20,25,30], index 2 to 5 (end index is excluded)
let n12 = [5, 10, 15, 20, 25, 30];
console.log("12.1", n12.slice(2, 5)); // [15, 20, 25]

// Q2: [10,20,30,40,50], slice(1, 4)
let n12b = [10, 20, 30, 40, 50];
console.log("12.2 New:", n12b.slice(1, 4), "Original:", n12b);

// Q3: 6 numbers, first 3 elements
let n12c = [2, 4, 6, 8, 10, 12];
console.log("12.3", n12c.slice(0, 3));

// Q4: No, slice() does not modify the original array.
// Q5: If the second argument is omitted, slice() goes to the END of the array.
console.log("12.5 slice(2):", n12.slice(2));

// Q1: Insert "Krishna" between Jenil and Mahir
let people = ["Jenil", "Mahir", "Arjun"];
people.splice(1, 0, "Krishna");
console.log("13.1", people);

// Q2: [10,20,30,40,50], remove 2 from index 1, insert a new number there
let n13 = [10, 20, 30, 40, 50];
n13.splice(1, 2, 99);
console.log("13.2", n13); // [10, 99, 40, 50]

// Q3: [100,200,300], replace 200 with 250
let n13b = [100, 200, 300];
n13b.splice(1, 1, 250);
console.log("13.3", n13b);

// Q4: slice() returns a copy of part of the array (original unchanged);
//     splice() adds/removes/replaces elements in the original array.
// Q5: Yes, splice() changes the original array.

// Q1: 4 favorite movies
let movies = ["Inception", "Interstellar", "3 Idiots", "Dangal"];
console.log("14.1", movies.toString());

// Q2: [1,2,3,4]
console.log("14.2", [1, 2, 3, 4].toString());

// Q3: 3 subject names
let subj14 = ["Maths", "Science", "English"];
console.log("14.3", subj14.toString());

// Q4: toString() has no option for a separator (always uses a comma);
//     join() lets you choose any separator.
// Q5: The default separator of toString() is a comma (",").

// Q1: 6 numbers, fill entire array with 10
let n15 = [1, 2, 3, 4, 5, 6];
n15.fill(10);
console.log("15.1", n15);

// Q2: [1,2,3,4,5] fill with 0
let n15b = [1, 2, 3, 4, 5];
n15b.fill(0);
console.log("15.2", n15b);

// Q3: Array of 4 elements filled with "Hello"
let hello = new Array(4).fill("Hello");
console.log("15.3", hello);

// Q4: Yes, fill() changes the original array (in-place).
// Q5: Yes, fill(value, start, end) can fill only part of the array.
let part = [1, 2, 3, 4, 5];
part.fill(0, 1, 3);
console.log("15.5", part); // [1, 0, 0, 4, 5]