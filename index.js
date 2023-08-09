// let obj = {
//     a:1,
//     toString:function (){
//         return this.a++
//     }
// }

// console.log(obj==1&&obj==2&&obj==3)
// a=1
// Object.defineProperty(window,'obj',{
//     get:()=>{
//         return this.a++
//     }
// })
// console.log(obj==1&&obj==2&&obj==3)
// Object.defineProperty


function A(){

}
function B(){

}
// B.__proto__ = A.prototype
// B.__proto__ = A.prototype
// A.prototype
// A.__proto__ =B.prototype
// let a = new A()
// // A.__proto__ = A.prototype
// console.log(a instanceof B)

function A(){

}

let a = new A()

a.__proto__ = A.prototype
A.__proto__ = Function.prototype
A.prototype.__proto__ = Object.prototype
Function.__proto__ = Object.prototype