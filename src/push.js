var lib = require("./index");

const get = require("./get");

var git = require("./git");

var util = require("./util");
var path = require("path");
var beautify = require("js-beautify").js;

async function run() {
  let pkgs = await get();
  var jsonFilePath = path.resolve(__dirname, "../atom.pkg.json");

  util.writeFile(jsonFilePath, beautify(JSON.stringify(pkgs)));

  console.log("\natom package json 配置文件生成成功！");

  git.commit();
}

run();
