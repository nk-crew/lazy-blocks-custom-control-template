/**
 * External Dependencies
 */
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const RtlCssPlugin = require('rtlcss-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const newConfig = {
	...defaultConfig,

	// Display minimum info in terminal.
	stats: 'minimal',
	plugins: [
		...defaultConfig.plugins,
		new RtlCssPlugin({
			filename: `[name]-rtl.css`,
		}),
	],
};

// Development only.
if (!isProduction) {
	newConfig.devServer = {
		...newConfig.devServer,
		// Support for dev server on all domains.
		allowedHosts: 'all',
	};

	// Fix HMR is not working with multiple entries.
	// @thanks https://github.com/webpack/webpack-dev-server/issues/2792#issuecomment-806983882
	newConfig.optimization.runtimeChunk = 'single';
}

module.exports = newConfig;
