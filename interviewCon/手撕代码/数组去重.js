//一
function arrayHeavy(arr){
    if(!Array.isArray(arr)){
        throw new Error('请传入一个数组')
    }
    return Array.from(new Set(arr))
}
// console.log(arrayHeavy([1,2,3,1,4,5,3]))

//二、
function arrayHeavy2(arr){
    if(!Array.isArray(arr)){
        throw new Error('请传入一个数组')
    }
    return arr.filter((item,index)=>{
        return arr.indexOf(item) == index
    })
}
// console.log(arrayHeavy2([1,2,3,1,4,5,3]))
//五 不使用任何方法 两个for循环实现
function arrayHeavy5(arr) {
    for (var i = 0; i < arr.length; i++) {    // 首次遍历数组
        for (var j = i + 1; j < arr.length; j++) {   // 再次遍历数组
            if (arr[i] == arr[j]) {          // 判断连个值是否相等
                arr.splice(j, 1);           // 相等删除后者
            }
        }
    }
    return arr
}
// console.log(arrayHeavy5([1,2,3,1,4,5,3]))
//六
function arrayHeavy6(arr){
    if(!Array.isArray(arr)){
        throw new Error('请传入一个数组')
    }
    let newArr = []
    arr.forEach((item)=>{
        if(!newArr.includes(item)){
            newArr.push(item)
        }
    })
    return newArr
}
// console.log(arrayHeavy6([1,2,3,1,4,5,3]))

//三、
function arrayHeavy3(arr){
    if(!Array.isArray(arr)){
        throw new Error('请传入一个数组')
    }
    let arrObj={}
    arr.forEach((item)=>{
        if(!Object.keys(arrObj).includes(item)){
            arrObj[item] = item
        }
    })
    return Object.values(arrObj)
}
// console.log(arrayHeavy3([1,2,3,1,4,5,3]))
// 四
function arrayHeavy4(arr){
    if(!Array.isArray(arr)){
        throw new Error('请传入一个数组')
    }
    
    return arr.reduce((a,b)=>{
        if(!a.includes(b)){
            a.push(b)
        }
        return a
    },[])
}
console.log(arrayHeavy4([1,2,3,1,4,5,3]))



