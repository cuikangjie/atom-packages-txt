var pkgs = require("../atom.pkg.json");
var git = require("./git");
var lib = require("./index");
var shell = require("./cmd");
var chalk = require("chalk");

let localPkgs = lib.readLocalPkgPage();

pkgs = pkgs.filter(item => {
  return localPkgs.filter(obj => item.name == obj.name).length == 0;
});
async function run(i) {
  let pkg = pkgs[i];

  if (i >= pkgs.length) {
    return;
  }

  i = i + 1;
  git
    .download(pkg)
    .then(() => {
      return shell
        .cmd(`cd ${lib.packagePath}\\${pkg.name} && yarn install`)
        .catch(err => {
          console.log(chalk.red(pkg.name, "初始化失败！"));
          shell.logger(err);
          return "";
        });
    })
    .then(() => {
      run(i);
    })
    .catch(err => {
      run(i);
      return "";
    });
}

if (pkgs.length === 0) {
  console.log(chalk.blue("所有package 都已下载"));
} else {
  console.log(chalk.yellow(`init ${pkgs.length} package ~`));
  run(0);
}
