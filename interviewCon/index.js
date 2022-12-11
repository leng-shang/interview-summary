function a(m,n){
    return function b(){
        return m+n
    }
}
let c = a(1,2)()
let d = a()(3,4)

console.log(c,'c')
console.log(d,'d')