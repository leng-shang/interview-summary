//生成render函数
// 利用with和new Function生成render函数
// 虚拟dom转化成真实dom
// 实现c, v, s, 方法 转化成虚拟节点
// 


function _render(){
    this.$option 
}

function _update(vnode){
    patch()
}

// vue依赖收集
class Dep{
    
}

class Watcher{

    depend(){

    }
    evalute(){

    }
    update(){
        queenWatcher(this)
    }
}

let queen = []
let has = {}
let pedding = false
//异步更新原理
// 一个事件任务只执行一次回调
function flushQueen (){
    // 数据修改后统一执行
    queen.forEach((q)=>{q.run()})
}
function queenWatcher(watcher){
    //收集watcher
    const {id} = watcher
    if(!has[id]){
        queen.push(watcher)
        has[id] = true
        if(!pedding){
            nextick(flushQueen)
            pedding = true
        }
    }

}

let queenCallback = []
let waiting = false
function flushCallback (){
    // 最后统一执行回调函数
}
let timfunc
if(Promise){
    Promise.resolve().then(flushCallback)
}else if(MutationObserver){

}else {
    setTimeout(flushCallback)
}
function nextick(cb){
    //收集回调函数
    queenCallback.push(cb)
    if(!waiting){
        timfunc()
    }
}

// 数组更新实现原理
// 重写了七个数组方法：pop，push，shift，unshift，splice，sort，reverse
// 数组发生变化时，执行原生方法，如果是push，shift，splice这三个，如果插入了新的值，
// 给每个对象增加一个__ob__不可枚举属性，对新增加的值做响应式处理
// 给每个对象增加一个dep依赖 ，数组变化通知更新
// 如果是数组套数组进行递归收集依赖


// 计算属性原理
// 计算属性其实是一个watcher
// 使用dirty来检测依赖的值是否发生变化
// 使用lazy来判断是否首次执行
// 将计算属性使用Object.defineProperties重新定义
// 计算属性执行get方法时，计算属性依赖的值会收集计算watcher
// 计算属性get方法执行完毕时，将计算属性依赖的值去收集渲染watcher
// 当计算属性依赖的值发生改变时，依次去执行收集的watcher来更新页面
function initComputed(vm){
    let computeds = vm.$option.computed
    let watchers = this._computedWatchers = {}
    for (const key in computeds) {
        const useDef = computeds[key]
        const getter = typeof useDef == 'function'?useDef:useDef.get
        watchers[key] = new Watcher()
        defineComputed(vm,key,useDef)
    }

}

function defineComputed(target,key,useDef){
    const setter = useDef.set||(()=>{})
    Object.defineProperties(target,key,{
        get:createComputed(key),
        set:setter
    })
}
function createComputed(key){
    return function (){
        const watcher = this._computedWatchers[key]
        if(watcher.dirty){
            watcher.evalute()
        }
        if(Dep.target){
            watcher.depend()
        }
        return watcher.value
    }
}

// watch的实现原理
// 利用watcher来触发watch的回调函数
// 当值发生改变的时候触发回调函数
function initWatch(vm){
    const watchs = vm.$option.watch
    for (const key in watchs) {
        const handle = watchs[key]
        creatWatch(vm,key,handle)
    }
}
function creatWatch(vm,expOrFn,handle){
    if(typeof handle == 'string'){
        handle = vm[handle]
    }
    return this.$wactch(expOrFn,handle)
}
function $wactch(expOrFn,handle){
    const watch = new Watcher()
}

// diff算法 (双指针比较)
// 同层级比较，判断标签和类型
// 属性比较
// 节点比较(先处理特殊情况，在处理乱序情况)
// Dom树进行diff->计算出差异进行更新真实DOM