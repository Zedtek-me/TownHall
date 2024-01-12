const path = require("path")


module.exports = {
    entry:"",
    output:{
        filename:"",
        path:""
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:"babel-loader",
                    options:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test:/\.(css|scss)$/,
                use:["css-loader", "style-loader"]
            },
            {
                test:/\.(png|jpg|ico|svg)$/,
                use:"asset/resource"
            }
        ]
    },
    devServer:{
        static:"./plubic",
        historyApiFallback:true,
        hot:true,
        port:3001
    }
}