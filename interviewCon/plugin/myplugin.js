//plugin 是一个函数或一个包含apply方法的对象

class myPlugin{
    /**
     * 清楚打包后js文件里面的注释
     */
    apply(compiler){

        //emit 输出asset 到 output 目录之前执行
        //两个参数，一个是插件名称，一个是执行的回调函数
        compiler.hooks.emit.tap('myPlugin',(compilation)=>{
            for(const name in compilation.asseets){
                if(name.endsWith('.js')){//字符串的方法
                    const content = compilation.asseets[name].source()
                    const withOutComments = content.replace(/\/\*\* + \*\//g,'')
                    compilation.asseets[name]= {
                        source:()=>withOutComments,
                        size:()=>withOutComments.size
                    }
                }
            }
        })
    }
}