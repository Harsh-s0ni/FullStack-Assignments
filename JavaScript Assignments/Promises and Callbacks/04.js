const booksList = [
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

function hof(arr, callback) {
  let booksTitleList = arr.map((element) => {
    return element.name;
  });
  return callback(booksTitleList);
}
function logResult(arr) {
  arr.sort();
  console.log(arr);
}
hof(booksList, logResult);

/* 
OUTPUT: 
[
  'Disgrace',
  'Lord of the Rings',
  'Slavage the Bones',
  'The Great Gatsby',
  "The Tiger's Wife"
]
*/
