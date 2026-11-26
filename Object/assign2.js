// 1.1 book object
{
  const book = { title: "Atomic Habits", author: "James Clear", pages: 320 };
  console.log("1.1", book);
}

// 1.2 string, number, boolean
{
  const obj = { name: "Rahul", age: 20, isStudent: true };
  console.log("1.2", obj);
}

// 1.3 person with string, number, boolean, array, nested object
{
  const person = {
    name: "Rahul",
    age: 20,
    isMarried: false,
    hobbies: ["Cricket", "Music"],
    address: { city: "Delhi", pincode: 110001 },
  };
  console.log("1.3", person);
}

// 1.4 all six types including a method
{
  const obj = {
    name: "Rahul",
    age: 20,
    isActive: true,
    skills: ["HTML", "CSS", "JS"],
    address: { city: "Delhi" },
    greet() {
      return "Hello " + this.name;
    },
  };
  console.log("1.4", obj, obj.greet());
}

// 1.5 student with greeting method
{
  const student = {
    name: "Amit",
    greet() {
      return `Hello, I am ${this.name}`;
    },
  };
  console.log("1.5", student.greet());
}

// 2.1 variables to one object
{
  const user = { name: "Rahul", age: 20, city: "Delhi" };
  console.log("2.1", user);
}

// 2.2 product details
{
  const product = { name: "Laptop", price: 55000, available: true };
  console.log("2.2", product);
}

// 2.3 An object groups related data under one name, so the code is cleaner,
// easier to pass around and manage than many separate variables.

// 2.4 student and book objects
{
  const student = { name: "Amit", roll: 12, marks: 85 };
  const book = { title: "JS Basics", author: "John", price: 399 };
  console.log("2.4", student, book);
}

// 2.5 car variables to one object
{
  const car = { brand: "Honda", model: "City", year: 2022, color: "White", price: 1200000 };
  console.log("2.5", car);
}

// 3.1 object literal
{
  const student = { name: "Amit", age: 19, course: "BCA" };
  console.log("3.1", student);
}

// 3.2 new Object() with three properties
{
  const obj = new Object();
  obj.name = "Amit";
  obj.age = 19;
  obj.city = "Pune";
  console.log("3.2", obj);
}

// 3.3 Car constructor, two cars
{
  function Car(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  const car1 = new Car("Honda", "City");
  const car2 = new Car("Toyota", "Fortuner");
  console.log("3.3", car1, car2);
}

// 3.4 employee: literal vs constructor
{
  const emp1 = { name: "Riya", salary: 40000 };
  function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  const emp2 = new Employee("Riya", 40000);
  console.log("3.4", emp1, emp2);
}

// 3.5 three students via constructor in array
{
  function Student(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  const students = [new Student("Amit", 80), new Student("Riya", 90), new Student("Karan", 70)];
  console.log("3.5", students);
}

// 4.1 dot notation
{
  const student = { name: "Amit", age: 19 };
  console.log("4.1", student.name, student.age);
}

// 4.2 key with space, bracket notation
{
  const obj = { "full name": "Amit Sharma" };
  console.log("4.2", obj["full name"]);
}

// 4.3 key stored in variable
{
  const student = { name: "Amit", age: 19 };
  const key = "age";
  console.log("4.3", student[key]);
}

// 4.4 five properties, dot and bracket
{
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  console.log("4.4", obj.a, obj.b, obj.c, obj.d, obj.e);
  console.log("4.4", obj["a"], obj["b"], obj["c"], obj["d"], obj["e"]);
}

// 4.5 key in variable: correct vs incorrect
{
  const student = { name: "Amit" };
  const key = "name";
  console.log("4.5 correct:", student[key]);
  console.log("4.5 incorrect:", student.key);
}

// 5.1 add third property
{
  const obj = { name: "Amit", age: 19 };
  obj.city = "Pune";
  console.log("5.1", obj);
}

// 5.2 key with space
{
  const obj = { name: "Amit" };
  obj["favorite color"] = "Blue";
  console.log("5.2", obj);
}

// 5.3 empty object, four properties
{
  const obj = {};
  obj.name = "Amit";
  obj.age = 19;
  obj.city = "Pune";
  obj.course = "BCA";
  console.log("5.3", obj);
}

// 5.4 normal and spaced property
{
  const student = { name: "Amit" };
  student.age = 19;
  student["home town"] = "Jaipur";
  console.log("5.4", student);
}

// 5.5 dot and bracket together
{
  const obj = {};
  obj.name = "Amit";
  obj["age"] = 19;
  obj.city = "Pune";
  obj["pin code"] = 411001;
  console.log("5.5", obj);
}

// 6.1 update age
{
  const student = { name: "Amit", age: 19 };
  student.age = 20;
  console.log("6.1", student);
}

// 6.2 dot and bracket update
{
  const student = { name: "Amit", age: 19, city: "Pune" };
  student.age = 21;
  student["city"] = "Mumbai";
  console.log("6.2", student);
}

// 6.3 print, update two, print
{
  const obj = { name: "Amit", marks: 70, city: "Pune" };
  console.log("6.3 before:", obj);
  obj.marks = 85;
  obj.city = "Delhi";
  console.log("6.3 after:", obj);
}

// 6.4 number to string
{
  const obj = { age: 20 };
  obj.age = "twenty";
  console.log("6.4", obj, typeof obj.age);
}

// 6.5 update from user-defined values
{
  const student = { name: "Amit", age: 19, city: "Pune" };
  const updates = { age: 22, city: "Delhi" };
  for (const key in updates) {
    student[key] = updates[key];
  }
  console.log("6.5", student);
}

// 7.1 delete one property
{
  const student = { name: "Amit", age: 19, city: "Pune" };
  delete student.city;
  console.log("7.1", student);
}

// 7.2 delete non-existing property (returns true, nothing changes)
{
  const student = { name: "Amit" };
  console.log("7.2", delete student.salary, student);
}

// 7.3 four properties, delete two
{
  const obj = { a: 1, b: 2, c: 3, d: 4 };
  delete obj.a;
  delete obj.c;
  console.log("7.3", obj);
}

// 7.4 delete only if exists
{
  const obj = { name: "Amit", age: 19 };
  if ("age" in obj) {
    delete obj.age;
  }
  console.log("7.4", obj);
}

// 7.5 access deleted property (gives undefined)
{
  const obj = { name: "Amit", age: 19 };
  delete obj.age;
  console.log("7.5", obj.age);
}

// 8.1 array inside object
{
  const obj = { name: "Amit", skills: ["HTML", "CSS", "JS"] };
  console.log("8.1", obj);
}

// 8.2 object inside object
{
  const obj = { name: "Amit", address: { city: "Pune", pin: 411001 } };
  console.log("8.2", obj);
}

// 8.3 product with colors array and manufacturer object
{
  const product = {
    name: "Phone",
    colors: ["Black", "Blue", "Red"],
    manufacturer: { name: "Samsung", country: "Korea" },
  };
  console.log("8.3", product);
}

// 8.4 method using other properties
{
  const car = {
    brand: "Honda",
    model: "City",
    info() {
      return this.brand + " " + this.model;
    },
  };
  console.log("8.4", car.info());
}

// 8.5 string, number, array, nested object, method
{
  const obj = {
    name: "Amit",
    age: 19,
    skills: ["HTML", "CSS"],
    address: { city: "Pune" },
    intro() {
      return `${this.name} lives in ${this.address.city}`;
    },
  };
  console.log("8.5", obj.intro(), obj.skills[0], obj.age);
}

// 9.1 simple message method
{
  const obj = {
    sayHi() {
      console.log("9.1 Hello!");
    },
  };
  obj.sayHi();
}

// 9.2 this to access name
{
  const obj = {
    name: "Amit",
    showName() {
      console.log("9.2", this.name);
    },
  };
  obj.showName();
}

// 9.3 getDetails
{
  const student = {
    name: "Amit",
    marks: 75,
    getDetails() {
      return `${this.name} - ${this.marks}`;
    },
  };
  console.log("9.3", student.getDetails());
}

// 9.4 pass check
{
  const student = {
    name: "Amit",
    marks: 55,
    hasPassed() {
      return this.marks >= 40;
    },
  };
  console.log("9.4", student.hasPassed());
}

// 9.5 full name and adult check
{
  const person = {
    firstName: "Amit",
    lastName: "Sharma",
    age: 20,
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    isAdult() {
      return this.age >= 18;
    },
  };
  console.log("9.5", person.fullName(), person.isAdult());
}

// 10.1 print keys
{
  const obj = { name: "Amit", age: 19, city: "Pune" };
  for (const key in obj) {
    console.log("10.1", key);
  }
}

// 10.2 print values
{
  const obj = { name: "Amit", age: 19, city: "Pune" };
  for (const key in obj) {
    console.log("10.2", obj[key]);
  }
}

// 10.3 key: value
{
  const obj = { name: "Amit", age: 19, city: "Pune" };
  for (const key in obj) {
    console.log(`10.3 ${key}: ${obj[key]}`);
  }
}

// 10.4 count properties
{
  const obj = { a: 1, b: 2, c: 3, d: 4 };
  let count = 0;
  for (const key in obj) {
    count++;
  }
  console.log("10.4", count);
}

// 10.5 only number values
{
  const obj = { name: "Amit", age: 19, marks: 80, city: "Pune" };
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      console.log("10.5", key, obj[key]);
    }
  }
}

// 11.1 address nested object
{
  const student = { name: "Amit", address: { city: "Pune", pincode: 411001 } };
  console.log("11.1", student);
}

// 11.2 print nested city
{
  const student = { name: "Amit", address: { city: "Pune", pincode: 411001 } };
  console.log("11.2", student.address.city);
}

// 11.3 company with address and employees
{
  const company = {
    name: "TechSoft",
    address: { city: "Bangalore", pincode: 560001 },
    employees: ["Amit", "Riya", "Karan"],
  };
  console.log("11.3", company);
}

// 11.4 for...in on nested object
{
  const address = { city: "Pune", pincode: 411001, state: "Maharashtra" };
  for (const key in address) {
    console.log(`11.4 ${key}: ${address[key]}`);
  }
}

// 11.5 deeply nested
{
  const obj = { level1: { level2: { level3: "Deep value" } } };
  console.log("11.5", obj.level1.level2.level3);
}

// 12.1 first student name
{
  const students = [
    { name: "Amit", marks: 80 },
    { name: "Riya", marks: 90 },
    { name: "Karan", marks: 70 },
  ];
  console.log("12.1", students[0].name);
}

// 12.2 loop name and marks
{
  const students = [
    { name: "Amit", marks: 80 },
    { name: "Riya", marks: 90 },
    { name: "Karan", marks: 70 },
  ];
  for (const s of students) {
    console.log("12.2", s.name, s.marks);
  }
}

// 12.3 product names
{
  const products = [
    { name: "Laptop", price: 55000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 },
  ];
  for (const p of products) {
    console.log("12.3", p.name);
  }
}

// 12.4 highest marks
{
  const students = [
    { name: "Amit", marks: 80 },
    { name: "Riya", marks: 90 },
    { name: "Karan", marks: 70 },
  ];
  let top = students[0];
  for (const s of students) {
    if (s.marks > top.marks) top = s;
  }
  console.log("12.4", top);
}

// 12.5 average marks of five students
{
  const students = [
    { name: "Amit", marks: 80 },
    { name: "Riya", marks: 90 },
    { name: "Karan", marks: 70 },
    { name: "Neha", marks: 60 },
    { name: "Raj", marks: 85 },
  ];
  let total = 0;
  for (const s of students) total += s.marks;
  console.log("12.5", total / students.length);
}

// 13.1 object is correct: details of one thing
{
  const person = { name: "Amit", age: 19, city: "Pune" };
  console.log("13.1", person);
}

// 13.2 array is correct: list of similar items
{
  const fruits = ["Apple", "Banana", "Mango"];
  console.log("13.2", fruits);
}

// 13.3 one book object, array of three books
{
  const book = { title: "JS Basics", author: "John" };
  const books = [
    { title: "JS Basics", author: "John" },
    { title: "HTML Guide", author: "Mary" },
    { title: "CSS Guide", author: "Alex" },
  ];
  console.log("13.3", book, books);
}

// 13.4 Object stores data with named keys (e.g. { name: "Amit" }),
// array stores an ordered list accessed by index (e.g. ["Amit", "Riya"]).

// 13.5 One employee's details -> object (named properties like name, salary).
// List of employees -> array of objects (many similar items in order).
{
  const employees = [
    { name: "Amit", salary: 30000 },
    { name: "Riya", salary: 40000 },
  ];
  console.log("13.5", employees);
}

// 14.1 in operator
{
  const obj = { name: "Amit", age: 19 };
  console.log("14.1", "age" in obj);
}

// 14.2 Object.keys
{
  const obj = { name: "Amit", age: 19, city: "Pune" };
  console.log("14.2", Object.keys(obj));
}
