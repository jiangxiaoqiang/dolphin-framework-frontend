require('babel-polyfill');
process.env.NODE_ENV = 'development';
process.env.__DEV_TOOLS__=false;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var basePath = path.resolve(__dirname, '..');

var commonConfig = require('./common');
commonConfig.devtool = 'eval';// 'eval', // 'eval-source-map',//配置生成Source Maps，选择合适的选项

commonConfig.plugins = commonConfig.plugins.concat([
    new HtmlWebpackPlugin({
        filename: basePath + '/dist/index.html',
        template: basePath + '/src/entries/index.html',
        chunks: ['commons', 'react', 'console']
    })
]);
module.exports = commonConfig;
