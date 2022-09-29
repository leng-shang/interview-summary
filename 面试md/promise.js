class myPromise {
    constructor(executor) {
        console.log('进来了')
        //初始化值
        this.inintValue()
        //初始化this指向
        this.initBind()
        //执行传进来的函数
        try {
            executor(this.resolve, this.reject)
        } catch (err) {
            this.reject(err)
        }
    }

    inintValue() {
        this.PromiseResult = null,
            this.PromiseState = 'pending'
        this.onFufilledCallBacks = []
        this.onRejectedCallBacks = []
    }
    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    resolve(value) {
        if (this.PromiseState != 'pending') {
            return
        }
        this.PromiseState = 'fulfilled'
        this.PromiseResult = value
        while (this.onFufilledCallBacks.length > 0) {
            this.onFufilledCallBacks.shift()(this.PromiseResult)
        }
    }
    reject(value) {
        if (this.PromiseState != 'pending') {
            return
        }
        this.PromiseState = 'rejected'
        this.PromiseResult = value
        while (this.onRejectedCallBacks.length > 0) {
            this.onRejectedCallBacks.shift()(this.PromiseResult)
        }
    }
    then(onFufilled, onRejected) {
        console.log(onRejected,'onRejected')
        onFufilled = typeof onFufilled == 'function' ? onFufilled : (val) => val
        onRejected = typeof onRejected == 'function' ? onRejected : (reason) => { throw reason }
        var thenPromise = new myPromise((resolve, reject) => {
            const resolvePromise = (cb) => {
                setTimeout(() => {
                    try {
                        const x = cb(this.PromiseResult)
                        console.log(x)
                        if (x instanceof myPromise) {
                            x.then(resolve, reject)
                        } else {
                            resolve(x)
                        }
                    } catch (err) {
                        reject(err)
                    }
                })
            }
            if (this.PromiseState == 'fulfilled') {
                resolvePromise(onFufilled)
            }
            if (this.PromiseState == 'rejected') {
                resolvePromise(onRejected)
            } else if (this.PromiseState == 'pending') {
                this.onFufilledCallBacks.push(resolvePromise.bind(this, onFufilled))
                this.onRejectedCallBacks.push(resolvePromise.bind(this, onRejected))
            }
        })
        return thenPromise
    }
    catch(cb) {
        return this.then(null, cb)
    }
    finally(cb) {
        cb = typeof cb == 'function' ? cb : () => { }
        cb()
        return this.then((value) => {
            return value
        }, (err) => {
            throw err
        })
    }
    static all(promises) {
        let  count = 0
        let resultArr = []
        return new myPromise((resolve,reject)=>{
            promises.forEach((item,index)=>{
                if(item instanceof myPromise){
                    if(count==promises.length){
                        resolve(resultArr)
                    }
                    item.then((res)=>{
                        count++
                        resultArr[index] = res
                    },err=>{
                        reject(err)
                    })
                }  else {
                    if(count==promises.length){
                        resolve(resultArr)
                    }
                    count++
                    resultArr[index] = item
                } 
            })
        })

    }

    static race(promises){
        return new myPromise((resolve)=>{
            promises.forEach((item)=>{
                if(item instanceof myPromise){
                    item.then((res)=>{
                        resolve(res)
                    },(err)=>{
                        reject(err)
                    })
                }else {
                    resolve(item)
                }
            })
        })
    }

    static allSettled(promises){
        const resultArr = []
        return new myPromise((resolve,reject)=>{
            promises.forEach((item,index)=>{
                if(item instanceof myPromise){
                    item.then((res)=>{
                        resultArr[index] = {
                            status:'fulfilled',
                            value:res
                        }
                    },(err)=>{
                        resultArr[index] = {
                            status:'rejected',
                            value:err
                        }
                    })
                }else{
                    resultArr[index] = {
                        status:'fulfilled',
                        value:item
                    }
                }
            })
            resolve(resultArr)
        })
    }
}

// const test1 = new myPromise((resolve, reject) => {
//     reject(1)
// })

// test1.then((data)=>{
//     return data+1
// },(err)=>{
//    return err+1
// }).then((res)=>{
//     console.log(res,'res')
// },(errs)=>{
//     console.log(errs,'errs')
// })
module.exports =  myPromise