const regexMatch = /https?:\/\/[^\s]+/;

const url = "This is the first url https://www.example.com";
const url1 = "This is the second url https://subdomain.example.org/page";

console.log(url.match(regexMatch)[0]);
console.log(url1.match(regexMatch)[0]);
// the reason for getting the first argument is because the match returns an array of the url and another value, so we get the first since it's what we want

/*
Explanation
1. \b - represents a word boundary, ensuring the match starts at the beginning of a word
2. [A-Za-z0-9._%+-]+ - matches one or more characters that can be uppercase or lowercase letters (A-Z, a-z), digits (0-9), or special characters ., _, %, +, and -; this corresponds to the local part of the email.
3. @ - matches the literal "@" symbol, separating the local part from the domain.
4. [A-Za-z0-9.-]+ - matches one or more characters that can be uppercase or lowercase letters, digits, dots (.), or hyphens (-); this corresponds to the domain name.
5. . - matches a literal dot character, separating the domain from the top-level domain.
6. [A-Za-z]{2,} - matches two or more uppercase or lowercase letters, representing the top-level domain (e.g., com, org, uk).
7. \b - represents a word boundary, ensuring the match ends at the end of the word.
8. g (global flag) - allows matching all occurrences of the pattern in the input string, returning an array of all matched email addresses.

*/
