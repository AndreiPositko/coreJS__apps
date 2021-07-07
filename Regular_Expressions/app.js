let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; //Must start with
re = /world$/i; //Must ends with
re = /^hello$/i; //Must start and ends with
re = /h.llo/i; //Matches any ONE character
re = /h*llo/i; //Matches any character 0 ore more times
re = /gre?a?y/i; //Optional character
re = /gre?a?y\?/i; //Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; //Must be an a or e
re = /[GF]ray/; //Must be an G or F
re = /[^GF]ray/; //Match anything except a G or F
re = /[A-Z]ray/; //Match any uppercase letter
re = /[a-z]ray/; //Match any lowercase letter
re = /[A-Za-z]ray/; //Match any letter
re = /[0-9]ray/; //Match any digit
re = /[0-9][0-9]ray/; //Match any digit to see 10

// Braces {} - Quantifiers
re = /Hel{2}o/i; //Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; //Must occur between {m} and {m} amount of times
re = /Hel{2,}o/i; //Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/; //World character - alphanumeric or _
re = /\w+/; // + = one or more character - alphanumeric or _
re = /\W/; // Non-Word character - alphanumeric or _
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\s/; // Match any whitespace char
re = /\S/; // Match Non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
// let str = 'Hello, welcome to Hell';
// str = 'gray';
// str = '3x3x3x';
str = 'yx';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
   if (re.test(str)) {
      console.log(`${str} matched ${re.source}`);
   } else {
      console.log(`${str} doesn't match ${re.source}`);
   }
}

reTest(re, str);
