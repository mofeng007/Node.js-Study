// 开启了一个定时器
// 定时器的作用是间隔一段时间后，将函数放入到任务队列中
// setTimeout(() => {
//     console.log(1)
// }, 0)

/* 
     Promise的执行原理
        - Promise在执行，then就相当于给Promise了回调函数
            当Promise的状态从pending 变为 fulfilled时，
                then的回调函数会被放入到任务队列中
*/
// Promise.resolve(1).then(() => {
//     console.log(2)
// })

/* 
    queueMicrotask() 用来向微任务队列中添加一个任务
*/

// setTimeout(() => {
//     console.log(1)
// })

// Promise.resolve().then(() => {
//     setTimeout(()=>{
//         console.log(1)
//     })
// })

Promise.resolve().then(() => {
    Promise.resolve().then(()=>{
        console.log(1)
    })
})

queueMicrotask(() => {
    console.log(2)
})

/* 
    // 阅读下列代码，并说出执行结果：
    
    console.log(1);

    setTimeout(() => console.log(2));

    Promise.resolve().then(() => console.log(3));

    Promise.resolve().then(() => setTimeout(() => console.log(4)));

    Promise.resolve().then(() => console.log(5));

    setTimeout(() => console.log(6));

    console.log(7);

*/




// console.log(3)

/* 
    JS是单线程的，它的运行时基于事件循环机制（event loop）
        - 调用栈
            - 栈
                栈是一种数据结构，后进先出
            - 调用栈中，放的是要执行的代码
        - 任务队列
            - 队列
                - 队列是一种数据结构，先进先出
            - 任务队列的是将要执行的代码
            - 当调用栈中的代码执行完毕后，队列中的代码才会按照顺序依次进入到栈中执行
            - 在JS中任务队列有两种
                - 宏任务队列 （大部分代码都去宏任务队列中去排队）
                - 微任务队列 （Promise的回调函数（then、catch、finally））
            - 整个流程
                ① 执行调用栈中的代码
                ② 执行微任务队列中的所有任务
                ③ 执行宏任务队列中的所有任务


*/