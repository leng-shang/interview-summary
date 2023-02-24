a=0
Object.defineProperty(window,'a',{
    set:function(){

    },
    get:function(){
        return ++a
    }
})

if(a==1&&a==2&&a==3){
    console.log(1231313)
}