// 使用this.fn.call(this,arguments)
// 利用了函数调用的特点
// 谁调用这个函数，this指向谁的特点
// delete context.callBack;删除调用的函数
Function.prototype.myCall = function (context){
    if(typeof this !== 'function'){
        throw new Error()
    }
    context = context || window
    context.callBack = this
    let argus = [...arguments].slice(1)
    const result = context.callBack(...argus)
    delete context.callBack
    return result
}
//call使用
function fn(a,b){
    console.log(this)
    console.log(a,b)
}
let obj = {
    aa:2
}
// fn.myCall(obj,1,23)

Function.prototype.myApply = function (context){
    if(typeof this !== 'function'){
        throw new Error()
    }
    context = context || window
    context.callBack = this
    let argus = arguments[1]
    let result = context.callBack(...argus)
    delete context.callBack
    return result
}

function fnApply (a,b,c){
    console.log(this)
    console.log(a,b,c)
}
let objApply = {
    apply:1
}
// fnApply.myApply(objApply,[1,2,3])

Function.prototype.myBind = function (context){
    if(typeof this !== 'function'){
        throw new Error()
    }
    let argus = [...arguments].slice(1)
    let _this = this
    return function(){
        let rArgus = [...argus,...arguments]
        return _this.myCall(context,...rArgus)
    }

}


