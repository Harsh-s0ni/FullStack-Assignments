// 1.
let totalValue =  2000;
let discountPercentage = 20;
let discountValue = (totalValue * discountPercentage) / 100;
console.log(
  "The final price after discount is: Rs." + (totalValue - discountValue)
);

// 2.
let username = "admin";
let password = "12345";
if (username == "admin" && password == "12345") {
  console.log("Login Successful");
}

// 3.
let rupee = 82;
let dollar = 1;
let rupeeToDollar = dollar / rupee;
let amount = 850;
console.log(amount + " INR is " + amount * rupeeToDollar + " USD ");

// 4.
let priceChild = 100;
let priceAdult = 150;
let priceSenior = 120;

let numberOfChild = 2;
let numberOfAdult = 1;
let numberOfSenior = 1;

let totalCost =
  numberOfChild * priceChild +
  numberOfAdult * priceAdult +
  numberOfSenior * priceSenior;
console.log("The total tickets price is: " + totalCost);

// 5.
let x = "standard";
switch (x) {
  case "standard":
    console.log("Standard delivery time: 3-5 days");
    break;
  case "express":
    console.log("Express delivery time: 1-2 days");
    break;
  case "overnight":
    console.log("Overnight delivery time: next day");
    break;
}

// 6.
let name = "Mithun";
let email = "mithun.s@pw.live";
let age = "21";
if (typeof name != "string") {
  console.log("Name Should be a string..");
}
if (typeof email != "string") {
  console.log("Email Should be a string..");
}
if (typeof age != "number") {
  console.log("Age Should be a number..");
}

// 7.
let shopingList = ["Bread", "Milk", "Eggs", "Butter"];
for (let i = 0; i < shopingList.length; i++) {
  console.log(shopingList[i]);
}

// 8.
let n = 0;
while (n <= 10) {
  console.log(n);
  n++;
}

// 9.
const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "string") {
    console.log(`Found The First String: ${arr[i]}`);
    break;
  }
}

// 10.
let Arr = [1, 2, -3, 5, -9, -8, -7, 7];
for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] > 0) {
    console.log(Arr[i]);
  }
}
