let path = require('path');


module.exports = {
    mode: 'development',
    module: {
        rules: [
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.pug$/i, use: ['pug-loader'] }
        ]
    },
    
        
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    }
}