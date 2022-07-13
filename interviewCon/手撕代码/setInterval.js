//用setTimeout实现setInterval

// function mySetInterval(fn,delay){
//     let timer = null
//     const interval = () => {
//         fn()
//         timer = setTimeout(interval, delay)
//     }
//     setTimeout(interval, delay)
//     return {
//         cancel: () => {
//             clearTimeout(timer)
//         }
//     }
// }

// let {cancel}=mySetInterval(()=>{
//     console.log(1)
// },1000)
// setTimeout(() => {
//     cancel()
// }, 4000)

setInterval(()=>{
    console.log(1)
},1000)

console.log(2)