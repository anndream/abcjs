const TerserPlugin = require('terser-webpack-plugin');
const path = require("path");

module.exports =  ({type}) => ({
	mode: 'production',
	output: {
		filename: `abcjs-${type}-min.js`,
		path: path.join(__dirname, "../dist")
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: {
					condition: /^\**!/,
					banner: makeBanner(type),
				},
			}),
		],
	},
});

function getVersion() {
	const pJson = require('../package.json');
	return pJson.version;
}

function makeBanner(type) {
	const outputFilename = `abcjs_${type}-min.js`;
	const banner1 = `abcjs_${type} v${getVersion()} Copyright © 2009-2021 Paul Rosen and Gregory Dyke (https://abcjs.net) */`;
	const banner2 = `/*! midi.js Copyright © Michael Deal (http://mudcu.be) */`;
	const banner3 = `/*! For license information please see ${outputFilename}.LICENSE`;
	const hasMidi = type === 'midi';
	return hasMidi ? `${banner1}\n${banner2}\n${banner3}` : `${banner1}\n${banner3}`;

}
