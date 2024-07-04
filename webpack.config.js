const path = require('path');

module.exports = {
    entry: {
        script: './script.js',
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'result'),
        filename: '[name].min.js'
    },
    module: {
        rules:[{
            test: /\.css$/, //fala em quais arquivos vai executar o loader
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: 
                        ["@babel/preset-env"]
                }
            }
        }]
    },
    resolve: {
        extensions: ['.js']
    }
    
}