class MyPromise {
    // 构造方法
    constructor(executor) {
        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initBind()
        try {
            // 执行传进来的函数
            executor(this.resolve, this.reject)
        } catch (e) {
            // 捕捉到错误直接执行reject
            this.reject(e)
        }
    }

    initBind() {
        // 初始化this
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    initValue() {
        // 初始化值
        this.PromiseResult = null // 终值
        this.PromiseState = 'pending' // 状态
        this.onFulfilledCallbacks = [] // 保存成功回调
        this.onRejectedCallbacks = [] // 保存失败回调
    }

    resolve(value) {
        // state是不可变的
        if (this.PromiseState !== 'pending') return
        // 如果执行resolve，状态变为fulfilled
        this.PromiseState = 'fulfilled'
        // 终值为传进来的值
        this.PromiseResult = value
        while (this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.PromiseResult)
        }
    }

    reject(reason) {
        // state是不可变的
        if (this.PromiseState !== 'pending') return
        // 如果执行reject，状态变为rejected
        this.PromiseState = 'rejected'
        // 终值为传进来的reason
        this.PromiseResult = reason
        while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.PromiseResult)
        }
    }
    then(onFulfilled, onRejected) {
        // 接收两个回调 onFulfilled, onRejected
        // 参数校验，确保一定是函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        var thenPromise = new MyPromise((resolve, reject) => {
            const resolvePromise = cb => {
                setTimeout(() => {
                    try {
                        const x = cb(this.PromiseResult)
                        if (x === thenPromise) {
                            // 不能返回自身哦
                            throw new Error('不能返回自身。。。')
                        }
                        if (x instanceof MyPromise) {
                            // 如果返回值是Promise
                            // 如果返回值是promise对象，返回值为成功，新promise就是成功
                            // 如果返回值是promise对象，返回值为失败，新promise就是失败
                            // 谁知道返回的promise是失败成功？只有then知道
                            x.then(resolve, reject)
                        } else {
                            // 非Promise就直接成功
                            resolve(x)
                        }
                    } catch (err) {
                        // 处理报错
                        reject(err)
                        // throw new Error(err)
                    }
                })
            }
            if (this.PromiseState === 'fulfilled') {
                // 如果当前为成功状态，执行第一个回调
                resolvePromise(onFulfilled)
            } else if (this.PromiseState === 'rejected') {
                // 如果当前为失败状态，执行第二哥回调
                resolvePromise(onRejected)
            } else if (this.PromiseState === 'pending') {
                // 如果状态为待定状态，暂时保存两个回调
                this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled))
                this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected))
            }
        })
        return thenPromise

    }
    catch(cb){
        return this.then(null, cb);
    }
    finally(cb){
        return this.then(value => { 
            return MyPromise.resolve(cb()).then(() => value);
        },err => {
            return MyPromise.resolve(cb()).then(()=>{throw err});
        });
    }
}

let p1 = new MyPromise((resolve, reject) => {
    // resolve('成功')
    reject('失败')
})

// p1.then((data) => {
//     setTimeout(() => {
//         console.log(data, 'resole')
//     }, 1000);
// }).catch((err)=>{
//     console.log(err,'catch')
// }).finally(()=>{
//     console.log('执行了finally函数')
// })
p1.then(()=>{
    
}).then(()=>{

}).then(()=>{

},(e)=>{console.log(e)})
