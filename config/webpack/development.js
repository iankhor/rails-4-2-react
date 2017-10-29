const environment = require('./environment');
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bootstrapEntryPoints= require('./bootstrap.config');

const isProd = process.env.NODE_ENV === 'production'

module.exports = environment.toWebpackConfig()
