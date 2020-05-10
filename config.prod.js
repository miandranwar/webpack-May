let path = require('path');
let htmlplugin = require('html-webpack-plugin');
let minicss = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    plugins: [
        new htmlplugin({ template: './src/index.html' }),
        new minicss()
    ],
    module: {
        rules: [
            {test: /\.css$/i, use:[minicss.loader, 'css-loader']}
        ]
    },
    
        
}