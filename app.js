const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const data = require("./data.json");
app.use(express.static(path.join(__dirname, "")));
app.get("/api/data", (req, res) => {
  // fs.readFile(path.join(__dirname, "./data.json"), "utf8", (err, data) => {
  //   if (err) throw err;
  //   console.log(data);
  //   res.send(data);
  // });
  res.send(data);
});
app.listen(3000);
// 控制台提示输出
console.log("服务器启动成功");
