// next.config.js
const withSass = require('@zeit/next-sass')
const withTM = require('@weco/next-plugin-transpile-modules')

module.exports = withSass(withTM({
	cssModules: true,
	transpileModules: ['react-toolbox']
}))