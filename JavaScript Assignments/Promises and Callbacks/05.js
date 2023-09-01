function greeting(name) {
  return new Promise((resolve, reject) => {
    resolve(`Hello, ${name}!`);
  });
}
console.log(greeting("Mithun"));

/* 
OUTPUT: 
Promise { 'Hello, Mithun!' }
*/
