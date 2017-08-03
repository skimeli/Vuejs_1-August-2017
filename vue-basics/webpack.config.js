/**
 * Created by skimeli on 8/2/17.
 */


module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    devServer:{
        inline:true,
        port:8081
    },

};

