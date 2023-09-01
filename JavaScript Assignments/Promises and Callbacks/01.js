const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function hof(callback, array) {
  let newArr = [];
  arr.forEach((value) => {
    newArr.push(callback(value));
  });
  return newArr;
}
function double(value) {
  return value * 2;
}

console.log(hof(double, arr));

/* 
OUTPUT: 
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
*/
