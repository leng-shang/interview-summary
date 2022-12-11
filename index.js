function Foo(){
    getName = function (){
        console.log('1')
    }
}

// Foo.getName = function (){
//     console.log(2)
// }

// Foo.prototype.getName = function (){
//     console.log(3)
// }

let obj = new Foo()
// // console.log(obj,'obj')
Foo.getName()
