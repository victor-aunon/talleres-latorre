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
      template: "./src/home.pug",
      filename: "index.html",
      templateParameters: () => {
        return require('./src/content/home.json');
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/img/favicon/**/*",
        to: "",
        noErrorOnMissing: true},
      ],
      patterns: [
        { from: "./src/sitemap.xml",
        to: "",
        noErrorOnMissing: true},
      ],
      patterns: [
        { from: "./src/robots.txt",
        to: "",
        noErrorOnMissing: true},
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
        use: ['simple-pug-loader'],
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
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   type: "asset",
      //   generator: {
      //     filename: 'img/[name][ext]',
      //   },
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg|webp)$/i,
      //   use : [
      //     {
      //       loader: `img-optimize-loader`,
      //       options: {
      //         compress: {
      //           webp: {
      //             quality: 95,
      //           },
      //           disableOnDevelopment: true,
      //         },
      //         name: 'img/[name].[ext]',
      //       }
      //     }
      //   ]
      // },
    ],
  },
};
