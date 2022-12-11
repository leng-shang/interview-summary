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
  
   > file-loader 可以用来处理图片，使用file-loader处理的图片会随机生成一个hash值作为图片的名字（讲加载到的模块拷贝到输出目录下）
   > url-loader  与file-loader类似，区别是用户可以设置一个阈值，文件大于这个值交给file-loader处理，小于这个值返回文件base64编码
   > babel-loader 将es6转成es5
   > less-loder 将less文件转成css
   > postcss-loader 处理浏览器兼容css样式，通过postcss-preset-env autoprefixer来配置兼容的浏览器
   > css-loader 加载css文件
   > style-loader 将css代码通过style标签插入到dom中
   > esLint-loader 通过 ESLint 检查 JavaScript 代码
  # 有哪些常见的plugin
   > html-webpack-plugin 可以根据模版自动生成html代码，并自动引入js文件
   > mini-css-extract-plugin 将css提取为独立文件
   > terser-webpack-plugin 压缩js文件
   > optimize-css-assets-webpack-plugin 压缩css文件
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
   > hash 只要有项目文件更改，就会改变hash
   > chunkhash 和webpack打包生成的chunk相关。每一个entry，都会有不同的hash
   > contenthash 和单个文件的内容相关。指定文件的内容发生改变，就会改变hash  

  # webpack model/bundel/chunk得我区别
  > model是模块，一个文件或第三方组件都可以是模块
  > chunk一般只webpack处理的入口文件
  > bundel是指webpack打包产生的资源

# https://juejin.cn/post/6844904094281236487

