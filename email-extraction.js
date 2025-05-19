const regexMatch = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

// const userEmail = "Here's the first email address user@example.com";
const userString =
  "Here's the second email address firstname.lastname@company.co.uk";
const test = userString.match(regexMatch);
console.log(test); // this will return the value in an array

/*
Explanation
1. \b - represents a word boundary and is the start of the file to be extracted
2. [A-Za-z0-9._%+-]+ - matches one or more characters that can be lowercase and uppercase(A-Za-z), or digits(0-9), or special characters(._%+-)
3. @ - matches the "@" symbol, which is used to separate the local part from the domain extention
4. [A-Za-z0-9.-]+ - this one matches one or more characters that can be lowercase or uppercase(A-Z, a-z), or digits(0-9), or special characters . and -, and this comes before the "."
5. . - matches the literal dot
6. [A-Za-z]{2,} - this matches exactly two or more lowercase and uppercase characters(A-Za-z), and it's used to represent the domain extensions
7. \b - represents the end of the string to be extracted
*/
