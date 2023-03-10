/* 
    定义类的思路
        1. 先把功能都分析清楚了，在动手
        2. 写一点想一点，走一步看一步
*/

const PROMISE_STATE = {
    PENDING:0,
    FULFILLED:1,
    REJECTED:2
}

class MyPromise {

    // 创建一个变量用来存储Promise的结果
    #result
    // 创建一个变量来记录Promise的状态
    #state = PROMISE_STATE.PENDING //pending 0 fulfilled 1 rejected 2

    constructor(executor) {
        // 接收一个 执行器 作为参数
        // bind 绑定this
        executor(this.#resolve.bind(this), this.#reject.bind(this)) // 调用回调函数
    }

    //  井号表示私有的 #
    // 私有的resolve() 用来存储成功的数据
    #resolve(value) {
        // 禁止值被重复修改
        // 如果state不等于0，说明值已经被修改 函数直接返回
        if (this.#state !== 0) return

        this.#result = value
        this.#state = 1 // 数据填充成功
    }

    // #resolve = () => {
    //     console.log(this)
    // }

    // 私有的reject() 用来存储拒绝的数据
    #reject(reason) { }


    // 添加一个用来读取数据的then方法
    then(onFulfilled, onRejected) {
        if (this.#state === 1) {
            onFulfilled(this.#result)
        }
    }


}

const mp = new MyPromise((resolve, reject) => {
    resolve("孙悟空")
    resolve("孙")
})

mp.then((result) => {
    console.log("读取数据", result)
})


