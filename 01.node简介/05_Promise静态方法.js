/* 
    静态方法
        Promise.resolve() 创建一个立即完成的Promise
        Promise.reject() 创建一个立即拒绝的Promise
        Promise.all([...]) 同时返回多个Promise的执行结果
            其中有一个报错，就返回错误
        Promise.allSettled([...]) 同时返回多个Promise的执行结果(无论成功或失败)
           {status: 'fulfilled', value: 579}
           {status: 'rejected', reason: '哈哈'}
        Promise.race([...]) 返回执行最快的Promise（不考虑对错）
        Promise.any([...]) 返回执行最快的完成的Promise
*/

// Promise.resolve(10).then(r => console.log(r))

// Promise.reject("错误")

// new Promise((resolve, reject) => {
//     resolve(10)
// })

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}




// Promise.all([
//     sum(123, 456),
//     sum(5, 6),
//     Promise.reject("哈哈"),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// })

// Promise.allSettled([
//     sum(123, 456),
//     sum(5, 6),
//     Promise.reject("哈哈"),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// })

// Promise.race([
//     Promise.reject(1111),
//     sum(123, 456),
//     sum(5, 6),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// }).catch(r => {
//     console.log("错误")
// })

// Promise.any([
//     Promise.reject(1111),
//     Promise.reject(2222),
//     Promise.reject(3333),
// ]).then(r => {
//     console.log(r)
// }).catch(r => {
//     console.log("错误", r)
// })

setTimeout(()=>{
    console.log(1111)
})

Promise.resolve()
    .then(() => {
        console.log(2222)
    })


// console.log(22222)