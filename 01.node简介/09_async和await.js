/* 
    nodejs文档：
        https://nodejs.dev/en/

    通过async可以快速的创建异步函数
*/
function fn() {
    return Promise.resolve(10)
}

/* 
    通过async可以来创建一个异步函数
        异步函数的返回值会自动封装到一个Promise中返回
    
    在async声明的异步函数中可以使用await关键字来调用异步函数
*/
async function fn2() {
    return 10
}

// fn().then(r => {
//     console.log(r)
// })

// fn2().then(r => {
//     console.log(r)
// })

function sum(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    })
}

/* 
    Promise解决了异步调用中回调函数问题，
        虽然通过链式调用解决了回调地狱，但是链式调用太多以后还是不好看
        我多想以同步的方式去调用异步的代码
*/

async function fn3() {
    // sum(123, 456)
    //     .then(r => sum(r, 8))
    //     .then(r => sum(r, 9))
    //     .then(r => console.log(r))

    // 当我们通过await去调用异步函数时，它会暂停代码的运行
    //  直到异步代码执行有结果时，才会将结果返回
    // 注意 await只能用于 async声明的异步函数中，或es模块的顶级作用域中
    // await阻塞的只是异步函数内部的代码，不会影响外部代码
    // 通过await调用异步代码时，需要通过try-catch来处理异常

    try {
        let result = await sum(123, 456)
        result = await sum(result, 8)
        result = await sum(result, 9)
        console.log(result)
    } catch (e) {
        console.log("出错了~~")
    }

}

// fn3()
// console.log("全局中的输出~~")

// 如果async声明的函数中没有写await，那么它里边就会依次执行
/* 
async function fn4(){
    console.log(1)
    console.log(2)
    console.log(3)
}

function fn5(){
    return new Promise(resolve => {
        console.log(1)
        console.log(2)
        console.log(3)
        resolve()
    })
} 

*/


async function fn4() {
    console.log(1)
    /* 
        当我们使用await调用函数后，当前函数后边的所有代码
            会在当前函数执行完毕后，被放入到微任务队里中
    */
    await console.log(2)

    // await后边的所有代码，都会放入到微任务队列中执行
    console.log(3)
}

function fn5() {
    return new Promise(resolve => {
        console.log(1)
        // 加了await
        console.log(2)

        resolve()
    }).then(r => {
        console.log(3)
    })
}
fn5()

    // console.log(4)


    // async function fn6(){
    //     await console.log("哈哈")
    // }
    // fn6()

;(async () => {
    await console.log("哈哈")
})()


