let arr = [
  [1, 2, 3],
  [4, 7, 6],
  [8, 8, 9]
];
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


function greet(name) {
return ("Welcome to CodingGita, "+ name);
}

console.log(greet("Nirmal"));
console.log(greet("Aniket"));