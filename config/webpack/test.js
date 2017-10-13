// config/webpack/test.js
const { environment } = require('@rails/webpacker')
const merge = require('webpack-merge')
environment.plugins.get('Manifest').opts.writeToFileEmit = process.env.NODE_ENV !== 'test'
environment.loaders.set('istanbul-instrumenter', {
  test: /\.ts$/,
  enforce: "post",
  loader: "istanbul-instrumenter-loader",
  query: {
    esModules: true
  },
  exclude: ["node_modules", /\.test\.ts$/]
})

// http://airbnb.io/enzyme/docs/guides/karma.html
// configuration for enzyme karma and webpack
const karmaEnzymeConfig = {
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /\/node_modules\//,
          loader: 'babel',
          query: {
            presets: ['airbnb'],
          },
        }],
      }
};


module.exports = merge(environment.toWebpackConfig(), karmaEnzymeConfig)
