


/* 
    在定义模块时，模块中的内容默认是不能被外部看到的
        可以通过exports来设置要向外部暴露的内容

    访问exports的方式有两种：
        exports
        module.exports
        - 当我们在其他模块中引入当前模块时，require函数返回的就是exports
        - 可以将希望暴露给外部模块的内容设置为exports的属性
*/
// console.log(exports)
// console.log(module.exports)

// 随意的编写代码


// 可以通过exports 一个一个的导出值
// exports.a = "孙悟空"
// exports.b = {name:"白骨精"}
// exports.c = function fn(){
//     console.log("哈哈")
// }

// 也可以直接通过module.exports同时导出多个值
module.exports = {
    a: "哈哈",
    b: [1, 3, 5, 7],
    c: () =>{
        console.log(111)
    }
}


