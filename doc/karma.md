### Karma setup

1. Create folder `/spec/assets/javascript/`
2. Create folder called `reducers` in `/spec/assets/javascript/` for reducer tests
3. Create boilerplate file named `counter.spec.js` for test with the following :
```
describe('Test template', () => {

  it('says Hello World', () => {
    console.log('Hello World!');
  })
});
```
4. Run the following :
```
npm i --save-dev karma karma-webpack karma-chrome-launcher karma-jquery karma-jasmine karma-jasmine-jquery jasmine-core
karma-coverage karma-coverage-istanbul-reporter karma-spec-reporter istanbul-instrumenter-loader
```

```
npm i --save typescript ts-loader
```
5. Your package.json file should look like this :
```
// package.json
"scripts": {
  "test": "NODE_ENV=test karma start"
},
"dependencies": {
  "typescript": "^2.5.2",
  "ts-loader": "^2.3.7"
},
"devDependencies": {
  "karma": "^1.7.1",
  "karma-webpack": "^2.0.4",
  "karma-chrome-launcher": "^2.2.0",
  "karma-jquery": "^0.2.2",
  "karma-jasmine": "^1.1.0",
  "karma-jasmine-jquery": "^0.1.1",
  "jasmine-core": "^2.8.0",
  [optional] "karma-coverage": "^1.1.1",
  [optional] "karma-coverage-istanbul-reporter": "^1.3.0",
  [optional] "karma-spec-reporter": "0.0.31",
  [optional] "istanbul-instrumenter-loader": "^3.0.0",
}
```
6. Update `config/webpack/test.js` to the following :
```
const { environment } = require('@rails/webpacker')
environment.plugins.get('Manifest').opts.writeToFileEmit = process.env.NODE_ENV !== 'test'
environment.loaders.set('istanbul-instrumenter', {
  test: /\.ts$/,
  enforce: "post",
  loader: "istanbul-instrumenter-loader",
  query: {
    esModules: true
  },
  exclude: ["node_modules", /\.test\.ts$/]
}) /* optional */
module.exports = environment.toWebpackConfig()
```
7. Run `npm i -g karma-cli`
8. Run `karma init karma.conf.js`
9. Update `karma.conf.js` to the following :
```
const webpackConfig = require('./config/webpack/test.js')

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jquery-3.2.1", "jasmine-jquery", "jasmine"],
    plugins: [
      "karma-jquery",
      "karma-jasmine-jquery",
      "karma-jasmine",
      "karma-webpack",
      "karma-chrome-launcher",
      "karma-coverage-istanbul-reporter" /* optional */,
      "karma-spec-reporter" /* optional */
    ],
    files: [ './spec/javascript/**/*.spec.js' ],
    exclude: [],
    webpack: webpackConfig,
    preprocessors: {'./spec/javascript/**/*.spec.js' : ["webpack"]},
    mime: { "text/x-typescript": ["ts"] },
    reporters: ["progress", "coverage-istanbul" /* optional */],
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      fixWebpackSourcePaths: true
    } /* optional */,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: true
  });
};

```

10. Add a script to `package.json` :
```
"scripts": {
  "test": "NODE_ENV=test karma start"
}
```
11. Run `npm run test`

### Add enzyme + Karma + Webpack configuration
1. Run `npm i webpack-merge` to merge config files
2. In `config/webpack/test.js`, add the following code to setup enzyme
```
...
const merge = require('webpack-merge')
....
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
...

module.exports = merge(environment.toWebpackConfig(), karmaEnzymeConfig)
```

## Resources

https://github.com/rails/webpacker/blob/master/docs/testing.md
http://airbnb.io/enzyme/docs/guides/karma.html
https://github.com/rails/webpacker/blob/master/docs/webpack.md
