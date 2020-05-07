module.exports = {
  devServer:{
    port:9000,
    open:true,
    // host:'127.0.0.1',
    proxy:{
      '/api':{
        target:'http://localhost:8000',
        changeOrign:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}