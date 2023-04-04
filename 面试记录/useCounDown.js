let timer = setInterval(()=>{
    expireTime = expireTime-1
    if(expireTime>0){
      useCountdown(expireTime)
    }else {
      clearInterval(timer)
              }
  },1000)
    let ms = Date.now()
let days = Math.floor(ms/1000/60/60/24)
let hours = Math.floor(ms/1000/60/60-days*24)
let minutes = Math.floor(ms/1000/60-hours*60)
let seconds = Math.floor(ms/1000-minutes*60)
    return {
    expired:ms>expireTime*1000?false:true,
    days:days,
    hours:hours,
    minutes:minutes,
    seconds:seconds,
  }