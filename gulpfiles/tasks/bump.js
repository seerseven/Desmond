const { src, dest, task } = require('gulp');

//require
const conf = require('../config/config');
const log = require('../config/cmd');
const auto = {
	generateTasks: function () {
		const exportsArray = Object.keys(module.exports);
		exportsArray.map((element) => {
			return task(element, module.exports[element]);
		});
	},
};

//config
const p = conf.plugins;
const d = conf.paths.output;
const l = log;

module.exports = {
	themebump: function () {
		return src(conf.pkg, l.themeb(1))
			.pipe(p.plum())
			.pipe(p.bump())
			.pipe(dest(d.app))
			.on('end', () => l.themeb(0));
	},
	npmbump: function () {
		return src(conf.pkg, l.npmb(1))
			.pipe(p.plum())
			.pipe(p.bump())
			.pipe(dest(d.app))
			.on('end', () => l.npmb(0));
	},
};

auto.generateTasks();
