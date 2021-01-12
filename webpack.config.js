const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" });

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    node: {
      fs: "empty"
    },
    plugins: [
      new Dotenv(),
      CSSExtract,
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
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
          "apple-mobile-web-app-title": "Image Search App"
        }
      })
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    resolve: {
      alias: {
        "@root": path.resolve(__dirname, "./"),
        "@src": path.resolve(__dirname, "src/"),
        "@actions": path.resolve(__dirname, "src/actions"),
        "@comp": path.resolve(__dirname, "src/components"),
        "@cont": path.resolve(__dirname, "src/containers"),
        "@img": path.resolve(__dirname, "src/img"),
        "@reducers": path.resolve(__dirname, "src/reducers"),
        "@selectors": path.resolve(__dirname, "src/selectors"),
        "@store": path.resolve(__dirname, "src/store"),
        "@tests": path.resolve(__dirname, "src/tests"),
        "@consts": path.resolve(__dirname, "src/constants")
      }
    },
    devServer: {
      contentBase: path.join(__dirname, "dist")
    }
  };
};
