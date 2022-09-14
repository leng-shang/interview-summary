// 发布订阅
class PublishSubscription{
    constructor(){
        this.result = {}

    }
    subscrip(type,callBack){
        if(!this.events[type]){
            this.result[type] = [callBack]
        }else {
            this.result[type].push(callBack)
        }
    }
    emit(type,...reset){
        this.events[type]&&this.events[type].forEach((item)=>item.apply(this,reset))
    }
    once(type,callBack){
        function fn(){
            callBack()
            this.off(type,fn)
        }
        this.subscrip(type,callBack)
    }
    off(type,callBack){
        if(!this.events[type]) return 
        this.events[type].filter((item)=>{
            return item !==callBack
        })
    }
}

let s1 = new PublishSubscription()

//深拷贝
// 1.JSON.parse(JSON.stringify(data))   时间格式和正则会有问题
// 2.递归拷贝
// // function Recursion (obj){
// //     if(!obj&&typeof obj != 'object'){
// //         return 
// //     }
// //     let newObj = Array.isArray(obj)?[]:{}
// //     for(let i in obj){
// //         if(typeof obj[i]=='object'){
// //             newObj[i] = Recursion(obj[i])
// //         }else {
// //             newObj[i] = obj[i]
// //         }
// //     }
// //     return newObj
// // }

// //冒泡排序
// function bubbleSort(arr){
//     if(!arr&&!Array.isArray(arr)) return 

//     for(let i=0;i<arr.length/2;i++){
//         for(let j=0;i<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let num = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = num
//             }
//         }
//     }
// }

// //数组去重
// // 1. Array.from(new Set(data))

// // 2.reduce + indexOf
// // let data = [1,2,3,1,4,5,2]
// // let newData = data.reduce((cur,item)=>{
// //     cur.indexOf(item)==-1&&cur.push(item)
// //     return cur
// // },[])

// // 3.//filter + indeOf
// // data.filter((item)=>{
// //     return data.indexOf(item) == index
// // })

// // 4.两个for循环
// // for(let i=0;i<arr.length;i++){
// //     for(let j=i+1;j<arr.length;j++){
// //         if(arr[i] == arr[j]){
// //             arr.splice(j,1)
// //         }
// //     }
// // }

// //数组对象去重
// // 1.reduce
// // arr.reduce((cur,item,index)=>{
// //     cur[item.id]?arr.splice(index,1):cur[item.id] = true
// //     return cur
// // },{})
// // 2.Object.keys+Object+values
// // let obj = {}
// // arr.forEach((item)=>{
// //     if(!Object.keys(obj).includes(item.id)){
// //         obj[item.id] = item
// //     }
// //     return Object.values(obj)
// // })

// //改变this指向(apply/call/bind)
// Function.prototype.call = function (context,...reset){
//     if(typeof this !== 'function'){
//         throw new Error()
//     }
//     context = context || window
//     context.callBack = this
//     const result = context.callBack(...reset)
//     delete context.callBack
//     return result
// }

// Function.prototype.apply = function (context,arr){
//     if(typeof this !== 'function'){
//         throw new Error()
//     }
//     context = context || window
//     context.callBack = this
//     let result = context.callBack(...arr)
//     delete context.callBack
//     return result
// }

// Function.prototype.bind = function (context,...reset ){
//     let _this = this
//     return function (){
//         return _this.call(context,...reset,...arguments)
//     }
// }

// //防抖与节流
// function debounce (callBack,time){
//     let timer;
//     return function (){
//         if(timer){
//             clearTimeout(timer)
//         }
//         timer =  setTimeout(()=>{
//             callBack.apply(this,arguments)
//         },time)
//     }
    
// }

// function throttle(fn,delay){
//     let lastTime =0
//     return function (){
//         let newTime = new Date().getTime()
//         if(newTime-lastTime>delay){
//             lastTime = newTime
//             fn.call(this,...arguments)
//         }
        
//     }
// }

// function throttle(fn,delay){
//     let timer = null
//     return function (){
//         if(!timer){
//             timer = setTimeout(()=>{
//                 fn.apply(this,...arguments)
//                 timer = null
//             },delay)
//         }
//     }
// }

// // new 操作符
// function myNew(fn,...reset){
//     let obj = {}
//     obj.__proto__ = fn.prototype
//     fn.apply(obj,...reset)
//     return obj
// }

// let obj = {a:1,b:2}
// let assignObj = Object.assign({},obj)
// let newObj = {...obj}
// let creatObj = Object.create(obj)
// obj.a='a'
// console.log(assignObj,'assignObj')
// console.log(newObj,'newObj')
let arr = [1,2,3]
let newArr = arr.slice()
arr[1] = 8
console.log(arr,'arr')
console.log(newArr)

