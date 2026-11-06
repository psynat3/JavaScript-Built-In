// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current date and time
const today = new Date();

// getMonth() is 0-based (January = 0), so add 1.
// padStart(2, "0") makes sure the month and day are always two digits.
const currentMonth = String(today.getMonth() + 1).padStart(2, "0");
const currentDay = String(today.getDate()).padStart(2, "0");
const currentYear = today.getFullYear();

// Build the message in the format "Today is MM/DD/YYYY"
const dateMessage = "Today is " + currentMonth + "/" + currentDay + "/" + currentYear;

// Show the message on the page
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Four separate starting values (all strings)
const valueOne = "42";        // numeric string
const valueTwo = "100";       // numeric string
const valueThree = "19.75";   // decimal string
const valueFour = "hello";    // cannot be converted to a number

// Convert each value with Number()
const convertedOne = Number(valueOne);
const convertedTwo = Number(valueTwo);
const convertedThree = Number(valueThree);
const convertedFour = Number(valueFour);

// Check each converted value with Number.isNaN()
const isNaNOne = Number.isNaN(convertedOne);
const isNaNTwo = Number.isNaN(convertedTwo);
const isNaNThree = Number.isNaN(convertedThree);
const isNaNFour = Number.isNaN(convertedFour);

// Check each converted value with Number.isInteger()
const isIntegerOne = Number.isInteger(convertedOne);
const isIntegerTwo = Number.isInteger(convertedTwo);
const isIntegerThree = Number.isInteger(convertedThree);
const isIntegerFour = Number.isInteger(convertedFour);

// Build one sentence for each value
const sentenceOne = "<p>Original: '" + valueOne + "' -> Converted: " + convertedOne +
  " -> isNaN: " + isNaNOne + " -> isInteger: " + isIntegerOne + "</p>";
const sentenceTwo = "<p>Original: '" + valueTwo + "' -> Converted: " + convertedTwo +
  " -> isNaN: " + isNaNTwo + " -> isInteger: " + isIntegerTwo + "</p>";
const sentenceThree = "<p>Original: '" + valueThree + "' -> Converted: " + convertedThree +
  " -> isNaN: " + isNaNThree + " -> isInteger: " + isIntegerThree + "</p>";
const sentenceFour = "<p>Original: '" + valueFour + "' -> Converted: " + convertedFour +
  " -> isNaN: " + isNaNFour + " -> isInteger: " + isIntegerFour + "</p>";

// ==========================
// Part 4: Conditionals (two if/else statements for the conversion section)
// ==========================

// if/else #1: is the "hello" value a valid number?
let messageFour = "";
if (isNaNFour) {
  messageFour = "<p class='note'>'" + valueFour + "' is not a valid number.</p>";
} else {
  messageFour = "<p class='note'>'" + valueFour + "' is a valid number.</p>";
}

// if/else #2: is the decimal value an integer?
let messageThree = "";
if (isIntegerThree) {
  messageThree = "<p class='note'>'" + valueThree + "' is an integer.</p>";
} else {
  messageThree = "<p class='note'>'" + valueThree + "' is a decimal, not an integer.</p>";
}

// Combine everything into ONE string and display it
const conversionResults = sentenceOne + sentenceTwo + sentenceThree + sentenceFour +
  messageThree + messageFour;
document.getElementById("numberConversionOutput").innerHTML = conversionResults;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Price calculator values
const itemPriceText = "24.99";   // starts as a string, so we parse it
const itemPrice = Number.parseFloat(itemPriceText);
const itemQuantity = 3;
const taxRate = 0.0975;          // 9.75% sales tax
const shippingCost = 5.5;

// Calculations
const subtotal = itemPrice * itemQuantity;           // multiplication
const taxAmount = subtotal * taxRate;                // multiplication
const totalCost = subtotal + taxAmount + shippingCost; // addition

// A large number to show off toLocaleString()
const yearlyVisitors = 1234567;

// Build the results using toFixed(2) and toLocaleString()
const mathResults =
  "<p>Item price (parsed with Number.parseFloat): $" + itemPrice.toFixed(2) + "</p>" +
  "<p>Quantity: " + itemQuantity + "</p>" +
  "<p>Subtotal: $" + subtotal.toFixed(2) + "</p>" +
  "<p>Tax (" + (taxRate * 100).toFixed(2) + "%): $" + taxAmount.toFixed(2) + "</p>" +
  "<p>Shipping: $" + shippingCost.toFixed(2) + "</p>" +
  "<p><strong>Total: $" + totalCost.toFixed(2) + "</strong></p>" +
  "<p>Yearly visitors (toLocaleString): " + yearlyVisitors.toLocaleString("en-US") + "</p>";

// ==========================
// Part 4: Conditionals (one more if/else for the math section)
// ==========================

// if/else #3: is the order big enough to get a message about it?
let orderMessage = "";
if (totalCost > 75) {
  orderMessage = "<p class='note'>Big order! Your total is over $75.</p>";
} else {
  orderMessage = "<p class='note'>Small order. Your total is $75 or less.</p>";
}

// Display the math results and the conditional message
document.getElementById("mathOutput").innerHTML = mathResults + orderMessage;