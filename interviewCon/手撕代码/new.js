//new的四步操作：
//1. 创建一个空对象

//2. 设置空对象的__proto__属性继承构造函数的prototype属性，也就是继承构造函数的原型对象上的公有属性和方法

//3. 调用构造函数，将构造函数中的this替换为空对象的this，继承构造函数中的属性

//4. 在函数内部返回一个新对象
function myNew(fn, ...args) {

    const obj = {}//创建一个空对象

    obj.__proto__ = fn.prototype//设置空对象的__proto__属性继承构造函数的prototype属性，也就是继承构造函数的原型对象上的公有属性和方法

    fn.apply(obj, args) //调用构造函数，将构造函数中的this替换为空对象的this，继承构造函数中的属性

    return obj
}

function Person(name, age) {
    this.name = name
    this.age = age
}
let obj = myNew(Person,'xiao',20)

let obj1 = new Person('xiao',20)
console.log(obj,'obj')
console.log(obj1,'obj1')