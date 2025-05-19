const regexMatch = /\b(?:\d{4}[- ]?){3}\d{4}\b/;
const creditCardNumber1 = "This is a number 1234 5678 9012 3456";
const creditCardNumber2 = "This is another number 1234-5678-9012-3456";

console.log(creditCardNumber1.match(regexMatch)[0]);
console.log(creditCardNumber2.match(regexMatch)[0]);

/*
Explanation

1. \b - represents a word boundary
2. (?:\d{4}[- ]?){3} - matches 3 groups of 4 digits followed by an optional space or hyphen
3. \d{4} - matches the final group of 4 digits
4. \b - represents a word boundary
*/
