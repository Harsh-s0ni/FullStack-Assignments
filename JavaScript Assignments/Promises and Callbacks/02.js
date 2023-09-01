function manipulateString(string, callback) {
  return callback(string.toUpperCase());
}
function logString(value) {
  console.log(`The manipulated string is: ${value}`);
}
manipulateString("hello, world!", logString);

/* 
OUTPUT: 
The manipulated string is: HELLO, WORLD!
*/
