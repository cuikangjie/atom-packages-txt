var lib = require("./index");
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

module.exports.download = ({ url, name }) => {
  url = url.replace(/.git$/, "");

  let spinner = ora(`${name} download ~`).start();
  return new Promise((resolve, reject) => {
    require("simple-git")(lib.packagePath)
      // .outputHandler(function(command, stdout, stderr) {
      //
      // })
      .clone(url, (err, data) => {
        spinner.stop();
        if (err) {
          console.log(chalk.red(`${name}: git download fail! \n`));
        } else {
          console.log(chalk.white(`${name}: git download success!\n`));
        }
        if (err) reject(err);
        resolve();
      });
  });
};
