var chalk = require("chalk");
var ora = require("ora");


module.exports.commit = () => {
  require("simple-git")()
    .add("./*")
    .commit(new Date().toLocaleTimeString() + " commit")
    .push("origin", "master", () => {
      console.log("\ngit 提交成功");
    });
};
