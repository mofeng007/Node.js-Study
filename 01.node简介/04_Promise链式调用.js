// Promise就是一个用来存储数据对象
// 但是由于Promise存取的方式的特殊，所以可以直接将异步调用的结果存储到Promise中
// 对Promise进行链式调用时
//  后边的方法（then和catch）读取的上一步的执行结果
//      如果上一步的执行结果不是当前想要的结果，则跳过当前的方法

/* 
    当Promise出现异常时，而整个调用链中没有出现catch，则异常会向外抛出
*/

const promise = new Promise((resolve, reject) => {
    reject("周一到周五19点，不见不散")
})

promise
    .then(r => console.log("第一个then", r))
    .catch(r => {
        throw new Error("报个错玩")
        console.log("出错了")
        return "嘻嘻"
    })
    .then(r => console.log("第二个then", r))
    .catch(r => {
        console.log("出错了")
    })

/* 
    promise中的
        then (return new Promise())
        catch
        - 这三个方法都会返回一个新的Promise,
            Promise中会存储回调函数的返回值
        finally
            - finally的返回值，不会存储到新的Promise中
*/
// promise
//     .then(result => {
//         console.log("回调函数", result)
//         return "锄禾日当午"
//     })
//     .then(result => {
//         console.log("第二个then", result)
//         return "超哥真快乐"
//     })
//     .then(result => {
//         console.log(result)
//     })







// promise.then(result => {
//     console.log(result)
// }, reason => {
//     console.log("出错了", reason)
// })

// function sum(a, b, cb) {
//     setTimeout(() => {
//         cb(a + b)
//     }, 1000);
// }

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

// sum(123, 456).then(result => {
//     sum(result, 7).then(result =>{
//         sum(result, 8).then(result => {
//             console.log(result)
//         })
//     })
// })

// sum(123, 456)
//     .then(result => result + 7)
//     .then(result => result + 8)
//     .then(result => console.log(result))





