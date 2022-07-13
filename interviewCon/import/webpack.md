# webpack
谈谈你对Webpack的看法
    1. Webpack是一个模块打包工具，可以使用它管理项目中的模块依赖，并编译输出模块所需的静态文件。
    2. 它可以很好地管理、打包开发中所用到的HTML,CSS,JavaScript和静态文件（图片，字体）等，让开发更高效。
    3. 对于不同类型的依赖，Webpack有对应的模块加载器，而且会分析模块间的依赖关系，最后合并生成优化的静态资源
Webpack的基本功能有哪些？
    1. 代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等等
    2. 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等
    3. 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载
    4.模块合并：在采用模块化的项目有很多模块和文件，需要构建功能把模块分类合并成一个文件
    5. 自动刷新：监听本地源代码的变化，自动构建，刷新浏览器
    6. 代码校验：在代码被提交到仓库前需要检测代码是否符合规范，以及单元测试是否通过
    7. 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。
说一下webpack 构建流程
    一、初始化流程
        1.从配置文件和 Shell 语句中读取与合并参数，得出最终的参数配置文件默认下为 webpack.config.js，也或者通过命令的形式指定配置文件，主要作用是用于激活webpack 的加载项和插
        2.webpack 会将 webpack.config.js 中的各个配置项拷贝到一个 options 对象中，并加载用户配置的 plugins，然后开始初始化 Compiler 编译对象，该对象掌控者 webpack 声明周期，不执行具体的任务，只是进行一些调度工作
    二、编译构建流程
        1.确定入口：根据配置中的entry找出所有的入口文件
        2.编译模块：从入口文件出发，调用所有配置的loader对模块进行编译，在找出该模块依赖的模块，在递归本步骤直到所有入口依赖的文件都经过处理
        3.完成模块编译：经过编译模块后，得到了每个模块被编译之后的最终内容以及他们之间的依赖关系
    三、输出：
        根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk，再将每个chunk转换成一个单独的文件加入输出列表中。
什么是 loader? 什么是 plugin?
    loader：模块转换器，webpack将一切文件视为模块，但webpack只能解析JavaScript文件，而loader作用是让webpack拥有了加载和解析非JavaScript文件的能力
    plugin：在webpack构建流程中的特定时机注入扩展逻辑，让它具有更多的灵活性。在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果
    用法的区别：
    Loader在module.rules中配置。也就是说他作为模块的解析规则而存在。类型为数组，每一项都是一个Object里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数
    Plugin在plugins中单独配置。类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入
webpack 常见的plugin有哪些
    1.html-webpack-plugin可以根据模板自动生成html代码，并自动引用css和js文件
    2.mini-css-extract-plugin : 分离样式文件，CSS 提取为独立文件，支持按需加载
    3.commons-chunk-plugin：提取公共代码
webpack有哪些常⻅的Loader
    1.file-loader：把⽂件输出到⼀个⽂件夹中，在代码中通过相对 URL 去引⽤输出的⽂件
    2.url-loader：和 file-loader 类似，但是能在⽂件很⼩的情况下以 base64 的⽅式把⽂件内容注⼊到代码中去
    3.source-map-loader：加载额外的 Source Map ⽂件，以⽅便断点调试
    4.image-loader：加载并且压缩图⽚⽂件
    5.babel-loader：把 ES6 转换成 ES5
    6.css-loader：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性
    7.style-loader：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS。
    8.eslint-loader：通过 ESLint 检查 JavaScript 代码
怎么实现plugin或loader
如何⽤webpack来优化前端性能？
    1.压缩代码：删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤webpack的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩JS⽂件， 利⽤ cssnano （css-loader?minimize）来压缩css
    2.利⽤CDN加速: 在构建过程中，将引⽤的静态资源路径修改为CDN上对应的路径。可以利⽤webpack对于 output 参数和各loader的 publicPath 参数来修改资源路径
    提取公共代码。用CommonsChunkPlugin插件
    提取公共第三⽅库: SplitChunksPlugin插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码
webpack 的热更新原理
    热更新又称热替换（Hot Module Replacement）缩写为 HMR，基于 webpack-dev-server。当你对代码修改并保存后，将会对代码进行重新打包，并将改动的模块发送到浏览器端，浏览器用新的模块替换掉旧的模块，去实现局部更新页面而非整体刷新页面。