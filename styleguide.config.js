const path = require('path');
const merge = require('webpack-merge');
const pkg = require('./package.json');

module.exports = {
  title: pkg.name + ' ' + pkg.version, // eslint-disable-line prefer-template
  components: './src/visibility-toggles.js',
  updateWebpackConfig(config) {
    return merge(
      config,
      {
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              include: path.join(__dirname, 'src'),
              loaders: ['babel-loader']
            }
          ]
        }
      }
    );
  },
  getExampleFilename() {
    return path.join(__dirname, 'README.md');
  },
  showCode: true
};
