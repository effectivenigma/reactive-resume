var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");
var commonConfig = require("./webpack.config.js");

module.exports = merge(commonConfig, {
  plugins: [
    // don't need this with the -p in the package.json scripts;
    // the -p does the same thing internally
    // new webpack.DefinePlugin({
    //     "process.env": {
    //         "NODE_ENV": JSON.stringify("production")
    //     }
    // }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false
      }
    })
  ]
});