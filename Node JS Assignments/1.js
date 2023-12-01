var fs = require("fs");

//1

fs.open("index.js", "w", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("File Created successfully");
});
