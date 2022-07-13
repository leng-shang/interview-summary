//forEach
let arr = [1, 2, 3]
Array.prototype.myForEach = function (cb) {
    for (let index = 0; index < this.length; index++) {
        cb(this[index], index, this)
    }
}

arr.myForEach((item, index, arr) => {
    // console.log(item,index,arr)
})

//map
Array.prototype.myMap = function (cb) {
    let res = []
    for (let index = 0; index < this.length; index++) {
        res.push(cb(this[index], index, this))
    }
    return res
}

//filter
let arrFilter = ['a', 'b', 'c']
Array.prototype.myFilter = function (cb) {
    let res = []
    for (let index = 0; index < this.length; index++) {
        cb(this[index], index, this) && res.push(this[index])
    }
    return res
}
// let newArr = arrFilter.myFilter((item)=>{
//     return item!='a'
// })
// console.log(newArr,'new')

//reduce
let r = [1, 2, 3, 4, 5]
Array.prototype.myReduce = function (cb, ...args) {
    let start = 0, pre
    if (args.length) {
        pre = args[0]
    } else {
        pre = this[0]
        start = 1
    }
    for (let i = start; i < this.length; i++) {
        pre = cb(pre, this[i], i, this)
    }
    return pre
}



console.log(r.myReduce((prev, item, index, arr) => {
    prev += item
    return prev
}))