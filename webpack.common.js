const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]_[fullhash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/home.pug",
      filename: "home.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/img/favicon/**/*", to: "" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.pug$/i,
        use: ['html-loader', 'pug-html-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            {
                loader: "css-loader",
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                }
              }
          ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
        generator: {
          filename: 'img/[name][ext]',
      },
      },
    ],
  },
};
