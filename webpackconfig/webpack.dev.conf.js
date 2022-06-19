const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 8081,
    watchFiles: ["*.html"],
    compress: true,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});

// eslint-disable-next-line
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
