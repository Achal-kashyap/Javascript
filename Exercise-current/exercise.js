// let arr = [
//   [1, 2, 3],
//   [4, 7, 6],
//   [8, 8, 9]
// ];
// console.log(arr[2][2])

// for(let i=0; i<arr.length; i++){
//     let bag=""
//     for(let j=0; j<arr[i].length;j++){
//          console.log(arr[i][j])+" "
//     }
//     console.log(bag)
// }
// console.log(bag)
// for(let i=0; i<arr.length; i++){
//     let bag=""
//     for(let j=0; j<arr[i].length;j++){
//         bag+=arr[i][j]+" "
//     }
//     console.log(bag)
// }
// dia=0
// sec_dia=0
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length;j++){
//         if(i==j){
//             dia+=arr[i][i]
//         }
//         if (i + j == arr.length - 1){
//             sec_dia+=arr[i][j]
//         }
//     }
// } 
// console.log(dia)
// console.log(sec_dia)

// let mat=[
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for(let i=0;i<mat.length;i++){
//     let bag=" "
//     for(let j=0;j<arr[i].length;j++){
//         bag+=mat[i][j]
//     }
//     console.log(bag)
// }

// let arr1 = [
//   [1, 2, 3],
//   [4, 15, 6],
//   [8, 8, 9]
// ]
// let l=0
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr1.length;j++){
//         if(arr1[i][j]>l){
//             l=arr1[i][j]
//         }
//     }
// }
// console.log(l)

// let m=[]
// for(let i=0;i<=4;i++){
//     mi=[]
//     for(let j=0;j<=4;j++){
//         let cell_v=(i+1)*(j+1)
//         mi[j]=cell_v;
//     }
//     m.push(mi)
// }
// console.log(m)

// let arr3 =[
//   [1, 2, 3],
//   [8, 8, 6],
//   [7, 7, 9]
// ];
// let dup=0
// for(let i=0;i<arr3.length;i++){
//     for(let j=0;j<arr3[i].length;j++){
//         for (let x = 0; x < arr3.length; x++) {
//             for (let y = 0; y < arr3[x].length; y++) {
//                 if((i!=x || j!=y) && arr3[i][j]==arr3[x][y]){
//                     dup=arr3[i][j]
//                 }
//             }
//         }
//     }
// }
// console.log(dup)


// function greet(name) {
// return ("Welcome to CodingGita, "+ name);
// }

// console.log(greet("Nirmal"));
// console.log(greet("Aniket"));

  
// let arr=["ak","bk","ck"]
// console.log(arr.includes("ck"))

// let a=10
// let b=2/0
// let temp=a;
// a=b
// b=temp
// console.log(a,b)


// let arr=[1,3,4,3,4,33,23,45]
// console.log(arr.slice(1,4))

// let arr=[5,10,15,20,25,30]
// arr.push(5)
// console.log(arr)
// arr.shift(5)
// console.log(arr)
// arr.unshift(5)
// console.log(arr)


// let arr=[5,10,15]
// arr.push(20)
// console.log(arr)

// let arr=["JENIL","MEHIR","ARJUN"]
// arr.splice(1,0,"krishna")
// console.log(arr)

// var arr=[1,2,3];
// console.log(arr.toString());

// let arr=[1,2,3,4,5,6]
// console.log(arr.fill(0,1,4))

// let arr1= new Array(10).fill(0)
// console.log(arr1)

// let arr=[5,10,15,20,25,30]
// arr.push(5)
// console.log(arr)
// arr.shift(5)
// console.log(arr)
// arr.unshift(5)
// console.log(arr)

// let student={
//     name: "zx",
//     age: 18,
//     isStudent:true,
//     marks: [12,34,56],
//     address: {
//         houseNo:123,
//         city: "kalol",
//         pin: 387221
//     },
//     greet : function(){
//         return "Hello"
//     } 
// }

// let Person={
//     name: "zx",
//     age: 18,
//     marks:98
// }

// let Product={
//     productName: "laptop",
//     price: 80000,
//     instock: true
// }

// let Employee={
//     namee: "asdfghj",
//     id: 1213213,
//     department: "CSE"
// }
// console.log(Employee)
// console.log(Employee.department)


// let student= new Object();
// student.name="asd"
// student.age=18
// console.log(student)

// function constructor(name, age, marks){
//     this.name=name;
//     this.age=age;
//     this.marks=marks;
// }

// let student= new constructor("sdfg",18,98);
// console.log(student)

// let Product={
//     productName: "laptop",
//     price: 80000,
//     instock: true
// }
// console.log(Product.price)
// console.log(Product["productName"])
// console.log(Product["instock"])
// let key="price"
// console.log(Product[key])

// const student = {
//     name: "William",
//     age: 18,
//     "favorite subject": "Mathematics"
// };
// let prop= "favorite subject"
// console.log(student.name)
// console.log(student.age)
// console.log(student["name"])
// console.log(student["age"])
// console.log(student[prop])

// const person = {
// };
// person.name = "scdas";
// person.age = 12;
// person.city= "kangra"
// person["First name"]="acj"
// console.log(person);

// const student = {
//     name: "William",
//     age: 18,
//     course: "BE"
// };
// console.log(student)
// student.age=19
// student["name"]="john"
// console.log(student)
// console.log(student.course)

// const student = {
//     name: "Sneha",
//     age: 18,
//     course: "CSE",
//     "enrollment no.": 12345678
// };
// delete student["enrollment no."]
// delete student.name
// delete student.user
// console.log(student)

// let product = {
//     name: "Laptop",
//     colors: ["Black", "Silver", "Blue"],

//     manufacturer: {
//         name: "ASUS",
//         country: "Taiwan"
//     },

//     getDetails: function() {
//         return this.name + " is manufactured by " + this.manufacturer.name;
//     }
// };


// console.log(product.manufacturer.country);
// console.log(product.getDetails());

// let person = {
//     firstName: "Achal",
//     lastName: "Kashyap",
//     age: 20,
//     getFullName: function() {
//         return this.firstName + " " + this.lastName;
//     },
//     isAdult: function() {
//         return this.age >= 18;
//     }
// };
// console.log(person.getFullName());
// console.log(person.isAdult());
// person.age = 16;
// console.log(person.isAdult());
// person.age = 18;
// console.log(person.isAdult());


// let student = {
//     name: "Achal",
//     age: 19,
//     course: "B.Tech CSE",
//     college: "Swaminarayan University"
// };
// let count = 0;
// for (let i in student) {
//     console.log(student[i]);
//     count++;
// }
// console.log("Total properties:", count);


// let company = {
//     name: "Google",
//     address: {
//         city: "Ahmedabad",
//         pincode: 382421
//     },
//     employees: ["Rahul", "Aman", "Rohit"]
// };
// console.log(company.address.city);
// console.log(company.employees[0]);
// for (let key in company.address) {
//     console.log(key + ": " + company.address[key]);
// }

// let a=10
// let b=a
// b=20
// console.log(b)
// console.log(a)


let a={
    name:"ssss"
}
let b=a
b.name="aaaa"
console.log(b)
console.log(a)


var profile = {
    name: "Chirag",
    course: "CSE",
    marks: 90
};
var displayData = profile;
displayData.marks = 95;


var s1 = { name: "Harsh", marks: 88 };
var s2 = {};
s2.name = s1.name;
s2.marks = s1.marks;
s2.marks = 95;
console.log(s1.marks); 
console.log(s2.marks);

let data={};
console.log(data,profile)