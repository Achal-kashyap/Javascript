WHILE LOOP
// Q1. Print numbers 1–10
{
    let i = 1;

    while (i <= 10) {
        console.log(i);
        i++;
    }
}

// Q2. Sum first 10 natural numbers
{
    let i = 1;
    let sum = 0;

    while (i <= 10) {
        sum += i;
        i++;
    }

    console.log("Sum:", sum);
}

// Q3. Multiplication table of a number
{
    const num = 5;
    let i = 1;

    while (i <= 10) {
        console.log(num + " x " + i + " = " + num * i);
        i++;
    }
}

// Q4. Count digits
{
    let num = 58372;
    let count = 0;

    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);

    console.log("Digits:", count);
}

// Q5. Reverse a number
{
    let num = 12345;
    let reverse = 0;

    while (num > 0) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    console.log("Reverse:", reverse);
}

// Q6. Sum of digits
{
    let num = 4729;
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    console.log("Digit sum:", sum);
}

// Q7. Divisible by 3 and 5, but not 7
{
    let i = 1;

    while (i <= 100) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
            console.log(i);
        }

        i++;
    }
}

// Q8. Factorial
{
    const num = 5;
    let i = 1;
    let factorial = 1;

    while (i <= num) {
        factorial *= i;
        i++;
    }

    console.log("Factorial:", factorial);
}

// Q9. Palindrome number
{
    const original = 121;
    let num = original;
    let reverse = 0;

    while (num > 0) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    console.log(original === reverse ? "Palindrome number" : "Not palindrome");
}

// Q10. Decimal to binary
{
    let num = 13;
    let binary = "";

    if (num === 0) {
        binary = "0";
    }

    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }

    console.log("Binary:", binary);
}

// ============================================================
