// 自定义指令   directive
// directive:{
//     focus:{
//         bind:(el,binding,Vnode)=>{
//             //调用一次   动态样式
            
//         },
//         inserted:(el,binding,Vnode)=>{
//             //被绑定元素插入到节点中掉用     触发行为
//             // el绑定的元素
//             //binding:{value:绑定元素的值，arg：传给指令的参数，modifiers：修饰符}
//             //Vnode 虚拟节点
//         }
//     }
// },
//场景  
//云闪付h5页面跳转    根据参数不同跳转小程序  云闪付rn页  内部路由等

// 过滤器   filter
// fiters:{
//     filtext:(arguments)=>{

//     }
// }
//使用场景  
//比如保留小数点后几位、数字打点、文本格式化、时间格式化之类的等

//全局混入  mixin
// Vue.minxin({
//     created(){

//     },
//     methods:{

//     }
// })
//使用场景
//1。显示当前距离与商家之间的距离，对距离进行处理，大于1000m显示1km
//2。点击按钮距离屏幕指定的距离

//计算属性  computed    注意：data中不能有这个属性，否则计算属性会失效
// computed:{
//     // abc:()=>{
//     //     return 
//     // },
//     abc:{
//         get:()=>{

//         },
//         set:()=>{

//         }
//     }
// }
//使用场景


//监听  watch
// watch:{
//     // 'a':()=>{},
//     'a':{
//         hander:function(){

//         },
//         deep:true,
//         immediate:true
//     }
// }
// 3、immediate属性
// 　　在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调，默认为false
// 4、deep属性
// 　　监听对象或对象中的属性，需要使用deep，即深度监听

//使用场景  


//计算属性和侦听器的区别
//1.