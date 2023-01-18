const path = require('path');
const withImages = require('next-images');

const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages({
	typescript: {
		tsconfigPath: './tsconfig.next.json',
	},

	assetPrefix: './',

	images: {	
		unoptimized: true,
		deviceSizes: [320, 480, 700, 800, 900, 1200, 1300, 1920],
	},

	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "index.scss";`,
	},
	webpack(config) {
		config.resolve.alias['@'] = path.join(__dirname, 'src');
		return config;
	},
});