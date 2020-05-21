let path = require('path');
let htmlplugin = require('html-webpack-plugin');
let minicss = require('mini-css-extract-plugin');
let manifest = require('webpack-manifest-plugin');


module.exports = {
    mode: 'production',
    plugins: [
        new manifest(),
        new htmlplugin({ template: './src/views/index.pug' }),
        new minicss()
        
    ],
    module: {
        rules: [
            { test: /\.s[ca]ss$/i, use: [minicss.loader, 'css-loader', 'sass-loader'] },
            { test: /\.pug$/i, use: ['pug-loader'] },
            { test: /\.(jpg|png|svg|gif)$/i, use: [{ loader: 'file-loader', options:{name:'[name].[ext]', outputpath: 'Asserts/images/', publicpath: 'Asserts/images/'} }] }

        ]
    },
    
        
}