const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    static: {
      directory: "./src",
      watch: true
    },
    watchFiles: ["*.html", "*.css"],
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ]
  }
});
