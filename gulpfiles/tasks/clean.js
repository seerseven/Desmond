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
const p = conf.plugins;
const r = conf.paths.clean;
const d = conf.paths.output;
const l = log;

module.exports = {
	cleanstart: function () {
		return src(r.build, l.remall(1));
	},
	cleanbuild: function () {
		return src(r.build).pipe(p.clean(), l.remesb());
	},
	cleanmin: function () {
		return src(r.min).pipe(p.clean(), l.remmin());
	},
	cleandist: function () {
		return src(r.dist).pipe(p.clean(), l.remdist());
	},
	cleanparallax: function () {
		return src(r.parallax).pipe(p.clean(), l.remlax());
	},
	cleanshopify: function () {
		return src(r.shopify).pipe(p.clean(), l.remshop());
	},
	cleanend: function () {
		return src(r.build).on(d.end, () => l.remall(0));
	},
};

auto.generateTasks();
