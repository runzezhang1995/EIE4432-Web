const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        login: path.resolve(__dirname, 'src/client/login.js'),
        register: path.resolve(__dirname, 'src/client/register.js'),
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, 'build/frontend'),
        publicPath: '/EIE4432-WEB/build/frontend/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
};

