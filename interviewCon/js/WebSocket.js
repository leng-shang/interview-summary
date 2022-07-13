/**
WebSocket是一种支持双向通讯的网络通信协议；
即：服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，属于服务器推送技术的一种。
特点：
（1）建立在 TCP 协议之上，服务器端的实现比较容易。
（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
（3）数据格式比较轻量，性能开销小，通信高效。
（4）可以发送文本，也可以发送二进制数据（blob对象或Arraybuffer对象）
（5）收到的数据类型 可以使用binaryType 指定， 显式指定收到的二进制数据类型
（6）没有同源限制，客户端可以与任意服务器通信。
（7）协议标识符是ws（握手http）（如果加密，则为wss（tcp +TLS)），服务器网址就是 URL。
*/
/**
 * WebSocket是HTML5的新特性，常用于服务器推送消息给客户端
<script>
    // 协议为ws，和http配合 wws，和HTTPS配合使用
    let ws = new WebSocket('ws://localhost:8888')
    // 连接成功就会执行回调函数
    ws.onopen = function (params) {
      console.log('客户端连接成功')
      // 向服务器发送消息
      ws.send('hello')
    }
    // 必须用属性的方式监听事件，监听函数的参数是事件对象
    ws.onmessage = function (e) {
      console.log('收到服务器响应', e.data)
    }
</script>
*/
//服务器
/**
 * 我们使用node搭建HTTP服务，使用express和ws第三方模块
let express = require('express')
let app = express()
app.use(express.static(__dirname))
// http服务器
app.listen(8080, () => {
  console.log('point in 8080!')
})

let WebSocketServer = require('ws').Server
// 用WS 模块启动一个websocket服务器，监听8888端口
let wsServer = new WebSocketServer({
  port: 8888
})
// 监听客户端的链接请求， 当客户端链接服务器的时候，就会触发connection事件
// socket代表一个客户端，不是所有客户端共享的，而是每个客户端都要一个socket
wsServer.on('connection', (socket) => {
  console.log('客户端连接成功')
  // 监听对方发送的消息
  socket.on('message', (message) => {
    console.log('接收到客户端的消息', message)
    socket.send('服务器响应', message)
  })
})
 
*/