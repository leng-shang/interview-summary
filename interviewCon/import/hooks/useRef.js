//useRef的作用
//1.可以获取真实dom元素，或class组件实例
//2.可以保存数据创建useRef时候，会创建一个原始对象，只要函数组件不被销毁，
//原始对象就会一直存在，那么我们可以利用这个特性，来通过useRef保存一些数据
//useRef的使用
const dom = useRef()
// <div ref={dom}></div> 
function myRef (){
    console.log(dom.current)
}

forwardRef((props,ref)=>{

})