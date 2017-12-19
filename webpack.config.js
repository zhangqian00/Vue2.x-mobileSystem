'use strict';
const path = require('path'); // 引入路径插件
const htmlWebpackPlugin = require('html-webpack-plugin'); // 引入模板渲染插件
module.exports = {
    //指定入口
    entry: {
        main: './main.js'
    },
    // 指定出口
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        // 对应文件加载器
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            }, {
                test: /\.(jpg|ttf|svg|png)$/,
                loader: 'url-loader?limit=4096'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                //排除路径
                exclude: /node_modules/,
                //更为推荐的方式是在.bablerc文件中配置以下设置
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },{
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
        })
    ],
    // 如果服务器遇到跨域问题，下面是配置代理，解决跨域
    devServer: { //配置webpack-dev-server -> express服务器的选项
        // host: 'localhost', // A
        // port: 9999,
        // //代理 
        // proxy: { //this.$ajax.get('/v2/xxxx')
        //     '/v2/*': { // 如果当前请求的url 是以/v2开头/xxxxxx,则默认请求127.0.1/v2/xxx
        //         changeOrigin: true, //changeOrigin就把当前本地express服务器由A变为向B请求并返回
        //         target: 'https://api.douban.com/', //B
        //     }
        // }

    }

}
