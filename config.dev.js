let path = require('path');
let htmlplugin = require('html-webpack-plugin');
let minicss = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    plugins: [
        new htmlplugin({ template: './src/views/index.pug' }),
        new minicss()
    ],

    module: {
        rules: [
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader','resolve-url-loader'] },
            { test: /\.pug$/i, use: ['pug-loader'] },
            { test: /\.jpg$/i, use: [{ loader: 'file-loader' }] }
            
        ]
    },
    
        
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    }
}