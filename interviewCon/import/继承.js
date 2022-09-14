//1.原型链继承  将父类的实例当作子类的原型 即：Son.prototype = new Parent()
//优点：父类的属性和方法可以共用
//缺点：
//1.父类的引用属性会被所有子类共享，，更改一个子类的引用属性，其他子类也会受到影响
//2.子类型实例不能给父类构造函数传参
function Parent(){
    this.name = 'xiao'
    this.play = [1,2,3,4]
}
Parent.prototype.myName = function (){

}

function Son(){

}
Son.prototype = new Parent()

// let s1 = new Son()
// let s2= new Son()
// s1.play.push(4)

// console.log(s1.play,'s1')
// console.log(s2.play,'s2')

//2.构造函数继承    在子类构造函数中调用父类构造函数，使用apply/call改变this指向
//优点：
//1.可以在子类构造函数中向父类传参
//2.父类的引用属性不会被共享
//缺点：子类不能访问父类原型上定义的方法
function Parent2(){
    this.name = 'xiao'
    this.play = [1,2,3]
}

Parent2.prototype.myName = function (){

}

function Son2(){
    Parent2.call(this)
}

// let s1 = new Son2()
// let s2 = new Son2()
// s1.play.push(4)
// console.log(s1,s1.myName,'s1')
// console.log(s2,s2.myName,'s2')



// 3.组合继承   将原型链继承和构造函数继承的优点结合起来
//缺点：构造函数会多执行一次
//优点：
//1.可以在子类构造函数中向父类传参
//2.父类的引用属性不会被共享
//3.子类可以访问父类原型上定义的方法
function Parent3(){
    console.log(1)
    this.name = 'xiao'
    this.play = [1,2,3]
}

Parent3.prototype.myName = function (){

}

function Son3(){
    Parent3.call(this)
}

Son3.prototype = new Parent3()

// let s1 = new Son3()
// let s2 = new Son3()

// s1.play.push(10)
// console.log(s1.play,s1.myName,'s1')
// console.log(s2.play,s2.myName,'s2')



//终极方案，寄生组合继承。
function Parent4(){
    console.log(2)
    this.name = 'xiao'
    this.play = [1,2,3]
}

Parent4.prototype.myName = function (){

}

function Son4(){
    Parent4.call(this)
}

Son4.prototype = Object.create(Parent4.prototype)
Son4.prototype.constructor = Son4


let s1 = new Son4()
// let s2 = new Son4()
console.log(s1.constructor == Parent4)

// s1.play.push(10)
// console.log(s1.play,s1.myName,'s1')
// console.log(s2.play,s2.myName,'s2')


//es6继承

class Es6Parent{
    constructor(width,height){
        this.width = width
        this.height = height

    }

    getWidth(){
        return this.width*this.height
    }
}

// class Es6Son extends Es6Parent{

//     constructor(width,height){
//         super(width,height)
//         this.w = 2
//         this.h = 6
//     }

//     area(){
//         return this.w*this.h
//     }
// }
// const square = new Es6Son(10,20);
// console.log(square.area())
// console.log(square.getWidth())