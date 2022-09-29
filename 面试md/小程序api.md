## 看taro
# 网络请求
> wx.request(Object object)
# 分享
> onshareAppMessage
# 获取信息
> 获取设备信息 wx.getSystemInfo
> 获取地理位置信息  wx.getLocation
# 存储
> 同步存储
> 存 wx.setStorageSync(string key, any data)
> 取 wx.getStorageSync(string key)
> 移除某一项 wx.removeStorageSync(string key)
> 清楚所有 wx.clearStorageSync()
# 跳转
> 跳tabBar页面 wx.switchTab
> 保留当前页面,跳指定页面 wx.navigateTo
> 返回上一个页面 wx.navigateBack
> 关闭所有页面，打开到应用内的某个页面 wx.reLaunch
> 跳转小程序 wx.navigateToMiniProgram
# 数据传递
> 获取参数
> 微信小程序 wx.getCurrentPages()
> taro taro.getCurrentInstance().router.params
> 传递参数 url拼接

# ios和安卓的兼容性
> 日期格式 
> 2022-09-19 安卓支持，ios不支持
> 2022/09/19 安卓和ios都支持
> 全面屏的安全距离
> padding-bottom: constant(safe-area-inset-bottom) 兼容 IOS<11.2
> padding-bottom: env(safe-area-inset-bottom)   兼容 IOS>11.2)。


