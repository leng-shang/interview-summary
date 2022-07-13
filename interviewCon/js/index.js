//for in 和for of的区别
/**
 *  1.for in可以遍历对象，for of不能遍历对象，只能遍历带有iterator接口的，例如Set、Map，String、Array
    2.for in和for of都可以遍历数组，for in输出的是数组的index下标，for of输出的是数组的每一项的值
    总结：for in适合遍历对象，for of适合遍历数组
 */

/**
 *  什么是跨域
    跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了
    跨域是指浏览器不能执行其他网站的脚本，它是由浏览器的同源策略影响的，是浏览器对js实施的安全限制。
    浏览器从一个域名的网页去请求另一个域名的资源时，出新协议、域名、端口任意一个不同都会产生跨域
*/
/**
    解决跨域问题：
        1.jsonp：   callback回调函数
            利用script标签的这个开放策略，但是JSONP请求一定需要对方的服务器做支持才可以。 缺点是仅支持get方法具有局限性。
        2.CORS原理：
            实现CORS通信的关键是服务器，只要服务器实现了CORS接口，就可以跨源通信
            在响应头上添加Access-Control-Allow-Origin属性，指定同源策略的地址
        3.Nginx：
            proxy代理是前端用的最多的解决跨域的方法：配置代理服务器来访问目标服务器获取数据
*/
//forEach如何退出循环
    //抛错



//箭头函数和普通函数的区别
/**
 * 1.箭头函数不能用于构造函数，普通函数可以用于构造函数
 * 2.this指向不同
 *      普通函数谁调用，this指向谁，作为构造函数，指向创建对像的实例，可以通过apply，bind，call改变this指向
 *      箭头函数的this在声明时就已经确定，并且不能改变，指向上下文的this
 * 3.箭头函数没有arguments，可以使用rest代替
 */

//let、var和const的区别？如果希望const定义的对象的属性也不能被修改该怎么做？
/**
 *  Object.defineProperty(obj,key,{
        writable:false
    })
 */
//原型和原型链
/**
 *  原型：每个构造函数都有prototype属性，每个构造函数的实例都有__proto__属性
    原型链：构造函数实例的__proto__指向构造函数的protoType
    判断：可以通过constructor来判断该实例是否属于该构造函数
    constructor缺点：当构造函数的原型改变的时候，会造成判断错误
 */
       