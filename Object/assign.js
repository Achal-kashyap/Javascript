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


let students = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 92 },
    { name: "Rohit", marks: 78 },
    { name: "Karan", marks: 95 }
];

let highest = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highest.marks) {
        highest = students[i];
    }
}

console.log("Highest Marks Student:", highest.name);