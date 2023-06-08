const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs/promises")

const STUDENT_ARR = require("./data/students.json")

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
    res.render("students", { stus: STUDENT_ARR })
})

// 创建一个添加学生信息的路由
app.post("/add-student", (req, res) => {
    // 路由里要做什么？
    // 生成一个id
    const id = STUDENT_ARR.at(-1).id + 1

    // 1.获取用户填写的信息
    const newUser = {
        id,
        name: req.body.name,
        age: +req.body.age,
        gender: req.body.gender,
        address: req.body.address
    }

    // 2. 验证用户信息（略）

    // 3. 将用户信息添加到数组中
    STUDENT_ARR.push(newUser)

    // 4. 返回响应
    // res.send("添加成功！")
    // 直接在添加路由中渲染ejs，会面临表单重复提交的问题
    // res.render("students", { stus: STUDENT_ARR })

    // 将新的数据写入到json文件中
    fs.writeFile(
        path.resolve(__dirname, "./data/students.json"),
        JSON.stringify(STUDENT_ARR)
    ).then(()=>{
        // res.redirect() 用来发起请求重定向
        // 重定向的作用是告诉浏览器你向另外一个地址再发起一次请求

        res.redirect("/students")
    }).catch(()=>{
        // ....
    })

    
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
