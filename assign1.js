
// Q1 temperatures 
{
    let temperatures = [28, 32, 25, 40, 18, 35];
    let count = 0;

    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > 30) count++;
    }
    console.log(count);
}

// Q2. Sum 
{
    let num = 4729;
    let sum = 0;

    for (; num > 0; num = Math.floor(num / 10)) {
        sum += num % 10;
    }
    console.log(sum);
}

// Q3. Divisible by 3 and 5 but not 7
{
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
            console.log(i);
        }
    }
}

// Q4. Consonants 
{
    let str = "JavaScript";
    let consonants = "";

    for (let i = 0; i < str.length; i++) {
        if (!"aeiou".includes(str[i].toLowerCase())) {
            consonants += str[i];
        }
    }
    console.log(consonants);
}

// Q5. Second-largest distinct number
{
    let arr = [10, 40, 20, 50, 30];
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    console.log(secondLargest);
}

// Q6. Perfect number
{
    let n = 28;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    console.log(sum === n ? "Perfect number" : "Not a perfect number");
}

// Q7. Powers of 2
{
    let value = 1;

    for (let i = 1; i <= 8; i++) {
        console.log(value);
        value *= 2;
    }
}

// Q8. First 20 Fibonacci numbers
{
    let a = 0, b = 1;

    for (let i = 1; i <= 20; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

// Q9. Average score and count above average
{
    let scores = [45, 78, 90, 32, 56, 88];
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    let average = sum / scores.length;
    let count = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > average) count++;
    }

    console.log("Average:", average);
    console.log("Above average:", count);
}

// Q10. Decimal to binary without toString(2)
{
    let decimal = 13;
    let binary = "";

    if (decimal === 0) binary = "0";

    for (; decimal > 0; decimal = Math.floor(decimal / 2)) {
        binary = (decimal % 2) + binary;
    }
    console.log(binary);
}



// Q1. Find first occurrence of 7
{
    let arr = [2, 4, 7, 9, 7];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 7) {
            console.log("Index:", i);
            break;
        }
    }
}

// Q2. Password checker (run in browser)
{
    let correctPassword = "abc123";
    let access = false;

    for (let i = 1; i <= 5; i++) {
        let password = prompt("Enter password:");

        if (password === correctPassword) {
            console.log("Access granted");
            access = true;
            break;
        }
    }

    if (!access) console.log("Account locked");
}

// Q3. Add numbers until sum exceeds 100
{
    let sum = 0;

    for (let i = 1; ; i++) {
        sum += i;

        if (sum > 100) {
            console.log("Last number added:", i);
            break;
        }
    }
}

// Q4. First name starting with S
{
    let names = ["Amit", "Rahul", "Sahil", "Sneha"];

    for (let i = 0; i < names.length; i++) {
        if (names[i][0].toLowerCase() === "s") {
            console.log(names[i]);
            break;
        }
    }
}

// Q5. Stop at first perfect square greater than 20
{
    for (let i = 1; i <= 50; i++) {
        if (Number.isInteger(Math.sqrt(i)) && i > 20) {
            break;
        }
        console.log(i);
    }
}


// Q1. Skip multiples of 4
{
    for (let i = 1; i <= 30; i++) {
        if (i % 4 === 0) continue;
        console.log(i);
    }
}

// Q2. Sum positive numbers only
{
    let arr = [10, -5, 20, -3, 7, -8];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) continue;
        sum += arr[i];
    }
    console.log(sum);
}

// Q3. Print characters except spaces
{
    let str = "Hello World";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") continue;
        console.log(str[i]);
    }
}

// Q4. Table of 6, skip products divisible by 5
{
    for (let i = 1; i <= 12; i++) {
        let product = 6 * i;

        if (product % 5 === 0) continue;
        console.log("6 x", i, "=", product);
    }
}

// Q5. Voting-eligible ages
{
    let ages = [12, 18, 25, 15, 30, 17, 22];

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < 18) continue;
        console.log(ages[i]);
    }
}

// Q1. Divisible by 3 but not 9
{
    for (let i = 50; i >= 1; i--) {
        if (i % 3 === 0 && i % 9 !== 0) {
            console.log(i);
        }
    }
}

// Q2. Largest number less than 50
{
    let arr = [12, 45, 7, 23, 56, 89, 34];
    let largest = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 50 && arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest);
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
    console.log(found ? product : 0);
}

// Q4. Consonants in reverse order
{
    let str = "Programming";
    let consonants = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (!"aeiou".includes(str[i].toLowerCase())) {
            consonants += str[i];
        }
    }
    console.log(consonants);
}

// Q5. First 15 Fibonacci numbers in reverse order
{
    for (let i = 14; i >= 0; i--) {
        let a = 0, b = 1;

        for (let j = 0; j < i; j++) {
            let next = a + b;
            a = b;
            b = next;
        }
        console.log(a);
    }
}

// Q6. Palindrome without converting to string
{
    let num = 12321;
    let original = num;
    let reversed = 0;

    for (; num > 0; num = Math.floor(num / 10)) {
        reversed = reversed * 10 + num % 10;
    }

    console.log(original === reversed ? "Palindrome" : "Not palindrome");
}

// Q7. Count temperatures below 30°C
{
    let temperatures = [32, 28, 41, 19, 35, 27, 38];
    let count = 0;

    for (let i = temperatures.length - 1; i >= 0; i--) {
        if (temperatures[i] < 30) count++;
    }
    console.log(count);
}

// Q8. Binary digits in reverse order
{
    let decimal = 13;
    let binary = "";

    if (decimal === 0) binary = "0";

    for (; decimal > 0; decimal = Math.floor(decimal / 2)) {
        binary += decimal % 2;
    }
    console.log(binary);
}

// Q9. Last score greater than 80
{
    let scores = [90, 85, 70, 95, 60, 88, 75];

    for (let i = scores.length - 1; i >= 0; i--) {
        if (scores[i] > 80) {
            console.log("Score:", scores[i]);
            console.log("Index:", i);
            break;
        }
    }
}

// Q10. Skip perfect squares from 40 to 1
{
    for (let i = 40; i >= 1; i--) {
        if (Number.isInteger(Math.sqrt(i))) continue;
        console.log(i);
    }
}

// Q1. Right-triangle number pattern
{
    let num = 1;

    for (let i = 1; i <= 4; i++) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += num + " ";
            num++;
        }
        console.log(line.trim());
    }
}

// Q2. Right-triangle alphabet pattern
{
    for (let i = 1; i <= 5; i++) {
        let line = "";

        for (let j = 0; j < i; j++) {
            line += String.fromCharCode(65 + j) + " ";
        }
        console.log(line.trim());
    }
}

// Q3. Hollow right-triangle star pattern
{
    for (let i = 1; i <= 5; i++) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            if (j === 1 || j === i || i === 5) {
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
    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += "*";
        }
        console.log(line);
    }
}

// Q5. Reverse pattern with repeated row number
{
    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += i + " ";
        }
        console.log(line.trim());
    }
}

// Q6. Reverse right-angle number pattern
{
    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += j + " ";
        }
        console.log(line.trim());
    }
}

// Q7. Reverse triangle of consecutive numbers
{
    let num = 15;

    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += String(num).padStart(2, " ") + " ";
            num--;
        }
        console.log(line.trimEnd());
    }
}

// Q8. Reverse hollow star pattern
{
    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            if (i === 5 || j === 1 || j === i) {
                line += "* ";
            } else {
                line += "  ";
            }
        }
        console.log(line.trimEnd());
    }
}

// Q9. 5x5 stars, omit main diagonal
{
    for (let i = 1; i <= 5; i++) {
        let line = "";

        for (let j = 1; j <= 5; j++) {
            if (i === j) line += "  ";
            else line += "* ";
        }
        console.log(line);
    }
}

// Q10. Multiplication tables 1 to 5, even products only
{
    for (let i = 1; i <= 5; i++) {
        console.log("Table of", i);

        for (let j = 1; j <= 10; j++) {
            let product = i * j;

            if (product % 2 === 0) {
                console.log(i + " x " + j + " = " + product);
            }
        }
    }
}

// Q11. Matrix of absolute differences
{
    let n = 5;

    for (let i = 0; i < n; i++) {
        let line = "";

        for (let j = 0; j < n; j++) {
            line += Math.abs(i - j) + " ";
        }
        console.log(line.trim());
    }
}

// Q12. Pairs whose sum is a perfect square
{
    for (let i = 1; i < 10; i++) {
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
    let n = 5;

    for (let i = 1; i <= n; i++) {
        let line = "";

        for (let s = 1; s <= n - i; s++) line += " ";
        for (let j = 1; j <= i; j++) line += j;
        for (let j = i - 1; j >= 1; j--) line += j;

        console.log(line);
    }

    for (let i = n - 1; i >= 1; i--) {
        let line = "";

        for (let s = 1; s <= n - i; s++) line += " ";
        for (let j = 1; j <= i; j++) line += j;
        for (let j = i - 1; j >= 1; j--) line += j;

        console.log(line);
    }
}

// Q14. 6x6 clockwise spiral matrix
{
    let n = 6;
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];

        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }

    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let value = 1;

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) {
            matrix[top][j] = value++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = value++;
        }
        right--;

        for (let j = right; j >= left; j--) {
            matrix[bottom][j] = value++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = value++;
        }
        left++;
    }

    for (let i = 0; i < n; i++) {
        let line = "";

        for (let j = 0; j < n; j++) {
            line += String(matrix[i][j]).padStart(2, " ") + " ";
        }
        console.log(line);
    }
}

// Q16. Pascal's Triangle, 8 rows, without arrays
{
    for (let i = 0; i < 8; i++) {
        let line = "";

        for (let s = 0; s < 7 - i; s++) {
            line += " ";
        }

        for (let j = 0; j <= i; j++) {
            let coefficient = 1;

            for (let k = 1; k <= j; k++) {
                coefficient = coefficient * (i - k + 1) / k;
            }

            line += coefficient + " ";
        }
        console.log(line);
    }
}

// Q17. Border 1, inner 0, sum of indices divisible by 3 gets 2
{
    let rows = 5;
    let cols = 6;

    for (let i = 0; i < rows; i++) {
        let line = "";

        for (let j = 0; j < cols; j++) {
            let value;

            if ((i + j) % 3 === 0) {
                value = 2;
            } else if (
                i === 0 || i === rows - 1 ||
                j === 0 || j === cols - 1
            ) {
                value = 1;
            } else {
                value = 0;
            }

            line += value + " ";
        }
        console.log(line.trim());
    }
}