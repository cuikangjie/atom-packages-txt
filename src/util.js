var os = require("os");

var fs = require("fs");

/**
 *  读取用户目录
 * @return {[type]} [description]
 */
module.exports.homedir = () => {
  return os.homedir();
};

module.exports.readDir = path => {
  return fs.readdirSync(path);
};

module.exports.existFile = path => {
  return fs.existsSync(path);
};

module.exports.readJson = path => {
  let str = fs.readFileSync(path, { encoding: "utf-8" });

  return JSON.parse(str);
};

module.exports.judgeUrl = url => {
  if (/^git\+https/.test(url)) {
    return url.replace(/^git\+/, "");
  }
  return url;
};

module.exports.writeFile = (path, content) => {
  fs.writeFileSync(path, content, { encoding: "utf-8" });
};
