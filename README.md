# nextDemo
an simple demo of Next usage in Node

简介

Next.js是一个基于React的一个服务端渲染简约框架。它使用React语法，可以很好的实现代码的模块化，有利于代码的开发和维护。

Next.js带来了很多好的特性：

默认服务端渲染模式，以文件系统为基础的客户端路由

代码自动分隔使页面加载更快

（以页面为基础的）简洁的客户端路由

以webpack的热替换为基础的开发环境

使用React的JSX和ES6的module，模块化和维护更方便

可以运行在Express和其他Node.js的HTTP 服务器上

可以定制化专属的babel和webpack配置

启动方式
1.npm i 或 yarn
2.npm run dev 或 npm run clientdev

 "scripts": {
    "clientdev":"next",//客户端方式
    "dev": "node server.js"//服务端方式
  },

