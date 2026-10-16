// Q1. Count temperatures hotter than 30°C
{
    const temperatures = [28, 32, 25, 40, 18, 35];
    let count = 0;

    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > 30) {
            count++;
        }
    }

    console.log("Hot days:", count);
}

// Q2. Sum of all digits
{
    let num = 4729;
    let sum = 0;

    for (; num > 0; num = Math.floor(num / 10)) {
        sum += num % 10;
    }

    console.log("Digit sum:", sum);
}

// Q3. Numbers divisible by 3 and 5 but not 7
{
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
            console.log(i);
        }
    }
}

// Q4. Print only consonants from JavaScript
{
    const str = "JavaScript";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!"aeiouAEIOU".includes(str[i])) {
            result += str[i];
        }
    }

    console.log(result);
}

// Q5. Find second-largest distinct number
{
    const arr = [12, 45, 7, 23, 56, 89, 34];
    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i];
        }
    }

    console.log("Second largest:", second);
}

// Q6. Check perfect number
{
    const num = 28;
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    console.log(sum === num ? "Perfect number" : "Not perfect");
}

// Q7. Print powers of 2
{
    let value = 1;

    for (let i = 1; i <= 8; i++) {
        console.log(value);
        value *= 2;
    }
}

// Q8. First 20 Fibonacci numbers
{
    let a = 0;
    let b = 1;

    for (let i = 1; i <= 20; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

// Q9. Average scores and count above average
{
    const scores = [45, 78, 90, 32, 56, 88];
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    let average = total / scores.length;
    let count = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > average) {
            count++;
        }
    }

    console.log("Average:", average);
    console.log("Above average:", count);
}

// Q10. Decimal to binary
{
    let num = 13;
    let binary = "";

    if (num === 0) {
        binary = "0";
    }

    for (; num > 0; num = Math.floor(num / 2)) {
        binary = (num % 2) + binary;
    }

    console.log("Binary:", binary);
}

// Q1. Find first occurrence of 7
{
    const arr = [3, 5, 9, 7, 2, 7];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 7) {
            console.log("Index:", i);
            break;
        }
    }
}

// Q2. Password checker — maximum 5 attempts
{
    const correctPassword = "hello123";
    let attempts = 0;
    let access = false;

    while (attempts < 5) {
        let password = prompt("Enter password:");
        attempts++;

        if (password === correctPassword) {
            console.log("Access granted");
            access = true;
            break;
        }
    }

    if (!access) {
        console.log("Account locked");
    }
}

// Q3. Add numbers until sum exceeds 100
{
    let sum = 0;

    for (let i = 1; ; i++) {
        sum += i;

        if (sum > 100) {
            console.log("Last number added:", i);
            console.log("Final sum:", sum);
            break;
        }
    }
}

// Q4. Find first name starting with S
{
    const names = ["Aman", "Riya", "Sahil", "Simran"];

    for (let i = 0; i < names.length; i++) {
        if (names[i][0].toUpperCase() === "S") {
            console.log(names[i]);
            break;
        }
    }
}

// Q5. First perfect square greater than 20
{
    for (let i = 1; i <= 50; i++) {
        if (i > 20 && Number.isInteger(Math.sqrt(i))) {
            console.log(i);
            break;
        }
    }
}


// Q1. Print 1–30, skipping multiples of 4
{
    for (let i = 1; i <= 30; i++) {
        if (i % 4 === 0) {
            continue;
        }

        console.log(i);
    }
}

// Q2. Sum only positive numbers
{
    const arr = [-3, 5, -2, 8, 0, 4];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            continue;
        }

        sum += arr[i];
    }

    console.log("Positive sum:", sum);
}

// Q3. Print characters except spaces
{
    const str = "Hello World";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            continue;
        }

        console.log(str[i]);
    }
}

// Q4. Table of 6, skipping products divisible by 5
{
    for (let i = 1; i <= 12; i++) {
        let product = 6 * i;

        if (product % 5 === 0) {
            continue;
        }

        console.log("6 x " + i + " = " + product);
    }
}

// Q5. Print ages eligible to vote
{
    const ages = [12, 18, 25, 15, 30, 17, 22];

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < 18) {
            continue;
        }

        console.log(ages[i]);
    }
}


// Q1. 50 down to 1, divisible by 3 but not 9
{
    for (let i = 50; i >= 1; i--) {
        if (i % 3 === 0 && i % 9 !== 0) {
            console.log(i);
        }
    }
}

// Q2. Largest number less than 50, scanning backwards
{
    const arr = [12, 45, 7, 23, 56, 89, 34];
    let largest = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 50 && arr[i] > largest) {
            largest = arr[i];
        }
    }

    console.log("Largest below 50:", largest);
}

// Q3. Product of odd digits
{
    let num = 4729;
    let product = 1;
    let found = false;

    for (; num > 0; num = Math.floor(num / 10)) {
        let digit = num % 10;

        if (digit % 2 !== 0) {
            product *= digit;
            found = true;
        }
    }

    console.log("Product:", found ? product : 0);
}

// Q4. Consonants in reverse order
{
    const str = "Programming";
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (!"aeiouAEIOU".includes(str[i])) {
            result += str[i];
        }
    }

    console.log(result);
}

// Q5. First 15 Fibonacci numbers in reverse order
{
    const fib = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < 15; i++) {
        fib[i] = a;
        let next = a + b;
        a = b;
        b = next;
    }

    for (let i = 14; i >= 0; i--) {
        console.log(fib[i]);
    }
}

// Q6. Palindrome number without converting to string
{
    const num = 1221;
    let temp = num;
    let reverse = 0;

    while (temp > 0) {
        reverse = reverse * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }

    console.log(num === reverse ? "Palindrome" : "Not palindrome");
}

// Q7. Count temperatures below 30°C
{
    const temperatures = [32, 28, 41, 19, 35, 27, 38];
    let count = 0;

    for (let i = temperatures.length - 1; i >= 0; i--) {
        if (temperatures[i] < 30) {
            count++;
        }
    }

    console.log("Cold days:", count);
}

// Q8. Binary digits in reverse order
{
    let num = 13;
    let binary = "";

    if (num === 0) {
        binary = "0";
    }

    for (; num > 0; num = Math.floor(num / 2)) {
        binary += num % 2;
    }

    console.log(binary);
}

// Q9. From the end, find first score greater than 80
{
    const scores = [90, 85, 70, 95, 60, 88, 75];

    for (let i = scores.length - 1; i >= 0; i--) {
        if (scores[i] > 80) {
            console.log("Score:", scores[i], "Index:", i);
            break;
        }
    }
}

// Q10. Print 40 down to 1, skipping perfect squares
{
    for (let i = 40; i >= 1; i--) {
        if (Number.isInteger(Math.sqrt(i))) {
            continue;
        }

        console.log(i);
    }
}

// Q1. Right-triangle consecutive numbers
{
    let num = 1;

    for (let row = 1; row <= 4; row++) {
        let line = "";

        for (let col = 1; col <= row; col++) {
            line += num + " ";
            num++;
        }

        console.log(line.trim());
    }
}

// Q2. Alphabet triangle
{
    for (let row = 1; row <= 5; row++) {
        let line = "";

        for (let col = 0; col < row; col++) {
            line += String.fromCharCode(65 + col) + " ";
        }

        console.log(line.trim());
    }
}

// Q3. Hollow right-triangle star pattern
{
    for (let row = 1; row <= 5; row++) {
        let line = "";

        for (let col = 1; col <= row; col++) {
            if (row === 1 || row === 5 || col === 1 || col === row) {
                line += "* ";
            } else {
                line += "  ";
            }
        }

        console.log(line.trimEnd());
    }
}

// Q4. Reverse right-angle star pattern
{
    for (let row = 5; row >= 1; row--) {
        let line = "";

        for (let col = 1; col <= row; col++) {
            line += "*";
        }

        console.log(line);
    }
}

// Q5. Reverse rows with row number repeated
{
    for (let row = 5; row >= 1; row--) {
        let line = "";

        for (let col = 1; col <= row; col++) {
            line += row + " ";
        }

        console.log(line.trim());
    }
}

// Q6. Reverse right-angle number pattern
{
    for (let row = 5; row >= 1; row--) {
        let line = "";

        for (let col = 1; col <= row; col++) {
            line += col + " ";
        }

        console.log(line.trim());
    }
}

// Q7. Reverse triangle of consecutive numbers
{
    let num = 15;

    for (let row = 5; row >= 1; row--) {
        let line = "";

        for (let col = 1; col <= row; col++) {
            line += num + " ";
            num--;
        }

        console.log(line.trim());
    }
}

// Q8. Reverse hollow right-angle star pattern
{
    for (let row = 5; row >= 1; row--) {
        let line = "";

        for (let col = 1; col <= row; col++) {
            if (row === 5 || col === 1 || col === row) {
                line += "* ";
            } else {
                line += "  ";
            }
        }

        console.log(line.trimEnd());
    }
}

// Q9. 5x5 stars, empty main diagonal
{
    for (let row = 1; row <= 5; row++) {
        let line = "";

        for (let col = 1; col <= 5; col++) {
            if (row === col) {
                line += "  ";
            } else {
                line += "* ";
            }
        }

        console.log(line);
    }
}

// Q10. Tables from 1 to 5, only even products
{
    for (let n = 1; n <= 5; n++) {
        let line = "Table " + n + ": ";

        for (let j = 1; j <= 10; j++) {
            let product = n * j;

            if (product % 2 === 0) {
                line += product + " ";
            }
        }

        console.log(line.trim());
    }
}

// Q11. Matrix of absolute row-column differences
{
    const n = 4;

    for (let row = 0; row < n; row++) {
        let line = "";

        for (let col = 0; col < n; col++) {
            line += Math.abs(row - col) + " ";
        }

        console.log(line.trim());
    }
}

// Q12. Pairs i < j where i + j is a perfect square
{
    for (let i = 1; i <= 10; i++) {
        for (let j = i + 1; j <= 10; j++) {
            let sum = i + j;

            if (Number.isInteger(Math.sqrt(sum))) {
                console.log("(" + i + ", " + j + ")");
            }
        }
    }
}

// Q13. Diamond number pattern
{
    for (let row = 1; row <= 5; row++) {
        let line = " ".repeat(5 - row);

        for (let col = 1; col <= row; col++) {
            line += col;
        }

        for (let col = row - 1; col >= 1; col--) {
            line += col;
        }

        console.log(line);
    }

    for (let row = 4; row >= 1; row--) {
        let line = " ".repeat(5 - row);

        for (let col = 1; col <= row; col++) {
            line += col;
        }

        for (let col = row - 1; col >= 1; col--) {
            line += col;
        }

        console.log(line);
    }
}

// Q14. 6x6 spiral matrix
{
    const n = 6;
    const matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let value = 1;

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = value++;
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = value++;
        }
        right--;

        for (let col = right; col >= left && top <= bottom; col--) {
            matrix[bottom][col] = value++;
        }
        bottom--;

        for (let row = bottom; row >= top && left <= right; row--) {
            matrix[row][left] = value++;
        }
        left++;
    }

    for (let row = 0; row < n; row++) {
        let line = "";

        for (let col = 0; col < n; col++) {
            line += String(matrix[row][col]).padStart(2, " ") + " ";
        }

        console.log(line);
    }
}

// Q15. Pascal's Triangle up to 8 rows
{
    for (let row = 0; row < 8; row++) {
        let line = " ".repeat(7 - row);
        let value = 1;

        for (let col = 0; col <= row; col++) {
            line += value + " ";
            value = value * (row - col) / (col + 1);
        }

        console.log(line);
    }
}

// Q16. Border 1, inner 0; row + column divisible by 3 => 2
{
    const rows = 5;
    const cols = 6;

    for (let row = 1; row <= rows; row++) {
        let line = "";

        for (let col = 1; col <= cols; col++) {
            let value;

            if (row === 1 || row === rows || col === 1 || col === cols) {
                value = 1;
            } else {
                value = 0;
            }

            if ((row + col) % 3 === 0) {
                value = 2;
            }

            line += value + " ";
        }

        console.log(line.trim());
    }
}
