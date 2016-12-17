/**
 * Created by jmoor6 on 12/13/16.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};