const express = require("express")
const path = require("path")
const app = express()
const cookieParser = require("cookie-parser")
const session = require("express-session")
// 引入uuid
const uuid = require("uuid").v4
// 引入file-store
const FileStore = require("session-file-store")(session)

const userRouter = require("./routes/user")
const goodsRouter = require("./routes/goods")

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
    session({
        store: new FileStore({
            path: path.resolve(__dirname, "./sessions")
        }),
        secret: "dazhaxie"
    })
)

/* 
    csrf攻击
        - 跨站请求伪造
          删除功能链接： http://localhost:3000/students/delete?id=3
        - 现在大部分的浏览器的都不会在跨域的情况下自动发送cookie
            这个设计就是为了避免csrf的攻击
        - 如何解决？
            1. 使用referer头来检查请求的来源
            2. 使用验证码
            3. 尽量使用post请求（结合token）

        - token（令牌）
            - 可以在创建表单时随机生成一个令牌
                然后将令牌存储到session中，并通过模板发送给用户
                用户提交表单时，必须将token发回，才可以进行后续操作
                （可以使用uuid来生成token）

*/

app.use("/students", require("./routes/student"))

app.get("/", (req, res) => {
    res.render("login")
})

app.get("/logout", (req, res) => {
    // 使session失效
    req.session.destroy(() => {
        res.redirect("/")
    })
})

app.post("/login", (req, res) => {
    // 获取用户的用户名和密码
    const { username, password } = req.body
    if (username === "admin" && password === "123123") {
        // 登录成功后，将用户信息放入到session中
        // 这里仅仅是将loginUser添加到了内存中的session中
        //  而没有将值写入到文件中
        req.session.loginUser = username

        // 为了使得session可以立刻存储，需要手动调用save
        req.session.save(()=>{
            res.redirect("/students/list")
        })
    } else {
        res.send("用户名或密码错误")
    }
})
app.use((req, res) => {
    res.status(404).send("<h1>您访问的页面已经被外星人劫持</h1>")
})

app.listen(3000, () => {
    console.log("服务器已经启动！")
})
