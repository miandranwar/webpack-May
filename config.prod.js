let path = require('path');
let htmlplugin = require('html-webpack-plugin');
let minicss = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    plugins: [
        new htmlplugin({ template: './src/views/index.pug' }),
        new minicss()
    ],
    module: {
        rules: [
            { test: /\.s[ac]ss$/i, use: [minicss.loader, 'css-loader', 'sass-loader'] },
            { test: /\.pug$/i, use: ['pug-loader'] },
            { test: /\.(jpg|png|svg|gif)$/i, use: [{ loader: 'file-loader', options:{name:'[name].[ext]', outputpath: 'images/', publicpath: 'images/'} }] }

        ]
    },
    
        
}