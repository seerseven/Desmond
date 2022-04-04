const { series, parallel, src, dest, task } = require('gulp');

//require
const conf = require('../config/config');
const log = require('../config/cmd');

//config
const x = conf.colors;
const p = conf.plugins;
const s = conf.paths.input;
const d = conf.paths.output;
const o = conf.plugins.opts;
const l = log;

module.exports = {
	shopify: function () {
		return src(s.shopify, l.shopify(1))
			.pipe(p.plum(), l.sass())
			.pipe(dest(d.dist))
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.shopify(0));
	},
	mdb: function () {
		return src(s.mdb, l.mdb(1))
			.pipe(p.plum(), l.sass())
			.pipe(dest(d.dist))
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.mdb(0));
	},
	notion: function () {
		return src(s.notion, note(1))
			.pipe(p.plum(), l.sass())
			.pipe(p.post(), l.post())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.parallax), l.dist())
			.on(d.end, () => l.note(0));
	},
	theme: function () {
		return src(s.theme, l.theme(1))
			.pipe(p.plum(), l.sass())
			.pipe(p.post(), l.post())
			.pipe(dest(d.dist))
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(p.multi(d.pro), l.dist())
			.on(d.end, () => l.theme(0));
	},
	build: function () {
		return src(s.build, l.build(1))
			.pipe(p.plum())
			.pipe(p.concat(o.conc), l.conc())
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.nano(), l.nano())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.build(0));
	},
	clean: function () {
		return src(s.cleancss, l.cleancss(1))
			.pipe(p.clean(), l.clean())
			.on(d.end, () => l.cleancss(0));
	},
};
