module.exports = {
    runtimeCompiler: undefined,
    productionSourceMap: false,
    publicPath: '',

    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },

    outputDir: 'dist',
    assetsDir: undefined,
    parallel: undefined,
    css: undefined
}
