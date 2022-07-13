// function throttle(fn, delay) {
//     let last = 0 // 上次触发时间
//     return function (...args) {
//       const now = Date.now()
//       if (now - last > delay) {
//         last = now
//         fn.apply(this, args)
//       }
//     }
// }
  
//   // 测试
//   function task() {
//     console.log('run task')
//   }
//   const throttleTask = throttle(task, 1000)
//   window.addEventListener('scroll', throttleTask)
//一、时间戳
// function throttle(fn,delay){
//     let last = 0
//     return function (...argus){
//         const now = Date.now()
//         if(now - last>delay){
//             fn.apply(this,argus)
//             last = now
//         }
//     }
// }
//二、定时器
// function throttle(fn,delay){
//     let timer = null
//     return function(...argus){
//         if(!timer){
//             setTimeout(()=>{
//                 fn.apply(this,argus)
//                 timer = null
//             },delay)
//         }
//     }
// }
//使用场景
// 监听滚动条位置
// 防止高频点击提交，防止表单重复提交
