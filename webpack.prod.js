const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [new MiniCssExtractPlugin({
    filename: "[name]_[contenthash].css"
  })], // Creates a css files per each js file
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use : [
          {
            loader: `img-optimize-loader`,
            options: {
              compress: {
                webp: {
                  quality: 95,
                },
              },
              name: 'img/[name].[ext]',
            }
          }
        ]
      }
    ],
  },
  optimization: {
    minimizer: [
      '...', // Extend existing minimizers
      new CssMinimizerPlugin(),
    ],
  },
});
