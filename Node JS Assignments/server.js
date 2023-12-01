const http = require("http");

// 7

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write(
//       "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
//     );
//   }
//   res.end();
// });

// server.listen(5000);
// console.log("The HTTP Server is listening on port 5000");

//------------------------------------------------------>><<------------------------------------------------------

const event = require("events");
const eventEmitter = new event.EventEmitter();

// 8

// const eventEmitter = new event.EventEmitter();

// eventEmitter.on("subscribe", (arg) => {
//   console.log("Thanks For Subscribing to", arg);
// });

// eventEmitter.emit("subscribe", "College Wallah");

//------------------------------------------------------>><<------------------------------------------------------

// 9

// eventEmitter.on("subscribe");

// eventEmitter.emit("subscribe", "College Wallah");

//------------------------------------------------------>><<------------------------------------------------------

// 10

// console.log(
//   "The default maximum number of event listeners are: ",
//   eventEmitter.getMaxListeners()
// );
// eventEmitter.setMaxListeners(5);
// console.log(
//   "The updated maximum number of event listeners are: ",
//   eventEmitter.getMaxListeners()
// );
