// const game=[
//     {name: "GTA 6", genre: "Action", rating:9.4},
//     {name: "COD", genre: "Action", rating:9.2},
//     {name: "Jo bo rounak ke sath khel ke gyi thi", genre: "Love", rating:"10+"}
// ]
// for( let i=0; i<game.length; i++){
//     console.log(game[i].name)
//     console.log(game[i].genre)
//     console.log(game[i].rating)
// }


// const products=[
//     {name: "Laptop", price: 80000},
//     {name: "mobile", price: 20000},
// ]
// for( let i=0; i<products.length; i++){
//     console.log(products[i].name)
//     console.log(products[i].price)
// } 


// let students = [
//     { name: "Rahul", marks: 85 },
//     { name: "Aman", marks: 92 },
//     { name: "Rohit", marks: 78 },
//     { name: "Karan", marks: 95 }
// ];

// let highest = students[0];

// for (let i = 1; i < students.length; i++) {
//     if (students[i].marks > highest.marks) {
//         highest = students[i];
//     }
// }
// console.log("Highest Marks Student:", highest.name);


// let book = {
//     title: "Atomic Habits",
//     author: "James Clear",
//     price: 450
// };

// console.log("Single Book:");
// console.log(book);


// let books = [
//     {
//         title: "The Alchemist", 
//         author: "Paulo Coelho",
//         price: 300
//     },
//     {
//         title: "Rich Dad Poor Dad",
//         author: "Robert Kiyosaki",
//         price: 400
//     },
//     {
//         title: "Deep Work",
//         author: "Cal Newport",
//         price: 350
//     }
// ];

// console.log("Three Books:");
// console.log(books);
// console.log("title" in book)
// console.log("marks" in book)
// console.log( Object.keys(book))
// console.log( Object.values(book))
// console.log( Object.entries(book))


// let student = {
//     scores: [80, 90, 70],
//     getAverage: function() {
//         let total = 0;
//         for (let i = 0; i < this.scores.length; i++) {
//             total += this.scores[i];
//         }
//         return total / this.scores.length;
//     }
// };
// console.log(student.getAverage());

// let data={
//     name:"asdfghjkl"
// }
// key="name"
// console.log(data[key])

// let data={
//     "first name":"asdfghjkl"
// }
// console.log(data["first name"])
// console.log(Object.keys(data))

// const profile={
//     name: "chetan",
//     greet(){
//         return "Hello, I am "+this.name;
//     }
// }
// console.log(profile.greet())


// let book = {
//     title: "Atomic Habits",
//     author: "James Clear",
//     price: 450,
//     discountedPrice: function() {
//         return this.price - 50;
//     }
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book.price);

// console.log(book.discountedPrice());


// let students = [
//     { name: "Achal", marks: 85 },
//     { name: "Rahul", marks: 90 },
//     { name: "Aman", marks: 78 },
//     { name: "Rohit", marks: 88 },
//     { name: "Karan", marks: 92 }
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
//     console.log(students[i].marks);
// }


// let students = [
//     {
//         name: "Achal",
//         marks: 85,
//         address: {
//             city: "Kangra",
//             state: "Himachal Pradesh"
//         }
//     },
//     {
//         name: "Rahul",
//         marks: 90,
//         address: {
//             city: "Delhi",
//             state: "Delhi"
//         }
//     },
//     {
//         name: "Aman",
//         marks: 78,
//         address: {
//             city: "Jaipur",
//             state: "Rajasthan"
//         }
//     },
//     {
//         name: "Rohit",
//         marks: 88,
//         address: {
//             city: "Surat",
//             state: "Gujarat"
//         }
//     },
//     {
//         name: "Karan",
//         marks: 92,
//         address: {
//             city: "Mumbai",
//             state: "Maharashtra"
//         }
//     }
// ];
 
//     console.log(students[i].marks);
//     console.log(students[i].address.city);
// }


let course = {
    name: "JavaScript",
    duration: "6 Months",
    topics: ["Objects", "Arrays", "Functions", "DOM"],
    instructor: {
        name: "Rahul Sharma",
        experience: "5 Years"
    }
};
console.log(course.instructor.name);
console.log(course.instructor.experience)
