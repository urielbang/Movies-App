const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Default mode, switch to 'production' for production builds
  entry: "./src/index.js", // Main entry file for your application
  output: {
    filename: "main.js", // Output JavaScript file name
    path: path.resolve(__dirname, "dist"), // Output directory (absolute path)
    clean: true, // Automatically clean the 'dist' directory before each build
    publicPath: "/", // Ensure correct asset paths for single-page applications
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match all CSS files
        use: ["style-loader", "css-loader"], // Process CSS with loaders
      },
      {
        test: /\.(png|jpg|gif|svg|ico|webp)$/, // Match image files and other common assets
        type: "asset/resource", // Emit files as separate resources
        generator: {
          filename: "assets/images/[name][ext]", // Save images in 'assets/images' folder
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font files
        type: "asset/resource", // Emit font files as resources
        generator: {
          filename: "assets/fonts/[name][ext]", // Save fonts in 'assets/fonts' folder
        },
      },
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude `node_modules` from transpiling
        use: {
          loader: "babel-loader", // Use Babel for JavaScript transpilation
          options: {
            presets: ["@babel/preset-env"], // Use preset for modern JavaScript
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use 'index.html' in the 'public' folder as a template
      filename: "index.html", // Name of the generated file in the 'dist' directory
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Serve static files from the 'public' folder
    },
    compress: true, // Enable gzip compression for served files
    port: 9000, // Port for the development server
    open: true, // Automatically open the browser on server start
    hot: true, // Enable Hot Module Replacement
    historyApiFallback: true, // Support for Single Page Applications
  },
  resolve: {
    extensions: [".js", ".json"], // Automatically resolve these extensions
  },
};
