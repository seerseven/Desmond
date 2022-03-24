const pkg = require('./package.json');

module.exports = {
	pkg: {
		name: pkg.name,
	},
	pluginOpts: {
		bump: {
			type: 'patch',
		},
	},
	paths: {
		sources: {
			app: './',
		},
		destinations: {
			app: './',
		},
	},
};
