const webpack = require('webpack');

let config = {
    entry: {
        'vue2-bs3-dropdown': './src/main.ts',
        'vue2-bs3-dropdown.min': './src/main.ts'
    },
    output: {
        path: './dist/js',
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' }
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/, minimize: true
        })
    ],
    ts: {
        compilerOptions: {
            declaration: false
        }
    },
    externals: {
        vue: 'Vue'
    }
};

module.exports = config;
