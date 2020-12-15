const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" });

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    node: {
      fs: "empty",
    },
    plugins: [
      new Dotenv(),
      CSSExtract,
      new htmlWebpackPlugin({
        title: "Image Search App",
        favicon: "src/html/img/favicon.png",
        template: "src/html/index.html",
        filename: "index.html",
        minify: false,
        meta: {
          viewport: "width=device-width, initial-scale=1",
          // Android compatible
          "theme-color": "#ff444e",
          "mobile-web-app-capable": "yes",
          "application-name": "Image Search App",
          // IOS compatible
          "apple-mobile-web-app-capable": "yes",
          "apple-mobile-web-app-title": "Image Search App",
        },
      }),
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
    },
  };
};
