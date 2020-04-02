const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                }
            },
            {
                test: /\.sc|ass$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                              ctx: {
                                cssnano: {},
                                autoprefixer: {}
                              }
                            }
                          }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true // il est indispensable d'activer les sourcemaps pour que postcss fonctionne correctement
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: '[id].css',
        })
    ],
}