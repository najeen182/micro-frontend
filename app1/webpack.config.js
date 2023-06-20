const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');
const deps = require("../app1/package.json").dependencies;

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        port: process.env.PORT || 3000,
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
