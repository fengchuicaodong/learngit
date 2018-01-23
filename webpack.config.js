const path = require('path');
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
//path.resolve用于将相对路径转为绝对路径，它可以接受多个参数，依次表示所以进入的路径
//直到将最后一个参数转为绝对路径。如果根据参数无法得到绝对路径，
// 就以当前所在以路径为基准。除了根目录，该方法的返回值都不带斜杠
module.exports = {
    //context: path.resolve(__dirname, 'app'),
    //resolve: {
    //    modules: [
    //        path.resolve(__dirname, 'node_modules')
    //    ]
    //},
    //entry: './app.js',
    entry: './app/app.js',//唯一的文件入口
    output: {//输出目录
        path: path.resolve(__dirname, 'dist'),//打包后的JS文件存放的地方
        filename: 'bundle.js',//打包后的JS文件名
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    }
                }
            },
            {
                test: /index\.html/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name (file) {
                            return 'index.[ext]'
                        }
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }],
            },
        ]
    },
    //webpack-dev-server配置
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,//源文件改变,会自动刷新页面
        port: 1234,//设置默认监听端口，如果省略，默认为"8080"
    },
};