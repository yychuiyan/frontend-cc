#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

# 拷贝目录和文件
cp -r ../../../.github ./

git init
git add -A
git commit -m 'deploy'

# 命令：npm run deploy
# 如果你想要部署发布到 https://USERNAME.github.io/<REPO>
# git push -f git@github.com:zhanghaoju/vblogs.git master:gh-pages

# 部署到服务器
git push -f git@121.5.150.123:/home/www/website/vblogs.git master

cd -
