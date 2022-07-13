const p1 = Promise.resolve('p1')

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})

const p4 = Promise.reject('p4 rejected')

Promise.meRace = function (raceArr){
    return new Promise((resolve,reject)=>{ 
        raceArr.forEach((item)=>{
            Promise.resolve(item).then(resolve,reject)
        })
    })
}

Promise.meRace([p4,p1,p2]).then((res)=>{
    console.log(res)
}).catch((err)=>console.log(err))