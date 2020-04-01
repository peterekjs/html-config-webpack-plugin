/**
 * Common Production Config
 *
 * @param {Required<import("./index.js").HtmlWebpackPluginOptions>} options
 * @returns {{ module: { rules : Array<any> }, plugins: Array<(new (): any)> }}
 */
exports = module.exports = options => ({
    module: {
        rules: [{
            test: /\.html$/i,
            exclude: /\.tpl\.html$/i,
            use: [{
                loader: require.resolve('file-loader'),
                options: {
                    name: '[path][name].[ext]'
                }
            }, {
                loader: require.resolve('@peterek/extract-loader'),
            }, {
                loader: require.resolve('html-loader'),
                options: {
                    attributes: false,
                },
            }, {
                loader: require.resolve('html-minify-loader'),
                options: {
                    empty: true,
                    cdata: true,
                    comments: true,
                },
            }],
        }, {
            test: /\.tpl\.html$/i,
            use: [{
                loader: require.resolve('html-loader'),
                options: {
                    attributes: false,
                    minimize: true
                },
            }],
        }]
    },
    plugins: []
})
