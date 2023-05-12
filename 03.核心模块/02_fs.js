const fs = require("node:fs/promises")
const path = require("node:path")

/* 
    fs.readFile() 读取文件
    fs.appendFile() 创建新文件，或将数据添加到已有文件中
    fs.mkdir() 创建目录
    fs.rmdir() 删除目录
    fs.rm() 删除文件
    fs.rename() 重命名
    fs.copyFile() 复制文件
*/

// fs.appendFile(
//     path.resolve(__dirname, "./hello123.txt"),
//     "超哥讲的真不错"
// ).then(r => {
//     console.log("添加成功")
// })

// 复制一个文件
// C:\Users\lilichao\Desktop\图片\jpg\an.jpg
fs.readFile("E:\\桌面美化\\VC背景.jpg")
    .then(buffer => {

        return fs.appendFile(
            path.resolve(__dirname, "./haha1.jpg"),
            buffer
        )
    })
    .then(() => {
        console.log("操作结束")
    })


// fs.mkdir()