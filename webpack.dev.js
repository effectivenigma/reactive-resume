var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");
var commonConfig = require("./webpack.config.js");

module.exports = merge(commonConfig, {
  // enables sourcemaps for debugging webpack output
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    })
  ]
});