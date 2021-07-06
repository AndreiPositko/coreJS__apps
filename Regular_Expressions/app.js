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

// String to match
let str = 'Hello';
str = 'Gray?';

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
