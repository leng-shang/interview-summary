//1.typeof


//2.instanceOf 
//原理：对象的__proto__指向构造函数的prototype

//3.constructor
//当该构造函数的prototype改变的时候，会出现判断错误
// function Fn(){};

// Fn.prototype=new Array();
// var f=new Fn();

// console.log(f.constructor===Fn);
// console.log(f.constructor===Array);

//4.Object.prototype.toString.call()