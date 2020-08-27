const path = require('path');

// Plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            "@plugins": path.resolve('./plugins'),
            "@utils": path.resolve('./utils'),
            "@redux": path.resolve('./redux'),
            "@components": path.resolve('./src/components')
        }
    }
}