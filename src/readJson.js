var util = require("./util");
var path = require("path");

module.exports = () => {
  var jsonFilePath = path.resolve(__dirname, "../atom.pkg.json");

try {
  return util.readJson(jsonFilePath);
} catch (e) {
  return [];
} finally {

}

};
