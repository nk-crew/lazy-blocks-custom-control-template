/**
 * External Dependencies
 */
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

const isProduction = process.env.NODE_ENV === 'production';

const newConfig = {
	...defaultConfig,

	// Display minimum info in terminal.
	stats: 'minimal',
};

// Development only.
if (!isProduction) {
	newConfig.devServer = {
		...newConfig.devServer,
		// Support for dev server on all domains.
		allowedHosts: 'all',
	};
}

module.exports = newConfig;
