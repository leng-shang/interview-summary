//JSON深拷贝的缺点
/**
 * undefined、function转换之后属性会消失
 * NaN 转换之后值为null
 * Date对象，转换之后值是字符串
 */
let obj = {
    a:1,
    b:2,
    c:undefined,
    d:function(){},
    e:NaN,
    f:new Date()
}
console.log(JSON.parse(JSON.stringify(obj)))