// 爬取丁香园的疫情数据
const superagent = require("superagent");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");
const url = `https://ncov.dxy.cn/ncovh5/view/pneumonia`;
A();
setInterval(() => {
  A();
}, 1000 * 60 * 60);
function A() {
  superagent
    .get(url)
    .then((res) => {
      // 获取的页面内容
      // console.log(res.text);
      // 2. 去解析html字符串从里面提取对应疫情数据
      const $ = cheerio.load(res.text);
      var $getAreaStat = $("#getAreaStat").html();
      var dataObj = {};
      // 使用eval进行操作
      eval($getAreaStat.replace(/window/g, "dataObj"));
      // console.log(dataObj);
      // 3. fs写数据到本地
      fs.writeFile(
        path.join(__dirname, "./data.json"),
        JSON.stringify(dataObj),
        (err) => {
          if (err) throw err;
          console.log("数据写入成功");
        }
      );
    })
    .catch((err) => {
      throw err;
    });
}
