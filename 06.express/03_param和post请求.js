const express = require("express")
const app = express()
const path = require("path")

// 配置静态资源的路径
// public http://localhost:3000/
app.use(express.static(path.resolve(__dirname, "public")))
// 引入解析请求体的中间件
app.use(express.urlencoded())

// 添加一个路由，可以读取get请求的参数
// /login -->  http://localhost:3000/login
app.get("/login", (req, res) => {
    // 获取用户发送的数据
    // 通过req.query来获取查询字符串中的数据
    if (req.query.username === "admin" && req.query.password === "123123") {
        res.send("<h1>欢迎您回来！登录成功</h1>")
    } else {
        res.send("<h1>用户名或密码错误！</h1>")
    }
})

app.post("/login", (req, res) => {
    // 通过req.body来获取post请求的参数（请求体中的参数）
    // 默认情况下express不会自动解析请求体，需要通过中间件来为其增加功能
    // console.log(req.body)
    const username = req.body.username
    const password = req.body.password

    if (username === "admin" && password === "123123") {
        res.send("<h1>登录成功</h1>")
    } else {
        res.send("<h1>登录失败</h1>")
    }
})

// get请求发送参数的第二种方式
// /hello/:id 表示当用户访问 /hello/xxx 时就会触发
// 在路径中以冒号命名的部分我们称为param，在get请求它可以被解析为请求参数
// param传参一般不会传递特别复杂的参数
// app.get("/hello/:name/:age/:gender", (req, res) => {
app.get("/hello/:name", (req, res) => {
    // 约定优于配置

    // 可以通过req.params属性来获取这些参数
    console.log(req.params)

    res.send("<h1>这是hello路由</h1>")
})

app.listen(3000, () => {
    console.log("服务器已经启动~")
})
