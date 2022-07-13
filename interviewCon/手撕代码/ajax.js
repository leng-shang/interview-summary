const ajax = {
    get(url, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)// 第三个参数异步与否
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                fn(xhr.responeText)
            }
        }
        xhr.send()
    },
    post(url, data, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                fn(xhr.responeText)
            }
        }
        xhr.send(data)
    }
}


const myAjax={
    get(url,fn){
        let xhr = new XMLHttpRequest()
        // xhr.open(methods,url,async)
        // 1、method 参数是用于请求的 HTTP 方法。值包括 GET 、POST、HEAD、PUT、DELETE（不区分大小写）
        // 2、url 参数是请求的主体。大多数浏览器实施了一个同源安全策略，并且要求这个URL 与包含脚本的文本具有相同的主机名和端口
        // 3、async 参数指示请求使用应该异步执行。如果这个参数为 false，代表请求是同步的，后续对 send() 的调用将阻塞，
        //直到响应完全接受；如果这个参数是 true 或省略，请求是异步的，且通常需要一个 onreadystatechange 事件句柄
        xhr.open('get',url)
        xhr.onreadystatechange=()=>{
            // 1、未初始化状态。在创建完XMLHttpRequest对象时，该对象处于未初始化状态，此时XMLHttpRequest对象的readyState属性值为0。
            // 2、初始化状态。在创建完XMLHttpRequest对象后使用open()方法创建了HTTP请求时，该对象处于初始化状态。此时XMLHttpRequest对象的readyState属性值为1。
            // 3、发送数据状态。在初始化XMLHttpRequest对象后，使用send()方法发送数据时，该对象处于发送数据状态，此时XMLHttpRequest对象的readyState属性值为2。
            // 4、接收数据状态。Web服务器接收完数据并进行处理完毕之后，向客户端传送返回的结果。此时，XMLHttpRequest对象处于接收数据状态，XMLHttpRequest对象的readyState属性值为3。
            // 5、完成状态。XMLHttpRequest对象接收数据完毕后，进入完成状态，此时XMLHttpRequest对象的readyState属性值为4。
            //此时接收完毕后的数据存入在客户端计算机的内存中，可以使用responseText属性或responseXml属性来获取数据
            if(xhr.readyState==4&&xhr.status==200){
                    fn(xhr.responseText)
            }
        }
        xhr.send()
    },
    post(url,data,fn){
        let xhr = new XMLHttpRequest()
        xhr.open('POST',url)
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4&&xhr.status==200){
                fn(xhr.responseText)
            }
        }
        xhr.send(data)
    }
}