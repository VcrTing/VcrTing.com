const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: './dist/main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { preset: ['es2015'] },
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        })
    ]
}