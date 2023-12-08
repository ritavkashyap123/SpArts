var $path = require("path");

module.exports = {
  mode: "production",

  devtool: "source-map",

  stats: "errors-warnings",

  target: ["web", "es5"],

  entry: {
    index: "./index.ts",
  },

  devServer: {
    publicPath: "/dist/",
    liveReload: true,
    overlay: true,
    noInfo: true,
    open: true
  },

  output: {
    path: $path.resolve(__dirname, "dist"),
    publicPath: "dist/",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [{
      test: /.tsx?$/,
      loader: "ts-loader"
    }, {
      test: /.js$/,
      use: ["source-map-loader"],
      enforce: "pre"
    }]
  }
};