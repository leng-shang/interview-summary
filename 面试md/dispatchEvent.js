// react 合成事件
/**
 * react合成事件的好处
 * 1.可以多平台适配
 * 2.实现事件委托，避免大量创建事件监听；
 */
// react 合成事件是对原生事件的封装
// react 16使用事件池的好处：避免垃圾回收
//事件对象可能会被频繁创建和回收，因此 React 引入事件池，在事件池中获取或释放事件对象。
//即 React 事件对象不会被释放掉，而是存放进一个数组中，当事件触发，就从这个数组中弹出，避免频繁地去创建和销毁(垃圾回收)
// react 17取消事件池的原因：因为在异步方法里面使用event.target会得到null，
//需要通过event.persist()或者用变量暂存起来这样的方式解决

/**
 * 
 * react合成事件17之前和17的区别
 * 1.17之前是讲事件委托给document处理，17之后是委托给root容器处理
 * 2.17之后取消了是事件池
 */
function dispacthEvent(e){
    let paths = []
    let current = e.target
    while(current){
        paths.push(current)
        current = current.parentNode
    }

    for (let index = paths.length-1; index >0; index--) {
       let handler = paths[index]['onClickCapture']
       handler&&handler()
    }
    for (let index = 0; index <paths.length; index++) {
       let handler = paths[index]['onClick']
       handler&&handler()
    }
}   