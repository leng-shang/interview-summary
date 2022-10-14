## webpack
  # 谈谈你对Webpack的看法
   > Webpack是一个模块打包工具，可以使用它管理项目中的模块依赖，并编译输出模块所需的静态文件。
   > 它可以很好地管理、打包开发中所用到的HTML,CSS,JavaScript和静态文件（图片，字体）等，让开发更高效。
   > 对于不同类型的依赖，Webpack有对应的模块加载器，而且会分析模块间的依赖关系，最后合并生成优化的静态资源
  # webpack打包流程
   > 读取webpack配置参数
   > 启动webpack，创建compile对象
   > 从入口文件开始解析(entry)，并且找到可依赖的模块，递归解析，形成依赖关系树
   > 不同文件类型的依赖模块文件使用对应的loader去解析，最终转为js文件
   > 输出资源 根据output配置输出到文件夹下
  # 有哪些常见的Loader？你用过哪些Loader？
   > file-loader 把文件输出到一个文件夹中，在代码中通过相对url去引用输出的文件
   > url-loader  与file-loader类似，区别是用户可以设置一个阈值，文件大于这个值交给file-loader处理，小于这个值返回文件base64编码
   > babel-loader 将es6转成es5
   > image-loader 加载并压缩图片
   > less-loder 将less文件转成css
   > postcss-loader 处理浏览器兼容css样式，通过postcss-preset-env autoprefixer来配置兼容的浏览器
   > css-loader 处理@import和url的外部资源
   > style-loader 将css转换成脚本加载的js代码（js文件加载时，通过style-loader提供的方法将其加载到html中。）
   > esLint-loader 通过 ESLint 检查 JavaScript 代码
  # 有哪些常见的plugin
   > html-webpack-plugin 可以根据模版自动生成html代码，并自动引入js文件
   > mini-css-extract-plugin 将css提取为独立文件
   > terser-webpack-plugin 压缩js文件
  # 什么是 loader? 什么是 plugin?
   > loader 模块转换器，webpack将一起视为模块，webpack只能加载js文件，loader的作用，就是将webpack拥有了可以解析非js文件的能力
   > plugin 是插件，是对webpack的扩展，使webpack更加灵活
   > 用法：Loader在module.rules中配置。也就是说他作为模块的解析规则而存在。类型为数组，每一项都是一个Object里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数
   Plugin在plugins中单独配置。类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入，
  # source map是什么？生产环境怎么用？
   > source map是将编译、压缩、打包后的代码映射回源代码的过程，可以看到错误代码准确信息 和 源代码的错误位置
   > 生产环境 devtools：none  
  # 文件监听
  > webpack 启动监听模式有两种方式，启动webpack命令时，带上--watch参数
  > 在配置webpack.config.js中配置watch：true
  > 原理：轮询判断文件的最后编辑时间是否变化，如果发生了变化，不会立即告诉监听者，而是先缓存起来，等 aggregateTimeout 后再执行。
  # Webpack 的热更新原理
   > https://blog.csdn.net/chern1992/article/details/106893227/
   > https://www.cnblogs.com/houxianzhou/p/14743614.html
   > https://zhuanlan.zhihu.com/p/453576439
   > http://www.cncsto.com/article/85139.html
   > 指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用
   > 开起热更新 devServer:{hot:true},plugins:[new webpack.HotModuleReplacementPlugin()]

  # webapack打包hash是如何生成的
   > hash 每个文件具有相同的hash值，文件改变，所有文件的hash值都改变
   > chunkhash 是根据不同的入口进行依赖文件解析，当某个入口文件修改后，会导致本入口文件关联的所有文件的hash值都修改
   > contenthash 每个文件的hash值都是根据自身内容而生成，当某个文件内容修改时，只会修改其本身的hash值，不会影响其他文件的hash值  


# https://juejin.cn/post/6844904094281236487

