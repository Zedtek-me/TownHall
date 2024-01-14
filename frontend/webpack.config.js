const path = require("path")


module.exports = {
    entry:path.resolve(__dirname, "src/Roots/index.js"),
    output:{
        filename:"index.js",
        path:path.resolve(__dirname, "public/")
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env", "@babel/preset-react"]
                    }
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