const pattern = /^(https?:\/\/(www.)?linkedin.com\/in\/)[\w\d_-]{5,29}[\w]$/;
let string = "https://www.linkedin.com/in/mithun-s";
console.log(`Given string is ${pattern.test(string)} for a valid LinkedIn URL`);

/*
OUTPUT:
Given string is true for a valid LinkedIn URL
*/
