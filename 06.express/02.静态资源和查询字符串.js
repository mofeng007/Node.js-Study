const express = require("express")
const path = require("path")

// 创建服务器的实例
const app = express()

/* 
    目前，服务器代码修改后必须要重启，
        我们希望有一种方式，可以自动监视代码的修改
        代码修改以后可以自动重启服务器

    要实现这个功能，我们需要安装一个模块 nodemon
        使用方式：
            1. 全局安装
                npm i nodemon -g
                yarn global add nodemon
                    - 同yarn进行全局安装时，默认yarn的目录并不在环境变量中
                    - 需要手动将路径添加到环境变量中
                - 启动：
                    nodemon  // 运行index.js
                    nodemon xxx // 运行指定的js

            2. 在项目中安装
                （开发依赖）
                npm i nodemon -D
                yarn add nodemon -D

                - 启动
                    npx nodemon

*/

// use() 中间件
/* 
    服务器中的代码，对于外部来说都是不可见的，
        所以我们写的html页面，浏览器无法直接访问
        如果希望浏览器可以访问，则需要将页面所在的目录设置静态资源目录
*/

// 设置static中间件后，浏览器访问时，会自动去public目录寻找是否有匹配的静态资源
app.use(express.static(path.resolve(__dirname, "./public")))

// 配置路由
app.get("/", (req, res) => {
    /* 
        希望用户返回根目录时，可以给用户返回一个网页
    */

    res.send("怎么办呢？")

    // res.send(`
    // <!doctype html>
    // <html>
    //     <head>
    //         <meta charset="utf-8">
    //         <title>这是一个网页</title>
    //     </head>
    //     <body>
    //         <h1>这是网页的标题</h1>
    //     </body>
    // </html>
    // `)
})

app.get("/login", (req, res) => {
    // 获取到用户输入的用户名和密码
    // req.query 表示查询字符串中的请求参数
    // console.log(req.query.username)
    // console.log(req.query.password)
    console.log("请求已经收到~~")

    // 验证用户输入的用户名和密码是否正确
    if(req.query.username === "sunwukong" && req.query.password === "123123"){
        res.send("<h1>登录成功！</h1>")
    }else{
        res.send("<h1>用户名或密码错误！</h1>")
    }

})

// 启动服务器
app.listen(3000, () => {
    console.log("服务器已起动~")
})
