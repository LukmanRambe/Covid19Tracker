const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        }),
        new HTMLWebpackPlugin({
            template: "./information.html",
            filename: "information.html"
        }),
        new HTMLWebpackPlugin({
            template: "./about.html",
            filename: "about.html"
        }),
        new CopyWebpackPlugin({
            patterns: [{
                    from: path.resolve(__dirname, "./images/virus.png"),
                    to: path.resolve(__dirname, "./dist/images")
                },
                {
                    from: path.resolve(__dirname, "./images/virus192.png"),
                    to: path.resolve(__dirname, "./dist/images")
                },
                {
                    from: path.resolve(__dirname, "./images/fever.png"),
                    to: path.resolve(__dirname, "./dist/images")
                },
                {
                    from: path.resolve(__dirname, "./images/pandemic.png"),
                    to: path.resolve(__dirname, "./dist/images")
                },
                {
                    from: path.resolve(__dirname, "./images/protected.png"),
                    to: path.resolve(__dirname, "./dist/images")
                },
                {
                    from: path.resolve(__dirname, "./images/Lukman.jpg"),
                    to: path.resolve(__dirname, "./dist/images")
                },
                {
                    from: path.resolve(__dirname, "./images/favicon-16x16.png"),
                    to: path.resolve(__dirname, "./dist/images")
                },
                {
                    from: path.resolve(__dirname, "./images/favicon-32x32.png"),
                    to: path.resolve(__dirname, "./dist/images")
                },
                {
                    from: path.resolve(__dirname, "./images/apple-touch-icon.png"),
                    to: path.resolve(__dirname, "./dist/images")
                },
                {
                    from: path.resolve(__dirname, "./images/favicon.ico"),
                    to: path.resolve(__dirname, "./dist/images")
                }
            ]
        })
    ]
}