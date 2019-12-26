# atom-package

> 本项目 生成 atom package 配置文件，为解决不同电脑上重复下载 atom 依赖
> 依赖 apm 命令 PATH = (USER HOME)/AppData/Local/atom/bin

## 使用

:one: clone 本项目到本地（建议 fork 项目）

:two: npm install

:three: npm run commit 根据本地环境生成配置文件, 并提交 github 项目(apm list)

:four: npm run init 根据配置文件，配置本地环境(apm install --package-file)
