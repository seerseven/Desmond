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
	shopifycss: function () {
		return src(s.shopifycss, l.shopifycss(1))
			.pipe(p.plum(), l.sass())
			.pipe(dest(d.dist))
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.shopifycss(0));
	},
	mdbcss: function () {
		return src(s.mdbcss, l.mdbcss(1))
			.pipe(p.plum(), l.sass())
			.pipe(dest(d.dist))
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.mdbcss(0));
	},
	notioncss: function () {
		return src(s.notioncss, notec(1))
			.pipe(p.plum(), l.sass())
			.pipe(p.post(), l.post())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.parallax), l.dist())
			.on(d.end, () => l.notec(0));
	},
	themecss: function () {
		return src(s.themecss, l.themecss(1))
			.pipe(p.plum(), l.sass())
			.pipe(p.post(), l.post())
			.pipe(dest(d.dist))
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(p.multi(d.pro), l.dist())
			.on(d.end, () => l.themecss(0));
	},
	buildcss: function () {
		return src(s.buildcss, l.buildcss(1))
			.pipe(p.plum(), l.concss())
			.pipe(p.concat(o.descss), l.conccsb())
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.buildcss(0));
	},
	cleancss: function () {
		return src(s.cleancss, l.cleancss(1))
			.pipe(p.clean(), l.clean())
			.on(d.end, () => l.cleancss(0));
	},
};

auto.generateTasks();
