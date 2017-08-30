const path = require('path');

module.exports = {
    entry: './src/views/page.jsx',
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
              test: /\.(png|jpg)$/,
              loader: 'url-loader'
            }
        ],
    }
};
