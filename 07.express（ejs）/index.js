const express = require("express")
const path = require("path")
const app = express()

const STUDENT_ARR = [
    {
        name: "孙悟空",
        age: 18,
        gender: "男",
        address: "火锅山"
    },
    {
        name: "猪八戒",
        age: 28,
        gender: "男",
        address: "高老庄"
    },
    {
        name: "沙和尚",
        age: 38,
        gender: "男",
        address: "流沙河"
    }
]

let name = "猪八戒"

// 将ejs设置为默认的模板引擎
app.set("view engine", "ejs")
// 配置模板的路径
app.set("views", path.resolve(__dirname, "views"))

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, "public")))
// 配置请求体解析
app.use(express.urlencoded({ extended: true }))

app.get("/hello", (req, res) => {
    res.send("hello")
})

app.get("/students", (req, res) => {
    // 希望用户在访问students路由时，可以给用户返回一个显示有学生信息的页面
    /* 
        html页面属于静态页面，创建的时候什么样子，用户看到的就是什么样子
            不会自动跟随服务器中数据的变化而变化

        希望有这么一个东西，他呢长的像是个网页，但是他里边可以嵌入变量，
            这个东西在node中被称为 模板

        在node中存在有很多个模板引擎，都各具特色，ejs

        ejs是node中的一款模板引擎，使用步骤：
            1.安装ejs
            2.配置express的模板引擎为ejs
                app.set("view engine", "ejs")
            3.配置模板路径
                app.set("views", path.resolve(__dirname, "views"))

            注意，模板引擎需要被express渲染后才能使用
    */

    //  res.render() 用来渲染一个模板引擎，并将其返回给浏览器
    // 可以将一个对象作为render的第二个参数传递，这样在模板中可以访问到对象中的数据
    // res.render("students", { name: "孙悟空", age: 18, gender: "男" })
    // <%= %>在ejs中输出内容时，它会自动对字符串中的特殊符号进行转义 &lt;
    //    这个设计主要是为了避免 xss 攻击
    // <%- %> 直接将内容输出
    // <% %>  可以在其中直接编写js代码，js代码会在服务器中执行
    res.render("students", { name })
})

app.get("/set_name", (req, res) => {
    name = req.query.name
    res.send("修改成功")
})

// 可以在所有路由的后边配置错误路由
app.use((req, res) => {
    // 只要这个中间件一执行，说明上边的地址都没有匹配
    res.status(404)
    res.send("<h1>您访问的地址已被外星人劫持！</h1>")
})

app.listen(3000, () => {
    console.log("服务器已经启动！")
})
