# vue
webpack 4.29.6+vue 2.6.8组件化项目
备注：webpack参考文档：https://www.webpackjs.com
vue参考文档：https://cn.vuejs.org/
1.构建环境
   在Git bash上依次输入一下命令：
mkdir test  //创建一个空文件
cd text
npm init  //初始化项目
mkdir app  //创建项目目录
cd app
mkdir js
mkdir css
mkdir views
touch webpack.config.js
2.编写webpack配置文件，根据项目的需要，安装一下依赖包
$ npm install --save-dev webpack-dev-server
$ npm install html-loader -D   //开发环境下
$ npm install vue-loader style-loader css-loader sass-loader -D
npm install vue
npm install vue-router
npm install webpack -D





