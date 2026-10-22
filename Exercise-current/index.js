// let marks=98
// switch(true){
//     case marks>=90 && marks<=100:
//         console.log("A")
//         break;
//     case marks>=75 && marks<90:
//         console.log("B")
//         break;
//     case marks>35 && marks<75:
//         console.log("C")
//         break;
//     default:
//         console.log("invalid input")
// }

// let n= 5;
// let r = (n%2==0) ? "even" : "odd";                                       //condition ? True : False
// console.log(r);

// let num = -5;
// let result = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// console.log(result);


// let marks = 35;

// let result = marks < 35 ? "Fail" :
//              marks === 35 ? "Just Passed" :
//              "Pass";

// console.log(result);

// let arr=[1,1,3,4,4,6,7,7,9,1]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             arr.splice(j,1)
//             j--;
//         }
//     }
// }
// console.log(arr);

// let arr=[1,1,3,4,4,6,7,7,9,1]
// for(let i=0;i<arr.length;i++){
//     let count=0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count=count+1;
//         }
//     }
//     if(count==1){
//         console.log(arr[i]);
//     }
// }

// let a=8
// let b=9
// let r = (a<b) ? console.log("a is smaller") : console.log("b is smaller");

// let arr = [4, 7, 2, 9,9, 7, 4, 6, 2, 8];
// for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//     }
//     if (count > 1) {
//         let ap = false;
//         for (let k = 0; k < i; k++) {
//             if (arr[k]===arr[i]) { 
//                     ap = true;
//             }
//         }
//         if (ap===false) {
//             console.log(arr[i]);
//         }
//     }
// }


// let arr = [10,150,120,12,36,8,1,45,44,26];
// for(let i=0; i<=arr.length;i++){
//     if(arr[i]%2==0 && arr[i]>10){
//         console.log(arr[i])
//     }
// }

// let arr=[12,23,43,3,4,5,45,54]
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>10){
//         count++
//     }
// }
// console.log(count)

// let arr=[112,34,45,56,34,43,111]
// let largest=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i]
//     }
// }
// console.log(largest)

// let arr=[110,34,45,56,34,43,99]
// let largest=-Infinity
// let sl=-Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         sl=largest
//         largest=arr[i]
//     }
//     else if (arr[i]>sl && arr[i]!==largest){
//         sl=arr[i]
//     }
// }
// console.log(sl)

// for (let i = 1; i <= 5; i++) {
//     process.stdout.write(i + "");
// }

// let arr=[12,34,54,34,54,32,45];
// for(let i=0;i<arr.length;i++){
//     let d=0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             d++;
//         }
//     }
//     if(d>1){
//         let found=false;
//         for(let k=0;k<i;k++){
//             if(arr[i]===arr[k]){
//                 found=true
//             }
//         }
//         if (found===false){
//             console.log(arr[i])
//         }
//     }
// }

// let arr = [4, 7, 2, 4, 9, 7, 2, 8, 9, 5];
// for(let i=0;i<arr.length;i++){
//     let d=0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             d++;                                                             
//         }
//     }
//     if (d==1){
//         console.log(arr[i])
//         break;
//     }
// }

//  let arr=[2,4,0,0,6,0,6,5]
// let index=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         arr[index]=arr[i]
//         index++;
//     }
// }
// while(index<arr.length){
//     arr[index]=0;
//     index++;
// }
// console.log(arr)

// let arr=[1,2,3,5,6,7,8,9]
// let n=9;
// let expexted=0
// let actual=0
// for(let i=0; i<=9;i++){
//     expexted+=i
// }
// for(let j=0;j<arr.length;j++){
//     actual+=arr[j]
// }
// console.log("missing no.",expexted-actual)

// let arr = [2, 7, 11, 15, 3, 6];
// let target = 9;
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==target){
//             console.log(arr[i],arr[j])
//         }
//     }
// }

// let arr = [3, 2, 4];
// let target = 6;
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]+arr[j]==target){
//             console.log(i,j)
//         }
//     }
// }

// let arr=[1,2,3,4];
// let check=false
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             check=true;
//             break;
//         }
//     }
//     if(check==true){
//         break;
//     }
// }
// console.log(check)

// let arr = [7, 1, 5, 3, 6, 4];
// let min=arr[0]
// let profit=0
// for(let i=0; i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i]
//     }
//     else if(arr[i]>min){
//         let c_profit=arr[i]-min
//         if(c_profit>profit){
//             profit=c_profit
//         }
//     }
// }
// console.log(profit)

// for(let i = 20; i >= 2; i--){
//     console.log(i);
// }

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];  
// let currentSum = arr[0];
// let maxSum = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(currentSum < 0){
//         currentSum = arr[i];
//     }
//     else{
//         currentSum = currentSum + arr[i];
//     }

//     if(currentSum > maxSum){
//         maxSum = currentSum;
//     }
// }

// console.log(maxSum);

// let arr = [2, 2, 1, 1, 1,1,1, 2, 2];
// let n=Math.floor(arr.length/2)
// for(let i=0;i<arr.length;i++){
//     let count=0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
//     if(count>n){
//     console.log(arr[i],count)
//     break;
//     }
// }


// let count = 5;
// while (count > 0) {
//   console.log(count);
//   count--;
// }

// let i = 1;
// while (i <= 5) {
//     let j = 1;
//     let row = "";
//     while (j <= i) {
//         row += "* ";
//         j++;
//     }
//     console.log(row);
//     i++;
// }

// let i = 5;

// while (i > 0) {
//     let j = 0;
//     let row = "";
//     while (j < i) {
//         row += "* ";
//         j++;
//     }
//     console.log(row);
//     i--;
// }

// let i=1
// while (i<=50){
//     console.log(i)
//     i++
// }


// let i=1324
// rev=0
// while(i>0){
//     let digit=i%10
//     i=Math.floor(i/10)
//     rev=rev*10+digit
// }
// console.log(rev)
// let i=11
// do{
//     console.log("hii")
//     i++
// }while(i<=10);


// let i=10;
// do{
// console.log(i);
// i --
// }while(i>=1);

// let num = 1234;
// let reverse = 0

// do{
// let last_digit = num%10;
// num = Math. floor(num/10);
// reverse = (reverse*10) + last_digit

// }while(num>0);
// console. log(reverse)
// function add(a,b){
//     return a+b;
// }
// console.log(add(4,5))

// function num(n){
//     if(n%2==0){
//         return 'Even'
//     }
//     else{
//         return 'Odd'
//     }
// }
// console.log(num(67))

// function avg(a,b,c){
//     return (a+b+c)/3
// }
// console.log(avg(2,2,2))

// function armstrong(n) {
//     let temp = n;
//     let sum = 0;
//     let digits = String(n).length;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += digit ** digits;
//         temp = Math.floor(temp / 10);
//     }

//     if (sum === n) {
//         return "Armstrong Number";
//     } else {
//         return "Not Armstrong Number";
//     }
// }

// console.log(armstrong(153));

// function factorial(n) {
//     let fact = 1;

//     while (n > 0) {
//         fact *= n;
//         n--;
//     }

//     return fact;
// }

// function isStrong(n) {
//     let temp = n;
//     let sum = 0;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += factorial(digit);
//         temp = Math.floor(temp / 10);
//     }

//     return sum === n;
// }

// console.log(isStrong(145));   // true
// console.log(isStrong(123));   // false
// console.log(isStrong(40585)); // true

// function strong(n){
//     let temp=n
//     let sum=0
//     while(temp>0){
//         let digit=temp%10
//         sum+=factorial(digit)
//         temp=Math.floor(temp/10)
//     }
//     if(n==sum){
//         return 'strong number';
//     }
//     else{
//         return 'meowww';
//     }
// }
// console.log(strong(145))


// function add(a,b){
//     return a+b;
// }
// // console.log(add(4,5))

// function Largest(arr){
//     let l=arr[0]
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]>l){
//             l=arr[i]
//         }
//     }
//     return l;
// }
// console.log(Largest([12,13,41,13]))


// function Largest(arr){
//     let l=arr[0]
//     let s_l=-Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>l){
//             s_l=l
//             l=arr[i]
//         }
//         else if(arr[i]>s_l && arr[i]<l){
//             s_l=arr[i]
//         }
//     }
//     return s_l;
// }
// console.log(Largest([120,13,41,40]))

 
// function missing(arr,n){
//     let sum=0
//     let sum_arr=0
//     for(i=1;i<=n;i++){
//         sum+=i
//     }
//     for(j=0;j<arr.length;j++){
//         sum_arr+=arr[j]
//     }
//     let miss_num=sum-sum_arr
//     return miss_num;
// }
// console.log(missing([1,3,4,5],5))

// function MaxOnes(arr){
//     let count=0;
//     let max=0;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==1){
//             count+=1
//                 if(count>max){
//                 max=count
//                 }
//         }
//         else{
//             count=0
//         }
//     }
//     return max;
// }
// console.log(MaxOnes([1,0,1,1,0,1]))

// function equilibriumIndex(arr) {
//     let totalSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         totalSum += arr[i];
//     }
//     let leftSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let rightSum= totalSum- leftSum-arr[i];
//         if (leftSum===rightSum) {
//             return i;
//         }
//         leftSum += arr[i];
//     }
//     return;
// }

// console.log(equilibriumIndex([1, 3, 5, 2, 2]));
// console.log(equilibriumIndex([1, 2, 3]));   
// console.log(equilibriumIndex([2, 0, 0, 2]));

// function firstunique(arr){
//     for(let i=0;i<arr.length;i++){
//         let num=true
//         for(let j=0;j<arr.length;j++){
//             if(i!=j && arr[i]==arr[j]){
//                 num=false;
//                 break;
//             }
//         }
//         if(num){
//             return arr[i]
//         }
//     }
//     return;
// }
// console.log(firstunique([4, 5, 1,2, 1, 4, 5]))

// function avg(a,b){
//     return (a+b)/2
// }
// console.log(avg(2,4))

// let age=20
// function DisplayAge(a){
//     return age
// }
// console.log(DisplayAge(20))
// console.log(age)

// let course="Javascript"
// function meow(course){
//     return course
// }
// console.log(meow(course))

// function check(avg){  
//     if (avg>40){      
//         return 'Pass' 
//     }                 
//     else{             
//         return 'Fail' 
//     }                 
// }                     
// console.log(check(45))

// function main(){
//     function helper(){
//         return ''
//     }
//     let res=helper()
//     return res
// }
// console.log(main())


// function studentSummary(name, m1, m2, m3, m4) {
//     function totalMarks() {
//         return m1 + m2 + m3 + m4;
//     }
//     function percentage() {
//         return totalMarks() / 4;
//     }
//     console.log("Student Name:", name);
//     console.log("Total Marks:", totalMarks());
//     console.log("Percentage:", percentage(), "%");
// }
// studentSummary("Achal", 85, 90, 78, 92);

// function mttt(){
//     var c=0
//     return c;
// }
// console.log(mttt())
// let v=c
// console.log(v)

// if(true){
// var y = 20;
// console.log(y);
// }
// // 20

// console.log(y);



// function frequency(arr) {
//     let visited = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (visited[i] == 1) {
//             continue;
//         }
//         let count = 1;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++;
//                 visited[j] = 1;
//             }
//         }

//         console.log(arr[i] + " occurs " + count + " times");
//     }
// }

// frequency([2, 3, 2, 5, 3, 2]);
// let name="d"
// let a=7
// function outer(){
//     let b=8
//     function inner(){
//         let c=9;
//         if (name=='d'){
//             console.log(c)
//             console.log(b)
//             console.log(a)
//             console.log(name)
//         }
//     }
//     inner()
// }
// outer()

// let arr=[1,0,3,0,4,5,0,6]
// for(let i=0; i<arr.length;i++){
//     if(arr[i]==0){
//         arr.pop(arr[i])
//         arr.push(0)
//     }
// }
// console.log(arr)

// function MoveZero(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) {
//             count++;
//         } 
//     }
//     for (let i = 0; i < count; i++) {
//         a  rr.splice(arr.indexOf(0), 1);
//         arr.push(0);
//     }
//     return arr;
// }

// console.log(MoveZero([1, 0, 3, 0, 4, 5, 0, 6]));

// let arr=["std1","std2","std3","std4","std5"]
// for (i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// const prompt = require("prompt-sync")();
// let fruits = [];

// for (let i = 0; i < 5; i++) {
//     fruits.push(prompt("Enter a fruit:"));
// }
// console.log(fruits);

// let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// let arr = [5, 10, 15];

// arr.push(20);
// console.log(arr.push(10));
// arr.unshift(0);
// console.log(arr);

// let arr = [100, 200, 300, 400, 500];

// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// let students = ["Aman", "Rahul", "Priya", "Karan", "Neha"];

// console.log(students.indexOf("Priya"));
// console.log(students.indexOf("Rohit")); 

let arr = [10, "Hello", true, null];

for (let i = 0; i < arr.length; i++) {
    console.log(typeof arr[i]);
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr[1][2]);

let arr2= [
    [10, 20, 30, 40],
    [50, 60, 70, 80]
];
console.log(arr2[0]);

let marks = [
    [80, 75, 90],
    [85, 88, 92],
    [70, 78, 82]
];
console.log(marks[1]);

const arr3= [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(arr3[2][2]);

let arr4 = [
    [1, 2, 3],
    [4, 5, 6]
];
arr4[1][1] = 100;
console.log(arr4);