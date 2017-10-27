const webpack = require('webpack');
const path = require('path');
//const fs = require("fs");
const nodeExternals = require('webpack-node-externals');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: ['babel-polyfill', './server/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/server'),
        filename: 'server.bundle.js'
    },
    node: {fs: "empty"},
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/server'),
            use: [{
                loader: 'babel-loader',
                options: {
                    ignore: '/node_modules/',
                    presets: [
                        ['es2015', 'es2016'], 'es2017'
                    ]
                }
            }]
        }]
    }
};

module.exports = config;
