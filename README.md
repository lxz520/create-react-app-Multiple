 
### 安装nodemodules包
npm install 
### 运行
yarn start 
### 打包
yarn build

### 配置跨越 src/setupProxy.js 
### 常用插件配置在 config/webpack.config.js
### 特殊的配置在 package.json/babel/plugins
### 请求数据封装在src/utils/request.js

### 本框架支持react+mobx+多页面开发 



### 整体架构说明
### 1、config  中常用到的就是更改配置，一般搭好不需要改变
### 2、publick 存放模板文件index.html 以及一些公用的图片 ，注意:如果想要使用多项目图片都放在publick里需要配置一下webpack,（将webpack.config.js中ModuleScopePlugin命令注释掉即可），要不会报错，Relative imports outside of src/ are not supported.不允许引入路径外的资源。
### 3、scripts  项目运行或者打包依赖的指令，配置和不需要改变
### 4、src  项目页面编写的地方，下面可以存放页面以及公用组件


### 搭建过程中问题解决

###  1、如遇运行错误一直请求中如：`Starting the development server...`,可删除package.json中 devDependencies的 "@babel/plugin-transform-runtime": "^7.9.6",配置，原因是由于 babel@7 升级导致的 。目前项目不删除也可以正常运行。

### 2、如果打包后本地打开生成的******.html，文件报引入的文件找不到的话，需要在package.json    "private": true,后面增加 "homepage":".",即可解决。

 ### 3、打包生成的纯静态页面可以直接打开页面，如果涉及调接口需要把打包生成的静态页面放到静态资源服务器上。通过  域名 +打包生成的文件+***.html 例如：https://www.baidu.com/pageONe/pageOne.html


 ### 这个为配置多页面开发的第二个项目，各有优缺点，看自己使用方便 ，第一个项目git地址：https://github.com/lxz520/react-mobx 
