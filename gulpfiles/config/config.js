const v = require('./variables');
const c = require('./chalk');
const hx = v.colors;
module.exports = {
	pkg: './package.json',
	pluginOpts: {
		bump: {
			type: 'patch',
		},
	},
	paths: {
		app: './',
	},
	logger: {
		bumpTasks: {
			bump: {
				// start: c.start(),
				// des: c.desmond(hx.bump),
				// end: c.end(),
			},
		},
	},
};
