# Vue生命周期   https://blog.csdn.net/weixin_45791692/article/details/124045505
# beforeCreate 
> 创建前执行，data和methods的数据还没有初始化
> 不能访问data和methods，一般这个阶段不进行操作
# created
> 创建完成，data和methods都初始化完成
> 对数据进行初始化，页面传参可以在这个钩子里面接收
# beforeMount
> 挂载前执行，此时模板编译已经完成

# mounted
> 挂载完成 ，实例已经创建好了，可以获取真实dom
# beforeUpdate
> 更新前
# updated
> 更新完成，数据已经更改完成，dom也重新渲染完成
# beforeDestroy
> 销毁前
# destroyeds
> 销毁完成
> 清除定时器，清除绑定事件