const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');

module.exports = (env, argv) => {
  // PRODUCTION will trigger optimization and compile all css into one minified file
  const PRODUCTION = argv.mode ? argv.mode === 'production' : process.env.NODE_ENV === 'production'

  return {
    entry: "./src/app.tsx",
    mode: PRODUCTION ? 'production' : 'development',

    output: {
      filename: "app.js",
      path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"],

      // Add aliases for importing files from common locations.
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        styles: path.resolve(__dirname, 'src/styles/'),
      },
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          test: /\.js$/,
          loader: "source-map-loader",
          enforce: "pre",
        },

        // SASS / SCSS
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              // Set up postcss to use the autoprefixer plugin
              options: { plugins: () => [require('autoprefixer')] }
            },
            'sass-loader',
          ],
        },
      ]
    },

    plugins: [
      // Define some constants for use through the application
      new webpack.DefinePlugin({
        'process.env.API_BASE': JSON.stringify(process.env.PQ_API_BASE) || '',
      }),
      new MiniCssExtractPlugin({
        // Dynamically support HRM and single file minified css
        filename: PRODUCTION ? '[name].[hash].css' : '[name].css',
        chunkFilename: PRODUCTION ? '[id].[hash].css' : '[id].css'
      }),
      new HtmlWebpackPlugin({
        template: __dirname + "/src/app.html",
        filename: "index.html"
      })
    ],

    // Optimizations are enabled when PRODUCTION is true
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // Set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  }
}
