var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:'./src/main.js',//main.js中的js可以省略，前面的./不能省
    output:{
        filename:'./dist/[hash]app.js',
        hashDigestLength:8,// 定义hash的长度
    },
    plugins:[
        new HtmlWebpackPlugin
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'../dist'), //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
        port:9000,
        open:true,//自动打开浏览器 生成的html文件并没有在物理磁盘上而是在内存中
    }
}