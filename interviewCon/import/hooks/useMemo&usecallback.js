
//useMemo、useCallBack
//当只有一个参数时，监听所有
//第二个参数时数组，里面是监听项
//区别
// useMemo返回的是结果，useCallback返回的是函数
const myMemo = useMemo(()=>{
    return {a:1}
},[])
console.log(myMemo) //{a:1}

const myCallBack = useCallback(()=>{
    return {a:1}
},[])

console.log(myCallBack) //function(){return {a:1}}