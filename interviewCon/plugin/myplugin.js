class myPlugin{
    /**
     * 清楚打包后js文件里面的注释
     */
    apply(compiler){
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