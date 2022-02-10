module.exports = {
    lintOnSave : false,
    devServer : {
        // proxy: {
        //     '/api': {                           
        //         target: 'http://39.105.207.193:8000',
        //         changeOrigin: true,
        //         pathReWrite: {'^/api' : ''},
        //     }
        // }
        proxy : 'http://39.105.207.193:8000',
    }
}   