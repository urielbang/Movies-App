const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development", // Use 'development' for dev and 'production' for production builds
  entry: {
    index: "./src/index.js",
    searchMovie: "./src/javascript/movieNAmeSearch.js",
    about: "./src/javascript/aboutNav.js",
    searchName: "./src/javascript/searchById.js",
    favorites: "./src/javascript/favorites.js",
    changePages: "./src/javascript/changePages.js",
    slider: "./src/javascript/sliderHomePage.js",
  }, // Main entry file for your application
  output: {
    filename: "assets/js/[name].[contenthash].js", // Output JavaScript file name with hashing
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
          filename: "assets/images/[name].[hash][ext]", // Save images in 'assets/images' folder
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font files
        type: "asset/resource", // Emit font files as resources
        generator: {
          filename: "assets/fonts/[name].[hash][ext]", // Save fonts in 'assets/fonts' folder
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
    // Generate HTML files for each page
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use 'index.html' in the 'public' folder as a template
      filename: "index.html", // Output file name in 'dist' directory
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/searchMovie.html",
      filename: "searchMovie.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/about.html",
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/searchName.html",
      filename: "searchName.html",
      chunks: ["searchMovie"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/favorites.html",
      filename: "favorites.html",
      chunks: ["favorites"],
    }),
    // Copy static files to the output directory
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets", to: "assets" }, // Copy assets like images
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve files from the 'dist' directory
    },
    compress: true, // Enable gzip compression for served files
    port: 9000, // Port for the development server
    open: true, // Automatically open the browser on server start
    hot: true, // Enable Hot Module Replacement
    historyApiFallback: true, // Redirect SPA routes to index.html
  },
  resolve: {
    extensions: [".js", ".json"], // Automatically resolve these extensions
  },
};
