const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: [
        "babel-polyfill",
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
        path.join(__dirname, "/src/app.js")
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "./src")
        },
        // modules: [path.resolve(__dirname, "./src"), "node_modules"]
    },
    plugins: [
        new VueLoaderPlugin(),
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                compress: false
            }
        }),
        // new CleanWebpackPlugin([path.resolve(__dirname, "./dist")], {
        //     root: __dirname
        // }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, "./bin/index.html"),
        //     inject: false
        // }),
        // // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //     __DEV__: JSON.stringify(!process.env.NODE_ENV)
        // })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        "sass": [
                            "vue-style-loader",
                            "css-loader",
                            "sass-loader?indentedSyntax"
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpeg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader?indentedSyntax"
                ]
            }
        ]
    }
};

if (process.env.NODE_ENV == "production"){
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}