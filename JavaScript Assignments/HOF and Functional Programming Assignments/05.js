const pattern = /^(https?:\/\/)[\w\d\W]+\.[a-zA-Z]+$/;
let string = "http://facebook#0.co.uk";
console.log(`Given string is ${pattern.test(string)} for a Valid URL`);
