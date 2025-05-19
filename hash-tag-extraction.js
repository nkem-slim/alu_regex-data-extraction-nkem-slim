const regexMatch = /#[a-z0-9_]+/g;
const text = "Here are some hashtags: #regex, #javascript, and #coding.";
const matches = text.match(regexMatch);
console.log(matches);

/*
Explanation

1. # - matches the literal hash symbol
2. [a-z0-9_]+ - matches one or more lowercase letters, digits, or underscores
3. g - global flag to find all matches
*/
