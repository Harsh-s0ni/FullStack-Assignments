function ageInDays(object, callback) {
  let fullName = object.firstName + " " + object.lastName;
  let ageInDays = object.age * 365;
  return callback(fullName, ageInDays);
}
function logResult(name, age) {
  console.log(
    `The person's full name is ${name}, and their age in days is ${age}.`
  );
}
const person = {
  firstName: "Mithun",
  lastName: "S",
  age: 20,
};
ageInDays(person, logResult);

/* 
OUTPUT: 
The person's full name is Mithun S, and their age in days is 7300.
*/
