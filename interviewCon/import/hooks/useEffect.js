// useEffect代表的生命周期
useEffect(()=>{
    //代表类组件的componentDidUpdate(prevProps,prevState)
    //每次更新都会执行
})

useEffect(()=>{
    //componentWillUnmount ()
},[])

useEffect(()=>{
    return ()=>{
        //componentWillUnmount () 组件销毁时执行
        // 实际使用中，由于副效应函数默认是每次渲染都会执行，所以清理函数不仅会在组件卸载时执行一次，每次副效应函数重新执行之前，也会执行一次，用来清理上一次渲染的副效应
        // useEffect() 的注意点
        // 使用useEffect()时，有一点需要注意。如果有多个副效应，应该调用多个useEffect()，而不应该合并写在一起。

    }
})

// useEffect和useLayoutEffect的区别
// 这个是用在处理DOM的时候,当你的useEffect里面的操作需要处理DOM,并且会改变页面的样式,就需要用这个,
// 否则可能会出现出现闪屏问题, useLayoutEffect里面的callback函数会在DOM更新完成后立即执行,但是会在浏览器进行任何绘制之前运行完成,阻塞了浏览器的绘制.
