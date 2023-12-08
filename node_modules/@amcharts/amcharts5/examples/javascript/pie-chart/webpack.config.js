var $path = require("path");

module.exports = {
  mode: "production",

  devtool: "source-map",

  stats: "errors-warnings",

  target: ["web", "es5"],

  entry: {
    index: "./index.js",
  },

  devServer: {
    publicPath: "/dist/",
    liveReload: true,
    overlay: true,
    noInfo: true,
    open: true
  },

  output: {
    path: $path.join(__dirname, "dist"),
    publicPath: "dist/",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  module: {
    rules: [{
      test: /.js$/,
      use: ["source-map-loader"],
      enforce: "pre"
    }]
  }
};