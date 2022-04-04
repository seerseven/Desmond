const { series, parallel, src, dest, task } = require('gulp');

//require
const conf = require('../config/config');
const cmd = require('../config/cmd');

//config
const x = conf.colors;
const p = conf.plugins;
const d = conf.paths.input;
const s = conf.paths.output;

//settings
tag = 'BUMP';
hex = x.pink;
end = cmd.end;
srt = cmd.start;
log = cmd.log;

module.exports = {
	npm: function () {
		return src(conf.pkg, srt('NPM.JSON VERSION'))
			.pipe(p.plum(), log('Get Current Package Version', x.bump))
			.pipe(p.bump(), log('Save New Package Version', x.shop))
			.pipe(dest(d.app))
			.on('end', () => end('PACKAGE.JSON'));
	},
	main: function () {
		return src(conf.pkg, srt('PACKAGE.JSON VERSION'))
			.pipe(p.plum(), log('Get Current Package Version', x.bump))
			.pipe(p.bump(), log('Save New Package Version', x.shop))
			.pipe(dest(d.app))
			.on('end', () => end('PACKAGE.JSON'));
	},
};

const taskGenerator = (function generateTasks() {
	const exportsArray = Object.keys(module.exports);
	exportsArray.map((element) => {
		return task(element, module.exports[element]);
	});

	return generateTasks;
})();
