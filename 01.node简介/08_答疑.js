class MyClass{

    // 私有属性 只能在类内部访问
    #name = "孙悟空"

    getName(){
        return this.#name
    }
}

const mc = new MyClass()

console.log(mc.getName())

/* 
    js中的变量
        - 早期我的理解（错误的）
            基本数据类型（存值）
            引用数据类型（存地址）

        - 实际情况（v8引擎 chrome）
            - 所有的值在变量中存储的都是内存地址
            - JS中全都是引用数据类型
            - JS中的数据类型
                - 原始值（不可变类型）
                - 对象（可变类型）
        
        - 为什么？
            - JS是一门动态类型语言，变量是没有类型的
            - 要如何为变量分配内存空间呢？
            - JS的解决方案就是变量中只存地址
            

        let a = 10
        a = "hello"
        a = {}
        a = function(){}

*/