const cmd = require("./cmd");

function find(){
  return cmd.cmd('apm list').then(list => {
    return list.replace(/├──|└──|\n/g, '&!&').split('&!&').filter(item => item&&item.indexOf('@') >= 0).map(item => item.trim());
  }).catch(() => []);
}

module.exports = find;
