# https://blog.csdn.net/qq_37916164/article/details/123693227
# vue的优缺点
> vue的优点：虚拟dom、组件化，响应式，数据与视图分开
> vue的缺点：单页面不利于seo，首屏加载时间长

# Vue和React的异同点
> 相同点：
> 都使用了虚拟dom
> 都是组件化开发
> 都是单向数据流
> 不同点：
> react是jsx，vue是template
> react数据是单向绑定，vue是双向绑定
> react状态管理是redux，vue是vuex

# mvvm是什么，和mvc有什么区别
> MVC
> Model(模型)：负责从数据库获取数据
> View(视图)：负责展示数据
> Controllerr(控制器)：用户交互的地方，例如点击事件
> 思想：Controllerr将model的数据展示在view上

> MVVM
> Model(模型)：负责从数据库获取数据
> View(视图)：负责展示数据
> VM(ViewModel) ViewModel负责把Model的数据同步到View显示出来（数据绑定），还负责把View的修改同步回Model(事件监听实现)

>区别
> 当Model改变的时候，mvc需要手动触发视图更新，mvvm是自动触发视图更新

# 为什么data是个函数，并且返回一个对象
> 因为一个组件可能会多处调用，，这样做可以避免数据污染

# vue的修饰符
> .trim
> .number
> .enter
> .up
> .down
> .stop：阻止事件冒泡
> .prevent：阻止默认事件
# vue 内部指令
> v-show
> v-if
> v-else
> v-for
> v-model
> v-once

# 组件之间的传值
> 父子之间传值 props
> 子父之间传值 $emit('事件',参数)
> 兄弟之间传值  eventBus bus = new Vue；bus.$on('事件',callback)；bus.$emit('事件'，参数)

# v-if 和v-show的区别
> 相同：都可已控制元素的隐藏
> 不同：
> v-if是直接添加或删除元素节点，v-show是display：none
> v-if适用于条件不太可能改变的场景，v-show适用于频繁切换的场景
> v-if有更高的切换消耗过程，v-show有更高的初始化渲染消耗

# computed和watch之间的区别
> wacth处理场景：一个数据影响多个数据
> computed处理场景：多个数据影响一个数据
> computed中的函数所依赖的属性没有发生变化，那么调用当前的函数的时候会从缓存中读取，而watch在每次监听的值发生变化的时候都会执行回调
> computed传参数使用闭包传参，返回一个函数

# vue的生命周期
> https://blog.csdn.net/weixin_45791692/article/details/124045505
# v-if和v-for不建议在一起使用
> 因为v-for的优先级大于v-if，所以每次渲染的时候，每次都会先循环，在进行条件判断，而又因为v-if会根据渲染条件为ture或false来决定渲染与否的,所以如果将v-if 和 v-for 用在一起会特别消耗性能
> 解决办法，在渲染前把不要的进行过滤掉。

# vuex  https://blog.csdn.net/qq_56989560/article/details/124706021
> module 模块
> state
> action 
> mutation
> getter
# 不需要响应式的数据应该怎么处理
> 将数据定义在data之外


# watch有哪些属性
> 监听基本数据类型
> watch:{value(){//处理逻辑}}
> 监听引用数据类型时
> wacth:{
    obj:{
        handler(){
            处理逻辑
        },
        deep:true,//是否深度监听
        immediate:true  //是否初始化执行handler函数
    }
  }

# vue响应式原理

# 为什么只对对象进行劫持，而对数组进行方法重写
> 考虑性能，因为对象最多也就几十个属性，拦截起来数量不多，数组可能有成百上千项，拦截起来非常耗性能，所以直接重写数组原型上的方法

# 如果子组件改变props里的数据会发生什么，
> 基础类型：如果父传给子的是基础类型，修改则会报错
> 引用类型：如果父传给子的是引用类型，修改属性会同时修改父组件的数据

# Vue.set方法的原理
> Vue.set(target, key, value)
> 判断target是不是数组，如果是，则执行splice(key,1,value)
> 判断target是对象的话，判断key在target里面是不是存在，存在直接修改；不存在，进行响应式处理

# Vue的computed和watch的原理？

# Vue的模板编译原理？

# nextTick的原理？

# vue虚拟dom和diff算法  https://blog.51cto.com/u_15091652/2603176
> 如果是首位比较相等，那么比较的开头索引+1
> 如果是在末尾比较成功，那么比较的结束索引-1，当开头索引大于结束索引时说明比较已经结
> while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx){}
> if(oldStartIdx > oldEndIdx ){//新增}
> if( newStartIdx > newEndIdx){//删除}

# watch监听一个对象时，如何排除某些属性的监听
> ounted() {
    Object.keys(this.params)
      .filter((_) => !["c", "d"].includes(_)) // 排除对c，d属性的监听
      .forEach((_) => {
        this.$watch((vm) => vm.params[_], handler, {
          deep: true,
        });
      });
},
# 路由钩子函数
> beforeEach：跳转路由前
> to：将要跳转进入的路由对象
> from：将要离开的路由对象
> next：执行跳转的方法

> afterEach：路由跳转后
> to：将要跳转进入的路由对象
# 路由独享钩子
routes: [
  {
    path: '/xxx',
    component: xxx,
    beforeEnter: (to, from, next) => {
      
    }
  }
]
# 组件内路由钩子
> beforeRouteEnter(to, from, next)：跳转路由渲染组件时触发
> beforeRouteUpdate(to, from, next)：跳转路由且组件被复用时触发
> beforeRouteLeave(to, from, next)：跳转路由且离开组件时触发