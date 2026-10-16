{
  let num = 25;
  if (num % 5 === 0) {
    console.log("A1: Divisible by 5");
  }
}

{
  let age = 65;
  if (age >= 60) {
    console.log("A2: Senior Citizen");
  }
}

{
  let num = 150;
  if (num > 100) {
    console.log("A3: Big Number");
  }
}
{
  let temperature = 5;
  if (temperature < 10) {
    console.log("A4: Very Cold");
  }
}
{
  let marks = 100;
  if (marks === 100) {
    console.log("A5: Perfect Score");
  }
}
{
  let num = -8;
  if (num < 0) {
    console.log("A6: Negative Number");
  }
}
{
  let input = "";
  if (input === "") {
    console.log("A7: No input provided");
  }
}
{
  let year = 1900;
  if (year % 100 === 0) {
    console.log("A8: Century Year");
  }
}
{
  let num = 12;
  if (num > 0 && num % 2 === 0) {
    console.log("A9: Positive Even Number");
  }
}
{
  let marks = 72;
  if (marks >= 35 && marks <= 100) {
    console.log("A10: Valid Marks");
  }
}

console.log("\n===== B] if...else Statement =====");
{
  let num = 7;
  if (num % 2 === 0) {
    console.log("B1: Even");
  } else {
    console.log("B1: Odd");
  }
}
{
  let age = 17;
  if (age >= 18) {
    console.log("B2: Eligible");
  } else {
    console.log("B2: Not Eligible");
  }
}
{
  let num = -3;
  if (num >= 0) {
    console.log("B3: Positive");
  } else {
    console.log("B3: Negative");
  }
}
{
  let marks = 34;
  if (marks >= 35) {
    console.log("B4: Passed");
  } else {
    console.log("B4: Failed");
  }
}
{
  let ch = "G";
  if (ch >= "A" && ch <= "Z") {
    console.log("B5: Uppercase letter");
  } else {
    console.log("B5: Not an uppercase letter");
  }
}
{
  let num = 10;
  if (num % 3 === 0) {
    console.log("B6: Divisible by 3");
  } else {
    console.log("B6: Not divisible by 3");
  }
}
{
  let password = "admin123";
  if (password === "admin123") {
    console.log("B7: Login Successful");
  } else {
    console.log("B7: Incorrect Password");
  }
}
{
  let year = 2024;
  if (year % 4 === 0) {
    console.log("B8: Leap Year");
  } else {
    console.log("B8: Not a Leap Year");
  }
}
{
  let a = 10, b = 20;
  if (a > b) {
    console.log("B9: " + a + " is greater");
  } else {
    console.log("B9: " + b + " is greater");
  }
}
{
  let num = 0;
  if (num > 0) {
    console.log("B10: Positive");
  } else {
    if (num < 0) {
      console.log("B10: Negative");
    } else {
      console.log("B10: Zero");
    }
  }
}


console.log("\n===== C] if...else if...else Statement =====");
{
  let month = 7;
  if (month === 12 || month === 1 || month === 2) {
    console.log("C1: Winter");
  } else if (month >= 3 && month <= 5) {
    console.log("C1: Summer");
  } else if (month >= 6 && month <= 8) {
    console.log("C1: Monsoon");
  } else if (month >= 9 && month <= 11) {
    console.log("C1: Autumn");
  } else {
    console.log("C1: Invalid month");
  }
}
{
  let income = 850000;
  let tax;
  if (income < 300000) {
    tax = 0;
  } else if (income <= 700000) {
    tax = income * 0.05;
  } else if (income <= 1000000) {
    tax = income * 0.10;
  } else {
    tax = income * 0.15;
  }
  console.log("C2: Tax amount = ₹" + tax);
}
{
  let score = 76;
  if (score >= 90) {
    console.log("C3: Outstanding");
  } else if (score >= 70) {
    console.log("C3: Good");
  } else if (score >= 40) {
    console.log("C3: Average");
  } else {
    console.log("C3: Needs Improvement");
  }
}
{
  let speed = 95;
  if (speed < 40) {
    console.log("C4: Slow");
  } else if (speed <= 80) {
    console.log("C4: Normal");
  } else {
    console.log("C4: Fast");
  }
}
{
  let height = 165;
  if (height < 150) {
    console.log("C5: Short");
  } else if (height <= 170) {
    console.log("C5: Average");
  } else {
    console.log("C5: Tall");
  }
}
{
  let day = 6;
  if (day >= 1 && day <= 5) {
    console.log("C6: Weekday");
  } else if (day === 6 || day === 7) {
    console.log("C6: Weekend");
  } else {
    console.log("C6: Invalid day");
  }
}
{
  let units = 200;
  let bill;
  if (units <= 50) {
    bill = units * 2;
  } else if (units <= 150) {
    bill = 50 * 2 + (units - 50) * 4;
  } else {
    bill = 50 * 2 + 100 * 4 + (units - 150) * 6;
  }
  console.log("C7: Total bill = ₹" + bill);
}
{
  let attendance = 82;
  if (attendance >= 90) {
    console.log("C8: Excellent");
  } else if (attendance >= 75) {
    console.log("C8: Good");
  } else if (attendance >= 50) {
    console.log("C8: Satisfactory");
  } else {
    console.log("C8: Poor");
  }
}
{
  let m1 = 78, m2 = 91, m3 = 85;
  if (m1 >= m2 && m1 >= m3) {
    console.log("C9: Highest mark = " + m1);
  } else if (m2 >= m1 && m2 >= m3) {
    console.log("C9: Highest mark = " + m2);
  } else {
    console.log("C9: Highest mark = " + m3);
  }
}
{
  let num = -6;
  if (num === 0) {
    console.log("C10: Zero");
  } else if (num > 0 && num % 2 === 0) {
    console.log("C10: Positive Even");
  } else if (num > 0 && num % 2 !== 0) {
    console.log("C10: Positive Odd");
  } else if (num < 0 && num % 2 === 0) {
    console.log("C10: Negative Even");
  } else {
    console.log("C10: Negative Odd");
  }
}
console.log("\n===== D] Nested if Statement =====");
{
  let num = 15;
  if (num > 10) {
    if (num % 3 === 0) {
      console.log("D1: Greater than 10 and divisible by 3");
    } else {
      console.log("D1: Greater than 10 but not divisible by 3");
    }
  } else {
    console.log("D1: Number is not greater than 10");
  }
}
{
  let age = 20;
  let hasVoterId = true;
  if (age >= 18) {
    if (hasVoterId) {
      console.log("D2: Can Vote");
    } else {
      console.log("D2: Cannot Vote (no voter ID)");
    }
  } else {
    console.log("D2: Cannot Vote (under 18)");
  }
}
{
  let score = 85;
  if (score >= 40) {
    if (score >= 80) {
      console.log("D3: Passed with Distinction");
    } else {
      console.log("D3: Passed");
    }
  } else {
    console.log("D3: Failed");
  }
}
{
  let correctPin = 1234;
  let enteredPin = 1234;
  let balance = 5000;
  let withdrawAmount = 2000;

  if (enteredPin === correctPin) {
    if (balance >= withdrawAmount) {
      balance -= withdrawAmount;
      console.log("D4: Withdrawal successful. Remaining balance = ₹" + balance);
    } else {
      console.log("D4: Insufficient balance");
    }
  } else {
    console.log("D4: Incorrect PIN");
  }
}
{
  let year = 2000;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("D5: " + year + " is a Leap Year");
      } else {
        console.log("D5: " + year + " is Not a Leap Year");
      }
    } else {
      console.log("D5: " + year + " is a Leap Year");
    }
  } else {
    console.log("D5: " + year + " is Not a Leap Year");
  }
}
{
  let email = "student@gmail.com";
  if (email.includes("@")) {
    if (email.endsWith(".com")) {
      if (email.length > 10) {
        console.log("D6: Valid Email");
      } else {
        console.log("D6: Email is too short");
      }
    } else {
      console.log("D6: Email must end with .com");
    }
  } else {
    console.log("D6: Email must contain @");
  }
}
{
  let cartTotal = 1500;
  let isPremium = true;
  let finalAmount = cartTotal;

  if (cartTotal >= 1000) {
    if (isPremium) {
      finalAmount = cartTotal - cartTotal * 0.20;
    } else {
      finalAmount = cartTotal - cartTotal * 0.10;
    }
  }
  console.log("D7: Final amount = ₹" + finalAmount);
}
{
  let num = 16;
  if (num > 0) {
    if (num % 2 === 0) {
      if (num % 4 === 0) {
        console.log("D8: Positive Even and Divisible by 4");
      } else {
        console.log("D8: Positive Even but not divisible by 4");
      }
    } else {
      console.log("D8: Positive but Odd");
    }
  } else {
    console.log("D8: Not a positive number");
  }
}
{
  let age = 25;
  let hasDegree = true;
  let experience = 3;

  if (age >= 21 && age <= 30) {
    if (hasDegree) {
      if (experience >= 2) {
        console.log("D9: Eligible for Interview");
      } else {
        console.log("D9: Not eligible (less than 2 years experience)");
      }
    } else {
      console.log("D9: Not eligible (no graduation degree)");
    }
  } else {
    console.log("D9: Not eligible (age not between 21 and 30)");
  }
}
{
  let isPresent = true;
  let internalMarks = 32;
  let externalMarks = 40;

  if (isPresent) {
    if (internalMarks >= 30) {
      if (externalMarks >= 35) {
        console.log("D10: Eligible for Final Exam");
      } else {
        console.log("D10: Not eligible (external marks below 35)");
      }
    } else {
      console.log("D10: Not eligible (internal marks below 30)");
    }
  } else {
    console.log("D10: Not eligible (student absent)");
  }
}
console.log("\n===== E] switch Statement =====");
{
  let month = 2;
  let days;
  switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      days = 31;
      break;
    case 4: case 6: case 9: case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
      days = null;
  }
  console.log("S1: " + (days ? "Days in month = " + days : "Invalid month"));
}
{
  let ch = "e".toLowerCase(); 
  switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("S2: Vowel");
      break;
    default:
      console.log("S2: Consonant");
  }
}
{
  let n = 3;
  switch (n) {
    case 1:
    case 2:
      console.log("S3: Winter");
      break;
    case 3:
    case 4:
      console.log("S3: Summer");
      break;
    default:
      console.log("S3: Invalid number (use 1 to 4)");
  }
}
{
  let marks = 68;
  switch (true) {
    case marks >= 75:
      console.log("S4: Distinction");
      break;
    case marks >= 60:
      console.log("S4: 1st class");
      break;
    case marks >= 50:
      console.log("S4: 2nd class");
      break;
    case marks >= 35:
      console.log("S4: 3rd class");
      break;
    default:
      console.log("S4: Failed");
  }
}
{
  let role = "admin";
  let action = "edit";

  switch (role) {
    case "admin":
      switch (action) {
        case "create":
          console.log("S5: Admin created a new record");
          break;
        case "edit":
          console.log("S5: Admin edited a record");
          break;
        case "delete":
          console.log("S5: Admin deleted a record");
          break;
        default:
          console.log("S5: Unknown admin action");
      }
      break;
    case "user":
      console.log("S5: Limited Access");
      break;
    default:
      console.log("S5: Unknown role");
  }
}

{
  let fruit = "mango";
  switch (fruit) {
    case "apple":
      console.log("S6: Apple is red");
      break;
    case "mango":
      console.log("S6: Mango is yellow");
      break;
    case "banana":
      console.log("S6: Banana is yellow");
      break;
    default:
      console.log("S6: Unknown fruit");
  }
}


{
  let values = [0, "0", false, null, undefined];

  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    switch (value) {
      case 0:
        console.log("S7: Number zero (0)");
        break;
      case "0":
        console.log('S7: String zero ("0")');
        break;
      case false:
        console.log("S7: Boolean false");
        break;
      case null:
        console.log("S7: null");
        break;
      case undefined:
        console.log("S7: undefined");
        break;
      default:
        console.log("S7: Something else");
    }
  }
}
{
  let a = 10, b = 0;
  let operator = "/";

  switch (operator) {
    case "+":
      console.log("S8: Result = " + (a + b));
      break;
    case "-":
      console.log("S8: Result = " + (a - b));
      break;
    case "*":
      console.log("S8: Result = " + (a * b));
      break;
    case "/":
      if (b === 0) {
        console.log("S8: Error - Division by zero is not allowed");
      } else {
        console.log("S8: Result = " + (a / b));
      }
      break;
    case "%":
      if (b === 0) {
        console.log("S8: Error - Modulus by zero is not allowed");
      } else {
        console.log("S8: Result = " + (a % b));
      }
      break;
    case "**":
      console.log("S8: Result = " + (a ** b));
      break;
    default:
      console.log("S8: Invalid operator");
  }
}
{
  let date = 15;
  switch (true) {
    case date >= 1 && date <= 10:
      console.log("S9: Beginning of the month");
      break;
    case date >= 11 && date <= 20:
      console.log("S9: Middle of the month");
      break;
    case date >= 21 && date <= 31:
      console.log("S9: End of the month");
      break;
    default:
      console.log("S9: Invalid date");
  }
}
{
  let category = "nonveg";
  let item = "biryani";
  let size = "full";
  let price = 0;
  let valid = true;

  switch (category) {
    case "veg":
      switch (item) {
        case "paneer":
          switch (size) {
            case "half": price = 120; break;
            case "full": price = 220; break;
            default: valid = false;
          }
          break;
        case "pizza":
          switch (size) {
            case "half": price = 150; break;
            case "full": price = 280; break;
            default: valid = false;
          }
          break;
        default:
          valid = false;
      }
      break;

    case "nonveg":
      switch (item) {
        case "biryani":
          switch (size) {
            case "half": price = 180; break;
            case "full": price = 320; break;
            default: valid = false;
          }
          break;
        case "chicken":
          switch (size) {
            case "half": price = 200; break;
            case "full": price = 360; break;
            default: valid = false;
          }
          break;
        default:
          valid = false;
      }
      break;

    default:
      valid = false;
  }

  if (valid) {
    console.log("S10: Order Summary -> Category: " + category +
                ", Item: " + item + ", Size: " + size +
                ", Price: ₹" + price);
  } else {
    console.log("S10: Invalid order selection");
  }
}
