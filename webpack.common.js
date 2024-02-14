const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/js/index.js",
    photoswipeGallery: "./src/js/photoswipe_gallery.js"
  },
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
      },
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: "./src/galeria.pug",
      filename: "galeria.html",
      templateParameters: () => {
        return require('./src/content/galeria.json');
      },
      chunks: ['bundle', 'photoswipeGallery'],
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/gallery_aux.pug",
    //   filename: "galeria_aux.html",
    // }),
    new HtmlWebpackPlugin({
      template: "./src/servicios.pug",
      filename: "servicios.html",
      templateParameters: () => {
        return require('./src/content/servicios.json');
      },
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: "./src/legal.pug",
      filename: "legal.html",
      templateParameters: () => {
        return require('./src/content/legal.json');
      },
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: "./src/privacidad.pug",
      filename: "privacidad.html",
      templateParameters: () => {
        return require('./src/content/privacidad.json');
      },
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: "./src/cookies.pug",
      filename: "cookies.html",
      templateParameters: () => {
        return require('./src/content/cookies.json');
      },
      chunks: ['bundle'],
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: "./src/img/favicon/**/*",
          to: "",
          noErrorOnMissing: true
        },
        { 
          from: "./src/sitemap.xml",
          to: "",
          noErrorOnMissing: true
        },
        { 
          from: "./src/robots.txt",
          to: "",
          noErrorOnMissing: true
        },
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
    ],
  },
};
