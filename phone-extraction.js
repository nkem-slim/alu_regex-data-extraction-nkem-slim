// const regexMatch = /^\(?\d{3}\)?-\d{3}-\d{4}$/;
const regexMatch = /^\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/;
const phoneNumber = "(123) 456-7890";
const phoneNumber1 = "123-456-7890";
const phoneNumber2 = "123.456.7890";
console.log(phoneNumber.match(regexMatch)[0]);
console.log(phoneNumber1.match(regexMatch)[0]);
console.log(phoneNumber2.match(regexMatch)[0]);

/*
Explanation

1. ^ - represents the start of the string
2. \(? - matches an optional opening parenthesis ( for the area code
3. \d{3} - matches exactly 3 digits for the area code
4. \)? - matches an optional closing parenthesis ) for the area code
5. [ .-]? - matches an optional separator: a space, dot ., or hyphen -.
6. \d{3} - matches exactly 3 digits for the central office code
7. [ .-]? - matches an optional separator: a space, dot ., or hyphen -.
8. \d{4} - matches exactly 4 digits for the line number
9. $ - represents the end of the string
*/
