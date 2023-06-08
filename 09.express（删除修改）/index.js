const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs/promises")

let STUDENT_ARR = require("./data/students.json")

// 将ejs设置为默认的模板引擎
app.set("view engine", "ejs")
// 配置模板的路径
app.set("views", path.resolve(__dirname, "views"))

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, "public")))
// 配置请求体解析
app.use(express.urlencoded({ extended: true }))

/* 
    删除
        - 点击删除链接后，删除当前数据
        - 点击 白骨精 删除 --> 删除id为5的学生
        - 流程：
            1. 点击白骨精的删除链接
            2. 向路由发送请求（写一个路由）
            3. 路由怎么写？
                - 获取学生的id n
                - 删除id为n的学生
                - 将新的数组写入文件
                - 重定向到学生列表页面

    修改
        - 点击修改链接后，显示一个表单，表单中应该有要修改的学生的信息，
            用户对学生信息进行修改，修改以后点击按钮提交表单
        - 流程：
            1. 点击孙悟空的修改链接
            2. 跳转到一个路由
                - 这个路由会返回一个页面，页面中有一个表单，表单中应该显示孙悟空的各种信息
            3. 用户填写表单，点击按钮提交到一个新的路由
                - 获取学生信息，并对信息进行修改
*/
app.post("/update-student", (req, res) => {
    // 获取id
    // const id = req.query.id

    const { id, name, age, gender, address } = req.body

    // 修改学生信息
    // 根据学生id获取学生对象
    const student = STUDENT_ARR.find((item) => item.id == id)

    student.name = name
    student.age = +age
    student.gender = gender
    student.address = address

    fs.writeFile(
        path.resolve(__dirname, "./data/students.json"),
        JSON.stringify(STUDENT_ARR)
    )
        .then(() => {
            // res.redirect() 用来发起请求重定向
            // 重定向的作用是告诉浏览器你向另外一个地址再发起一次请求

            res.redirect("/students")
        })
        .catch(() => {
            // ....
        })
})

app.get("/to-update", (req, res) => {
    const id = +req.query.id
    // 获取要修改的学生的信息
    const student = STUDENT_ARR.find((item) => item.id === id)

    res.render("update", { student })
})

app.get("/delete", (req, res) => {
    // 获取要删除的学生的id
    const id = +req.query.id

    // 根据id删除学生
    // console.log(id)
    STUDENT_ARR = STUDENT_ARR.filter((stu) => stu.id !== id)

    // 将新的数组写入到文件中
    // 将新的数据写入到json文件中
    fs.writeFile(
        path.resolve(__dirname, "./data/students.json"),
        JSON.stringify(STUDENT_ARR)
    )
        .then(() => {
            // res.redirect() 用来发起请求重定向
            // 重定向的作用是告诉浏览器你向另外一个地址再发起一次请求

            res.redirect("/students")
        })
        .catch(() => {
            // ....
        })
})

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
    const id = STUDENT_ARR.at(-1) ? STUDENT_ARR.at(-1).id + 1 : 1

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
    )
        .then(() => {
            // res.redirect() 用来发起请求重定向
            // 重定向的作用是告诉浏览器你向另外一个地址再发起一次请求

            res.redirect("/students")
        })
        .catch(() => {
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
