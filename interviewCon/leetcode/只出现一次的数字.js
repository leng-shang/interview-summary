/** 
let arr = [1,2,2,3,3]
function appearOne(arr){
    let res = []
    arr.forEach((item)=>{
        if(res.includes(item)){
            let index = res.indexOf(item)
            res.splice(index,1)
        }else {
            res.push(item)
        }
    })
    return res
}   
console.log(appearOne(arr))
*/
/**
js异或运算符^:按位异或 是对两个表达式执行 按位异或，先将两个数据转化为二进制数，然后进行 按位异或运算，只要位不同结果为 1，否则结果为 0
例如：
let a = 5;
let b = 8;
let c = a ^ b;
console.log(c) // 13
解析：
a 转二进制数为：0101
b 转二进制数为：1000
那么按照 按位异或 运算之后得到：1101（相同为 0，不同为 1），得到 c 的值就是 13
 */
/**
let arr = [10,100,200,200,10]
function fnc(arr){
    return arr.reduce((a, b) => {
        return a ^ b
    }, 0);
}
console.log(10^100)
let num100 = 100
let num10 = 10
console.log(num100.toString(2))
console.log(num10.toString(2))
console.log(parseInt(1101110,2))

*/
