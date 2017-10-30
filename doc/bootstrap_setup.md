## Bootstrap Setup

1. npm i --save bootstrap css-loader style-loader url-loader
2. Go to `app/javascript/packs/application.js`
3. add the following lines (is this the right way ??)
```
import 'bootstrap/dist/css/bootstrap'
import 'bootstrap/dist/css/bootstrap-theme'
import 'bootstrap/dist/js/bootstrap'
```

4. go to `config/webpack/enviroment.js`, add the following
```
...
const webpack = require('webpack')

...
environment.plugins.set(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
  })
)

```
