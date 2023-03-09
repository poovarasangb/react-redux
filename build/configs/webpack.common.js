const { resolve } = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV === "production";

const {
    entryFile, srcJsPath, portToListen, outputPath, srcCssPath,
    srcImgPath
} = require("../utils.js");

module.exports = () => ({
    mode: 'development',
    entry: {
        [entryFile]: resolve(srcJsPath, "index.js")
    },

    output: {
        filename: (module) =>
            ((isProduction && module.chunk.name.indexOf("main") === -1) ?
                "js/[name].[contenthash].js" : "js/[name].js"),
        chunkFilename: isProduction ? "js/[name].[contenthash].js" : "js/[name].js",
        path: outputPath
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            js: srcJsPath,
            scss: srcCssPath
        }
    },

    devServer: {
        static: {
            directory: outputPath
        },
        devMiddleware: {
            writeToDisk: true
        },
        port: portToListen,
        hot: true,
        liveReload: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            favicon: resolve(srcImgPath, "redux.svg")
        }),
        new MiniCssExtractPlugin({}),
        new ESLintPlugin({
            context: srcJsPath
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                use: {
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'jsx',
                        target: 'es2015',
                        jsx: 'automatic'
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        esModule: false,
                        url: true,
                        sourceMap: false
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false,
                        implementation: require('sass')
                    }
                }]
            }
        ]
    }
});
