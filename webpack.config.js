const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const htmlWebpacPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'dev'

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: {
        app: [path.resolve(__dirname, 'src/main.js')]
    },
    output: {
        filename: '[name].bundle.[hash:5].js',
        path: path.resolve(__dirname, 'dist/')
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.(c|sc|sa)ss$/,
            exclude: /node_modules/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new htmlWebpacPlugin({
            template: 'index.html'
        })
    ]
}
