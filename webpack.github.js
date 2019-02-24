var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");
var prodConfig = require("./webpack.config.js");

module.exports = merge(prodConfig, {
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "static"),
    publicPath: "/static/" // value here must match the path
  }
});