const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    static: {
      directory: "./dist",
      watch: true
    },
    watchFiles: ["*.html", "*.css"],
    port: 9000,
  },
});
