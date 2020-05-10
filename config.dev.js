let path = require('path');


module.exports = {
    mode: 'development',
    module: {
        rules: [
            {test: /\.css$/i, use:['style-loader', 'css-loader']}
        ]
    },
    
        
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    }
}