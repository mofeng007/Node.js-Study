/* 
    默认情况下，node中的模块化标准是CommonJS
        要想使用ES的模块化，可以采用以下两种方案
            1. 使用mjs作为扩展名
            2. 修改package.json将模块化规范设置为ES模块
                当我们设置 "type": "module" 当前项目下所有的js文件都默认为es module

    
*/

// console.log(module)


// 导入m4模块，es模块不能省略扩展名（官方标准）
// import { a, b, c } from "./m4.mjs"

// 通过as来指定别名
// import { a as hello, b, c } from "./m4.mjs"

// 开发时要尽量避免import * 情况
// import * as m4 from "./m4.mjs"

// console.log(m4.c)

// 导入模块的默认导出
// 默认导出的内容，可以随意命名
// import sum, { a } from "./m4.mjs"

// console.log(sum, a)

import { a, b, c } from "./m4.mjs"

// 通过ES模块化，导入的内容都是常量
// es模块都是运行在严格模式下的
// ES模块化，在浏览器中同样支持，但是通常我们不会直接使用
//          通常都会结合打包工具使用
console.log(c)

c.name = "沙和尚"

console.log(c)

