// console.log("jshjshjs");
// const data = require("./app");
// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-type": "applictionjson" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(3002);

// create the multiple files
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// console.log(__dirPath);
// for (let i = 0; i <= 2; i++) {
//   fs.writeFileSync(dirPath + `/hello${i}.txt`, "file create");
// }

// fs.readdir(dirPath, (err, files) => {
//   console.log(files);
// });

// const fs = require("fs");
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// }
// if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("invalid input ");
// }

// console.log(process.argv[1]);

// const app = require("./app");
// console.log(app);
// console.log(app.z());
// const fs = require("fs").writeFileSync;
// fs("abc.txt", "abc");

// const gs = require("fs").writeFileSync;
// gs("xyz.js", "abc");

// const http = require("http");

// http
//   .createServer((req, resp) => {
//     resp.write("hello manish");
//     resp.end();
//   })
//   .listen(3006);

// create the files in node js
// const fs = require("fs");
// const Path = require("path");
// const dirPath = Path.join(__dirname, "curd");
// const filePath = `${dirPath}/orange.txt`;

// fs.writeFileSync(filePath, "new files which a created in curd");

// read file in node js

// const fs = require("fs");
// const Path = require("path");
// const dirPath = Path.join(__dirname, "curd");
// const filePath = `${dirPath}/orange.txt`;
// buffer error remove with the help of "utf8"; while reading the file error come
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

// file mai update krna
// fs.appendFile(filePath, "this is the orange.txt", (err) => {
//   if (!err) console.log(" data is updated ");
// });

// rename the file
// fs.rename(filePath, `${dirPath}/test.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

// delete the file
// fs.unlinkSync(`${dirPath}/test.txt`);

// express in node js

// "" meaning is send the path in this

// const http = require("http");
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   console.log("hello", req.query.name);
//   res.send("check this is the home page," + req.query.name);
// });

//   res.send("this is the about page");
// app.get("/about", (req, res) => {
//   res.send([
//     { name: "route", email: "route@gmail.com" },
//     { name: "rajat", email: "rajat@gmail.com" },
//   ]);
// });

// app.listen(3200);

// learn connect html page nad 404 page

// const http = require("http");
// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "Public");
// app.get("", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });
// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });
// app.get("/help", (req, res) => {
//   res.sendFile(`${publicPath}/help.html`);
// });
// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/notfound.html`);
// });

// app.listen(3200);

// Middleware

const express = require("express");
const app = express();
const filterfun = require("./middleware");
const route = express.Router();

// this is and application level middleware
// const filterfun = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("Please provide your age");
//   } else if (req.query.age < 18) {
//     res.send("you can acess this page");
//   } else {
//     next();
//   }
// };

// app.use(filterfun);

app.get("", (req, res) => {
  res.send("this is the home page");
});

// 2 level middleware about and user "fiterfun"

app.get("/about", (req, res) => {
  res.send("this is the about page");
});

route.use(filterfun);  
// route single group
// apply middleware on sigle route
route.get("/user", (req, res) => {
  res.send("this is the user page");
});
route.get("/contact", (req, res) => {
  res.send("this the contact page");
});
app.use("/", route);

app.listen(3200);
