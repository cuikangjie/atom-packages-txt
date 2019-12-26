var { exec } = require("child_process");
var { promisify } = require("util");
var ora = require("ora");
var chalk = require("chalk");

var cmd = promisify(exec);

module.exports.logger = error => {
  console.log(
    chalk.blue(
      `\n---------------------  错误信息  ---------------------------\n`
    )
  );
  console.log(chalk.red(error.stdout || ""));
  console.log(chalk.red(error.stderr || ""));
  console.log(chalk.red(error.Error || ""));
};

module.exports.cmd = async (shell, ...args) => {
  var spinner = ora(`${shell} 执行中...`).start();
  const { stdout, stderr, error } = await cmd(shell, ...args).catch(error => {
    return { error };
  });



  spinner.succeed(`${shell} 执行完成`);

  return Promise.resolve(stdout)

  if (error) {
    return Promise.reject(error);
  }
};
