import React from 'react'
class lifecycle extends React.Component{
    constructor(){
        //定义状态
        //给普通函数绑定this
        super()
        this.state={
            //
        }
    }

    ///17  弃用了componentWillMount、componentWillReceiveProps、componentWillUpdate
    //新增
    static getDerivedStateFromProps(nextProps,prevState){    //componentWillReceiveProps
        //他是静态方法，不能使用this
        //返回一个对象或null
        //返回值是对象，对象里面的内容就是修改的state的内容
        //返回值是null，state内容不进行修改
    }

    render(){
        //解析state和props
        
    }

    componentDidMount(){
        //发送数据请求
        //第三库实例化
        //可以获取真实dom，进行dom操作
    }
    shouldComponentUpdate(nextProps,nextState){
        //可以判断props或state是否改变，来判断组件是否渲染
        //返回值为true组件进行渲染，false不进行渲染
    }

    getSnaphotBeforeUpdate(nextProps,nextState){   //(快照)
        //可以拿到最新的数据
        //返回值传递给componentDidUpdate
    }
    
    render(){

    }
    componentDidUpdate(){
        //组件更新完成
    }

    componentWillUnMount(){
        //组件销毁时调用
        //清除定时器/实例/事件
    }
    componentDidCatch(){
        //用于捕获子组件throw 的错误 显示回退UI
    }

}   

export default lifecycle


