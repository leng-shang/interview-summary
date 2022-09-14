function sendRequest(urls,max){
    return new Promise((resolve)=>{
        let currentReqNumber=0;
        let endReqNumber = 0
        let result = new Array(urls.length).fill(false)
        let blockQueue = []
        for(let i = 0;i<urls.length;i++){
            request(urls[i],i)
        }
        

        async function request(item,index){
            if(currentReqNumber>max){
                await new Promise(()=>{blockQueue.push(resolve)})
            }
            requestHandler(item,index)
        }
        async function requestHandler(item,index){
            currentReqNumber++
            try{
                let res = await item
                result[index] = res
            }catch(err){
                result[index] = err
            }finally{
                currentReqNumber--
                endReqNumber++
                if(blockQueue.length>0){
                    blockQueue.shift()()
                    blockQueue.unshift()
                }
                if(endReqNumber == urls.length){
                    resolve(result)
                }
            }
        }
    })
}

let test1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('test1')
    },3000)
})
let test2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('失败1')
    },4000)
})
let test3 = new Promise((resolve,reject)=>{
    resolve('test3')
})

sendRequest([test1,test2,test3],2).then((data)=>{
    console.log(data,'data')
})