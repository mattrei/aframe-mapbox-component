module.exports = {
  entry: './index.js',
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    ],
  }
};
