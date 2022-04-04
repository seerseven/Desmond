const { series, parallel, src, dest, task } = require('gulp');

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
const x = conf.colors;
const p = conf.plugins;
const s = conf.paths.input;
const d = conf.paths.output;
const o = conf.plugins.opts;
const l = log;

module.exports = {
	sortstart: function () {
		return src(s.app, l.sort(1))
			.pipe(p.plum())
			.on(d.end, () => {
				p.wait(100);
			});
	},
	sortshopify: function () {
		return src(s.shopstart, o.empty)
			.pipe(p.plum(), l.sfiles())
			.pipe(dest(d.shopend));
	},
	sorttheme: function () {
		return src(s.themstart, o.empty)
			.pipe(p.plum(), l.tfiles())
			.pipe(dest(d.themend));
	},
	sortvendors: function () {
		return src(s.venstart, o.empty)
			.pipe(p.plum(), l.vfiles())
			.pipe(dest(d.venend));
	},

	sortend: function () {
		return src(s.app)
			.pipe(p.plum())
			.on(d.end, () => {
				l.sort(0);
			});
	},
};

auto.generateTasks();
