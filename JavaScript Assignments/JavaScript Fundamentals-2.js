// 1.
let userList = [
  "John",
  "Peter",
  "Mary",
  "Mithun",
  "Bob",
  "Nigger",
  "Sam",
  "Elon",
  "Mark",
];
function isUserPresent(x) {
  if (userList.indexOf(x) != -1) console.log(`Yes, ${x} is a valid user.`);
  else console.log(`No, ${x} is not a valid user.`);
}
isUserPresent("Someone");

// 2.
function calculateTotalCartValue() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
let result = calculateTotalCartValue(200, 45, 29, 320, 55);
console.log(`The total cart value is ${result}`);

// 3.
const students = [
  {
    name: "Mithun",
    marks: 95,
  },
  {
    name: "Prabir",
    marks: 75,
  },
  {
    name: "Alka",
    marks: 92,
  },
  {
    name: "Shivam",
    marks: 70,
  },
  {
    name: "Farman",
    marks: 99,
  },
];
function checkResults(x) {
  let index = -1;
  for (let y in students) {
    if (students[y].name == x) {
      index = y;
    }
  }
  if (index == -1) console.log(`Invalid User !!!`);
  else if (students[index].marks > 90) {
    console.log(`Congratulations ${x}! You have cleared the exam.`);
  } else if (students[index].marks <= 90) {
    console.log(`Sorry ! You have not cleared the exam.`);
  }
}
checkResults("Shivam");

// 4.
const products = [
  {
    name: "Laptop",
    price: 120000,
  },
  {
    name: "Mobile",
    price: 70000,
  },
  {
    name: "Laptop Bag",
    price: 20000,
  },
  {
    name: "Watch",
    price: 20000,
  },
  {
    name: "Mobile Charger",
    price: 1500,
  },
];
let arr = [];
for (let cost in products) {
  arr.push(products[cost].price);
}
let max = Math.max(...arr);
let min = Math.min(...arr);

for (let item in products) {
  if (products[item].price == max) {
    console.log(
      `The product with maximum amount is ${products[item].name} which is priced at Rs. ${max}`
    );
  }
  if (products[item].price == min) {
    console.log(
      `The product with minium amount is ${products[item].name} which is priced at Rs. ${min}`
    );
  }
}

// 5.
const guests = ["Anurg", "Mithun", "Alka", "Prabir", "Shivam", "Farman"];
console.log(guests.join(", "));

// 6.
const productDetails = {
  name: "Apple 2020 MacBook Air Laptop",
  price: 82000,
  color: "Grey",
  hardDisk: "256 GB",
};
console.log(`Below are the product details.`);
for (let item in productDetails) {
  console.log(`${item} : ${productDetails[item]}`);
}

// 7.
function generateOtp() {
  return Math.trunc(1000 + Math.random() * 9000);
}
console.log(`Here is your otp: ${generateOtp()}`);

// 8.
const eventDate = "2023-09-21";
function calculateRemainingDays(eventDate) {
  let targetDate = new Date(eventDate);
  targetDate = targetDate.getTime();
  var currDate = new Date();
  currDate = Date.now();
  return Math.trunc((targetDate - currDate) / (1000 * 3600 * 24));
}
console.log(calculateRemainingDays(eventDate));

// 9.
function uniqueCharacterCheck(x) {
  let len = x.length;
  let username = new Set();
  for (let i in x) {
    username.add(x[i]);
  }
  if (userList.length == len)
    console.log("The input contains unique characters");
  else console.log("The input string contains duplicates");
}
uniqueCharacterCheck("anurag");

// 10.
const sentence =
  "please please submit your assignment on time, your assignments are important ";
const res = wordCounter(sentence);

console.log(res);

function wordCounter(sentence) {
  const wordFrequencyMap = new Map();

  const words = sentence.split(" ");

  for (const word of words) {
    const cleanWord = word.toLowerCase().replace(",", "");

    if (cleanWord.length > 0) {
      wordFrequencyMap.set(
        cleanWord,
        (wordFrequencyMap.get(cleanWord) || 0) + 1
      );
    }
  }

  return wordFrequencyMap;
}
