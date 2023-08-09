//markdown转成html
const marked = require(marked)  //插件未安装
module.exports = (source)=>{
    const html = marked(source)  // 变成html字符串
    return html
    // 不使用html-loader会存在换行符和引号的问题
    // 在使用html-loader将html文档以字符串形式导出
}