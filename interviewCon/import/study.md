## 学习要点     视频
#   1.看看vue2 和 vue3

#   2.看看webpack ， vite
        
#   3.看看node.js

#   4.看看TS


#  重要知识点   手撕代码
#   1.掌握Promise源码       已Ok     /手撕代码/promise/index.js

#   2.掌握 apply bind call的源码 已Ok /手撕代码/apply&call&bind.js

#   3.掌握防抖和节流的源码  已Ok

#   4.深拷贝              已Ok

#   5.数组排序             已Ok

#   6.重点看下reduce       
    arr.reduce((prev,item,index,arr)=>{
        prev 必需。累计器累计回调的返回值; 表示上一次调用回调时的返回值，或者初始值 init;
        cur 必需。表示当前正在处理的数组元素；
        index 可选。表示当前正在处理的数组元素的索引，若提供 init 值，则起始索引为- 0，否则起始索引为1；
        arr 可选。表示原数组；
        init 可选。表示初始值。
    },init)
    应用：数组求和，数组去重，数组中每个元素出现的次数

# 面试题
# html css 
    1.https://juejin.cn/post/6984444674563899422

# js
    js为什么是单线程的？
        js是作为浏览器的脚本语言，主要是实现用户和浏览器的交互，以及操作dom。决定了js只能是单线程的。
        如果js被设计了多线程，如果有一个线程要修改一个dom元素，另一个线程要删除这个dom元素，此时浏览器就会一脸茫然，不知所措，因此，js只能是单线程的。
    闭包
        概念：函数嵌套函数，外层函数一定有局部变量，且内层函数一定操作了外层函数的这个变量
        优点：可以重复使用函数外部变量，并且不会造成变量污染
        缺点：闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，可能会导致内存泄露

    继承    继承.js

    原型和原型链
        原型：每个构造函数都有prototype属性，每个构造函数的实例都有__proto__属性
        原型链：构造函数实例的__proto__指向构造函数的protoType
        判断：可以通过constructor来判断该实例是否属于该构造函数
        constructor缺点：当构造函数的原型改变的时候，会造成判断错误

    数据类型判断    ./检测数据类型.js
    数组去重       /手撕代码/数组去重.js

    垃圾回收
        引用计数：
        标记清除：
    前端路由实现方式：
        https://juejin.cn/post/7127143415879303204
# vue框架

# react框架
    react 生命周期  /react生命周期.js
    this.setState是同步的还是异步的
        在合成事件和钩子函数中是异步的
        在定时器和原生dom事件中是同步的
        setState本身并不是异步，只是因为react的性能优化机制体现为异步
    key值和diff算法
        diff算法：
            tree diff —— 层级对比
                针对的是react Dom节点跨层级的操作，react会进行先创建后删除。所以应该减少这种操作
            component diff —— 组件对比
                同一层级间的react组件进行比较
                如果是同一类型的组件，继续进行向下比较
                如果不是同一类型的组件，则将组件判断为dirty component(脏组件)，react会替换下整个组件下的所有节点，即销毁原组件，创建新组件
            element diff —— 节点对比（数组遍历）
                对于同一层级的所有子节点，diff提供了三种节点操作，INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）。
                允许开发者对同一层级的同组子节点，添加唯一 key 进行区分
        key：key 是唯一的标识，用来帮助 React 识别哪些内容被更改、添加或者删除。key 需要写在用数组渲染出来的元素内部，并且需要赋予其一个稳定的值，提高了React性能和渲染效率。
            key的具体执行过程：
            旧：A  B  C   D
            新：B  E  C   A
            按新集合中顺序开始遍历：
                1.B在新集合中 lastIndex(类似浮标) = 0, 在旧集合中 index = 1，index > lastIndex 就认为 B 对于集合中其他元素位置无影响，不进行移动，之后lastIndex = max(index, lastIndex) = 1
                2.新集合中取得E,发现旧中不存在E，在 lastIndex处创建E，lastIndex++
                3.在旧集合中取到C，C不移动，lastIndex=2
                4.在旧集合中取到A，A移动到新集合中的位置，lastIndex=2
                5.完成新集合中所有节点diff后，对旧集合进行循环遍历，寻找新集合中不存在但就集合中的节点(此例中为D)，删除D节点
    虚拟dom:
        即ReactElement对象，虚拟 DOM (VDOM)是真实 DOM 在内存中的表示，由于真实DOM操作非常消耗性能，而react把真实原生DOM转换成了js对象，
        每次数据更新后，重新计算虚拟DOM，并和上一次生成的虚拟Dom进行对比，对发生变化的部分做批量更新，然后再将虚拟dom对象渲染成真实Dom。
    虚拟Dom的组成：ReactElement对象
        type：元素的类型，可以是原生html类型（字符串），或者自定义组件（函数或class）（其中，在jsx中使用的原生元素标签，其type为标签名。而如果是函数组件或class组件，其type就是对应的class或function对象）
        key：组件的唯一标识，用于Diff算法，
        ref：用于访问原生dom节点
        props：传入组件的props，chidren是props中的一个属性，它存储了当前组件的孩子节点，可以是数组（多个孩子节点）或对象（只有一个孩子节点）
        owner：当前正在构建的Component所属的Component
        self：（非生产环境）指定当前位于哪个组件实例
        _source：（非生产环境）指定调试代码来自的文件(fileName)和代码行数(lineNumber)

    fiber机制：利用浏览器 requestIdleCallback 将可中断的任务进行分片处理，每一个小片的运行时间很短，这样唯一的线程就不会被独占
    每个节点有三个指针：分别指向第一个子节点、下一个兄弟节点、父节点。
    遍历规则：
        1.从根节点开始，依次遍历该节点的子节点、兄弟节点，如果两者都遍历了，则回到它的父节点
        2.当一个节点的所有子节点遍历完成，才认为该节点遍历完成
    人类能感知到最低限度每秒60帧的频率划分时间片，这样每个时间片就是 16ms。
    浏览器在一帧内可能会做执行下列任务，而且它们的执行顺序基本是固定的：处理用户输入事件、JavaScript执行、requestAnimation调用、布局（layOut）、绘制（paint），如果浏览器在一帧的时间（16ms）处理完上述的任务，还有剩余的时间，浏览器就会调用requestIdleCallback的回调
    
# taro框架

# dva

# umi

# weex 框架
    http://emas.weex.io/zh/docs/components/a.html
# weex UI
    https://apache.github.io/incubator-weex-ui/#/cn/packages/wxc-page-calendar/

# 区别

#  1.vue和react之间的区别
        相同点：
            都使用了虚拟DOM
            都是单向数据流
            都是组件化开发
        不同点：
            react使用的是jsx，vue是template
            react数据是单向绑定，vue是双向绑定
            react的状态管理是redux，vue是vuex
#  2.C端遇到的常见的andiro和ios的兼容性问题
> 日期格式
#  3.你遇到的最大的问题是什么，你是怎么解决的
> 表单验证
> 定时器
#  4.你是如何看待前端这个行业的，为什么选择了这个行业
> 前端应该越来越重要，因为人的审美越来越高，所以，前端的页面处理要求更高，
> 我们使用一个东西的时候,希望交互简单一点,花最少的时间明白他是怎么操作的,所以需要前端来处理一些逻辑
#  5.浅谈一下你觉得前端的发展趋势，未来方向

# vue和react提高用户响应速度区别
    vue：
        优化每个任务，让它有多快就多快。挤压CPU运算量(模版，配合响应式机制可以让Vue可以精确地进行节点更新)
    react：
        快速响应用户，让用户觉得够快，不能阻塞用户的交互（fiber)

# vue diff算法和react diff算法的区别
    vue的diff算法对新老虚拟dom进行对比时，是从节点的两侧向中间对比；如果认为节点的key值与元素类型相同，属性值不同，就会认为是不同的节点，就会删除重建
    
    react的diff算发对新老虚拟dom进行对比时，是从节点的左侧开始对比，就好比将新老虚拟dom放入两个栈中，一对多一次对比；如果节点的key值和元素类型相同，属性值不同，react会认为是同类型节点，只是修改节点属性

    相同点：都只进行同级比较，忽略了跨级操作；