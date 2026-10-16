// DO-WHILE LOOP

// Q1. Print numbers 10 down to 1
{
    let i = 10;

    do {
        console.log(i);
        i--;
    } while (i >= 1);
}

// Q2. Print even numbers 1–20
{
    let i = 2;

    do {
        console.log(i);
        i += 2;
    } while (i <= 20);
}

// Q3. Sum first n natural numbers
{
    const n = 5;
    let i = 1;
    let sum = 0;

    if (n > 0) {
        do {
            sum += i;
            i++;
        } while (i <= n);
    }

    console.log("Sum:", sum);
}

// Q4. Product of digits
{
    let num = 234;
    let product = 1;

    do {
        product *= num % 10;
        num = Math.floor(num / 10);
    } while (num > 0);

    console.log("Product:", product);
}

// Q5. Find the leftmost digit
{
    let num = 58372;

    do {
        if (num < 10) {
            break;
        }

        num = Math.floor(num / 10);
    } while (true);

    console.log("First digit:", num);
}

// Q6. Calculate power without Math.pow() or **
{
    const base = 3;
    const exponent = 4;
    let result = 1;
    let i = 0;

    if (exponent > 0) {
        do {
            result *= base;
            i++;
        } while (i < exponent);
    }

    console.log("Power:", result);
}

// Q7. Multiples of 4 but not 8
{
    let i = 1;

    do {
        if (i % 4 === 0 && i % 8 !== 0) {
            console.log(i);
        }

        i++;
    } while (i <= 100);
}

// Q8. Palindrome number using do-while
{
    const original = 1221;
    let num = original;
    let reverse = 0;

    do {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    } while (num > 0);

    console.log(original === reverse ? "Palindrome number" : "Not palindrome");
}

// Q9. GCD using Euclidean algorithm
{
    let a = 48;
    let b = 18;

    do {
        let remainder = a % b;
        a = b;
        b = remainder;
    } while (b !== 0);

    console.log("GCD:", a);
}

// Q10. Decimal to binary, including zero
{
    let num = 13;
    let binary = "";

    if (num === 0) {
        binary = "0";
    } else {
        do {
            binary = (num % 2) + binary;
            num = Math.floor(num / 2);
        } while (num > 0);
    }

    console.log("Binary:", binary);
}