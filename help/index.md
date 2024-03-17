# 使用gohugo搭建简易个人博客(mac教程)




1. 安装hugo：

   ```zsh
   brew install hugo
   ```

   可以用brew list hugo查看安装位置，可以用hugo version查看信息

2. 建立网站：先准备好一个文件夹，cd到里面，然后

   ```zsh
   hugo new site ruideSite(自己取名)
   ```

   可以看见里面多了一个ruideSite文件夹，里面一堆东西。

3. 主题：在https://themes.gohugo.io/中选择你喜欢的主题。点击download跳转到github页面，可以用git也可以直接下载，放到themes目录下。这里使用的LoveIt主题，访问官网https://hugoloveit.com/，点开Basics文章一步一步来。注意要修改配置文件，把官网给的配置代码复制过来，粘贴并覆盖到hugo.toml。

4. 创建文章：

   ```zsh
   hugo new posts/RuiIntroduction.md
   ```

   看到在content目录下多了一个posts文件夹，里面有一个RuiIntroduction.md文件。

5. 启动：

   ```zsh
   hugo serve --buildDrafts或者hugo serve
   ```

6. 执行：

   ```zsh
   hugo --theme=LoveIt --baseURL="https://zcralx.github.io/" --buildDrafts
   ```

   可以看到多了一个public目录

7. 托管到github：创建一个仓库，命名xxx.github.io。在终端cd到public目录下，一步一步git(命令在个人仓库里有提示)

   ```zsh
   git init
   git add .
   git commit -m "first commit"
   git remote add origin https://github.com/zcralx/zcralx.github.io.git
   git push -u origin main
   ```

   最后一句执行完后会让输入账号密码，账号就是github名字，密码是自己设置的令牌（现在不支持密码登录了），注意mac用户需要在钥匙串里把github密码改为令牌才能提交。

