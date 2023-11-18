const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/,
            use: { loader: 'babel-loader' },
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader']
        }]
    },
    devtool: 'eval-source-map',
}