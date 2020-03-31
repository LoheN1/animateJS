const webpack = require('webpack');
const path = require('path');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        filename: './src/index.js'
    },
    output: {
        filename: 'script.js',
        publicPath: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:  {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MinCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist/',
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MinCssExtractPlugin({
            filename: 'style.css'
        })
    ],
}