//函数柯里化
//柯里化是一种将使用多个参数的一个函数转换成多个使用一个参数的函数
/**
 * 将函数柯里化
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数，默认为原函数的形参个数
 */
function curry(fn,len = fn.length,...args) {
    return _curry.call(this,fn,len)
    // return function (...params) {
    //     let _args = [...args,...params];
    //     if(_args.length >= len){
    //         return fn.apply(this,_args);
    //     }else{
    //         return curry(fn,len,..._args)
    //     }
    // }
}
/**
 * 中转函数
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数
 * @param args  已接收的参数列表
 */
 function _curry(fn,len,...args) {
    return function (...params) {
        let _args = [...args,...params];
        if(_args.length >= len){
            return fn.apply(this,_args);
        }else{
            return _curry.call(this,fn,len,..._args)
        }
    }
}
function checkByRegExp(regExp,string) {
    return regExp.test(string);  
}

//进行柯里化
let _check = curry(checkByRegExp);
//生成工具函数，验证电话号码
let checkCellPhone = _check(/^1\d{10}$/);
//生成工具函数，验证邮箱
let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

console.log(checkCellPhone('18642838455')); // 校验电话号码
checkCellPhone('13109840560'); // 校验电话号码
checkCellPhone('13204061212'); // 校验电话号码

checkEmail('test@163.com'); // 校验邮箱
checkEmail('test@qq.com'); // 校验邮箱
checkEmail('test@gmail.com'); // 校验邮箱


