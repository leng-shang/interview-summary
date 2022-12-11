// 概念：函数防抖（debounce），就是指触发事件后，在 n 秒内函数只能执行一次，
// 如果触发事件后在 n 秒内又触发了事件，则会重新计算函数延执行时间。
function debounce(fn, delay) {
    let timer
    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
}
  
//   // 测试
//   function handle(){
//     console.log(Math.random());
// }
    
// window.addEventListener("resize",debounce(handle,1000))

//在一段时间内出发多次，只执行一次
function myDebounce(fn,delay){
    let timer;
    return function (...argus){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this,argus)
        },delay)
    }
}
// 使用场景
//1.搜索框搜索输入。只需用户最后一次输入完，再发送请求；
//2.浏览器窗口大小改变后，只需窗口调整完后，再执行 resize 事件中的代码，防止重复渲染。

