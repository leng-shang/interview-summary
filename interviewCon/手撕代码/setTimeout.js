//用setInterval实现setTimeout

function mySetTimeout(fn,delay){
    const timer = setInterval(()=>{
        fn()
        clearInterval(timer)
    },delay)
}

