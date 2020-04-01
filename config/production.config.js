/**
 * Common Production Config
 *
 * @param {Required<import("./index.js").HtmlWebpackPluginOptions>} options
 * @returns {{ module: { rules : Array<any> }, plugins: Array<(new (): any)> }}
 */
exports = module.exports = options => ({
    module: {
        rules: []
    },
    plugins: []
})
