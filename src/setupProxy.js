const proxy = require("http-proxy-middleware");
console.log(proxy,'createProxyMiddleware')
    module.exports = function(app){
        app.use(
            proxy("/api",{
                target:"***",
                changeOrigin:true,
                pathRewrite:{
                "^/api":""
                }
            })
        )
        
        
    }