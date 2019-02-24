var path = require("path");
var webpack = require("webpack");

//var dist = process.argv.indexOf('-p') == -1 ? "prod" : "debug";
var isProd = process.env.NODE_ENV == "production";
var dist = isProd ? "prod" : "debug";

var commonConfig = {
  entry: path.join(__dirname, "/src/start.tsx"),

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build", dist, "static"),
    publicPath: "/static/" // value here must match the path
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // let babel-loader handle ts/tsx files
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      // re-process sourcemaps using source-map-loader
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: /node_modules/
      }
    ]
  },

  // assume correxponding globals exist for the following and use those instead
  // this will allow broser caching libs between builds and avoid bundling dependencies
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};

module.exports = commonConfig;