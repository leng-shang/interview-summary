// let arrObj=[
//     {
//         id:1,
//         count:2
//     },
//     {
//         id:2,
//         count:4
//     },
//     {
//         id:3,
//         count:6
//     },
//     {
//         id:1,
//         count:2
//     },
//     {
//         id:5,
//         count:10
//     },
//     {
//         id:6,
//         count:12
//     },
// ]

function arrObjDeduplicated (arr){
    let obj = {}
    //1
    arrObj.forEach((item)=>{
        if(!Object.keys(obj).includes(item.id)){
            obj[item.id] = item
        }
    })
    return Object.values(obj)

//     //2
        arr = arr.reduce(function(a, b) {
            obj[b.name] ? '' : obj[b.name] = true && a.push(b);
            return a;
        }, [])


}

// let a = arrObjDeduplicated(arrObj)

// console.log(a)


let obj = {
    a:'',
    b:'',
    c:1
}
 let a = Object.values(obj).some((item)=>!item)
// console.log(a)

console.log(Math.random())