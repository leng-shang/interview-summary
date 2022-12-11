//1.typeof
    //typeof 操作符是按照数据在计算机底层存储的二进制结果来进行检测的

//2.instanceOf 
//原理：对象的__proto__指向构造函数的prototype
//缺点：instanceof无法检测基本类型值，比如一个number、string等，除非是类的实例
//instanceof 是用来检测当前实例是否属于这个类, 而不是用来判断原生的数据类型
//3.constructor
//constructor不能判断undefined和null
//当该构造函数的prototype改变的时候，会出现判断错误
// function Fn(){};

// Fn.prototype=new Array();
// var f=new Fn();

// console.log(f.constructor===Fn);
// console.log(f.constructor===Array);

//4.Object.prototype.toString.call()