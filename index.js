function myBind(context){
    let oArgus = [...arguments].slice(1)
    let _this = this
     return function(){
        return _this.call(context,...oArgus,...arguments)
     }
}

fn.bind()()