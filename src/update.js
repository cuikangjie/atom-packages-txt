const get = require("./get");

var shell = require("./cmd");
var chalk = require("chalk");
var util = require("./util");
var readJson = require("./readJson");

var path = require("path");

async function run(i) {
  let pkgs = readJson();

  let list = await get();

  list = list.filter(item => {
    let i = item.indexOf("@");

    let name = item.slice(0, i);

    return (
      pkgs.filter(pkg => {
        return pkg.indexOf(name) >= 0;
      }).length === 0
    );
  });

  if (!list.length) {
    console.log(chalk.blue("所有package 都已下载"));
    return;
  }

  var jsonFilePath = path.resolve(__dirname, "../atom.pkg.txt");

  util.writeFile(jsonFilePath, list.join("\n"));

  let info = await shell.cmd("apm install ---packages-file " + jsonFilePath);

  console.log(info);
}

run();

// if (pkgs.length === 0) {
//   console.log(chalk.blue("所有package 都已下载"));
// } else {
//   console.log(chalk.yellow(`init ${pkgs.length} package ~`));
//   run(0);
// }
