let string = new String('123')
// function myInstanceOf (left,right){
//     if(typeof left !== 'object' || left == null) return false
//     while(true){
//         if(Object.getPrototypeOf(left) == null) return false
//         if(Object.getPrototypeOf(left) == right.prototype) return true
//         left = Object.getPrototypeOf(left)
//     }
// }
function myInstanceOf(left,right){
    if(typeof left !== 'object' || left == null) return false
    while(true){
        if(left.__proto__ == null) return false
        if(left.__proto__ == right.prototype) return true
        left = left.__proto__
    }
}
console.log(string instanceof String)
console.log(myInstanceOf(string,String))