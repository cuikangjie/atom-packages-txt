const shell = require("./cmd");

function find(){
  return shell.cmd('apm list').then(list => {
    return list.replace(/├──|└──|\n/g, '&!&').split('&!&').filter(item => item&&item.indexOf('@') >= 0).map(item => item.trim());
  }).catch(() => []);
}

module.exports = find;
