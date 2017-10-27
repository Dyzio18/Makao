const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './client/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'client.bundle.js'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/client'),
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2016', 'es2017', 'react'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    }
};

module.exports = config;
