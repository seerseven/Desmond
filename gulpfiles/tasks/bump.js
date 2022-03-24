const { series, parallel, src, dest, task } = require('gulp');

//require
const plugins = require('../config/plugins');
const conf = require('../config/config');
const v = require('../config/variables');
const c = require('../config/chalk');
const f = require('../config/functions');

//config
const opts = conf.pluginOpts;
const scr = conf.paths;
const dist = conf.paths;
const hx = v.colors;
const log = conf.logger.bumpTasks;
const start = c.start();
const s = start;

var pckg = require('../../package.json');

const bumped = f.bump(pckg.version);

function bump() {
	start;
	c.cmd(' Bump: ', 'PACKAGE VERSION', hx.bump);
	return src(conf.pkg)
		.pipe(
			plugins.strip({
				// Options (optional)
				// eg:
				// namespace: ['console', 'window.console']
			})
		)
		.pipe(plugins.plumber())
		.pipe(plugins.bump({ version: bumped }), c.log(bumped, hx.shop))

		.pipe(dest(dist.app))
		.on('end', () => {
			c.end(' Bump: ', 'PACKAGE.JSON', hx.bump, s);
		});
}

exports.bump = bump;
