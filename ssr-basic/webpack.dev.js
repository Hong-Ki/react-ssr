const { resolve } = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //context: resolve(__dirname, "src"),
  entry: ["./src/client/index.js"],
  output: {
    filename: "bundle.js", // output filename
    path: resolve(__dirname, "build"), // output path
    publicPath: "/"
  },

  devtool: "eval-cheap-source-map",

  mode: "development",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        resolve: {
          extensions: [".js", ".jsx"]
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: { minimize: true }
        },
        resolve: {
          extensions: [".html"]
        }
      },
      {
        test: /\.css$/,
        use: [
          //'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/i,
        use: [
          //"style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
        resolve: {
          extensions: [".css"]
        },
        exclude: /\.module\.css$/
      },
      {
        test: /\.scss$/,
        use: [
          //'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 3,
              modules: true
            }
          },
          "sass-loader"
        ],
        include: /\.module\.scss$/
      },
      {
        test: /\.scss$/i,
        use: [
          //"style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
        resolve: {
          extensions: [".scss"]
        },
        exclude: /\.module\.scss$/
      }

      //{
      //test: /\.s[ac]ss$/i,
      //use: ["style-loader", "css-loader", "sass-loader"]
      //}
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html", // public/index.html 파일을 읽는다.
      filename: "index.html" // output으로 출력할 파일은 index.html 이다.
    }),
    new MiniCssExtractPlugin()
  ]
};
