const books = [
  {
    name: "Lord of the Rings",
    author: "John Ronald Reuel Tolkien",
    year: 1954,
  },
  {
    name: "The Great Gatsby",
    author: "F-Scott Fitzerald",
    year: 1925,
  },
  {
    name: "Disgrace",
    author: "JM Coetzee",
    year: 1999,
  },
  {
    name: "Slavage the Bones",
    author: "Jesmyn Ward",
    year: 2012,
  },
  {
    name: "The Tiger's Wife",
    author: "Tea Obreht",
    year: 2011,
  },
];
const remaining = [];
const before2010 = books.filter((item) => {
  if (item.year < 2010) {
    return item;
  } else {
    item.author = item.author.toUpperCase();
    remaining.push(item);
  }
});
console.log(remaining);

/*
OUTPUT:
[
  { name: 'Slavage the Bones', author: 'JESMYN WARD', year: 2012 },
  { name: "The Tiger's Wife", author: 'TEA OBREHT', year: 2011 }
]
*/
