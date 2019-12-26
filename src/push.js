var get = require("./get");

var git = require("./git");

var util = require("./util");
var path = require("path");
var readJson = require("./readJson");
var beautify = require("js-beautify").js;

async function run() {
  let list = readJson();

  let pkgs = await get();

  list = list.filter(item => {
    let i = item.indexOf("@");

    let name = item.slice(0, i);

    return (
      pkgs.filter(pkg => {
        return pkg.indexOf(name) >= 0;
      }).length === 0
    );
  });

  list = [].concat(list, pkgs);

  var jsonFilePath = path.resolve(__dirname, "../atom.pkg.json");

  util.writeFile(jsonFilePath, beautify(JSON.stringify(list)));

  console.log("\natom package json 配置文件生成成功！");

  git.commit();
}

run();
