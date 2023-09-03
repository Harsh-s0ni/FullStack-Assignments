const groceries = {
  bread: 2,
  milk: 5,
  butter: 10,
  cheese: 8,
  honey: 12,
};
const newObject = Object.keys(groceries).map((item) => {
  return {
    commodity: item,
    rupeePrice: groceries[item] * 80,
  };
});
const rupeeGroceries = {};
newObject.forEach((item) => {
  rupeeGroceries[item.commodity] = item.rupeePrice;
});
console.log(rupeeGroceries);

/* OUTPUT:
{ 
    bread: 160, 
    milk: 400,
    butter: 800,
    cheese: 640, 
    honey: 960
} */
