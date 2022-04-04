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
	shopifyjs: function () {
		return src(s.shopifyjs, l.shopifyjs(1))
			.pipe(p.plum(), l.mods())
			.pipe(dest(d.libs), l.multi())
			.pipe(dest(d.dist))
			.pipe(dest(d.shopify))
			.pipe(p.uglify(), l.ugly())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.shopifyjs(0));
	},
	themejs: function () {
		return src(s.themejs, l.themejs(1))
			.pipe(p.plum(), l.mods())
			.pipe(dest(d.dist), l.multi())
			.pipe(dest(d.shopify))
			.pipe(p.uglify(), l.ugly())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.themejs(0));
	},
	queryjs: function () {
		return src(s.jsquery, l.queryjs(1))
			.pipe(p.plum(), l.libs())
			.pipe(p.concat(o.query), l.concqry())
			.pipe(dest(d.dist), l.multi())
			.pipe(p.uglify(), l.ugly())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.min))
			.pipe(dest(d.parallax), l.dist())
			.on(d.end, () => l.queryjs(0));
	},
	mdbjs: function () {
		return src(s.jsmdb, l.mdbjs(1))
			.pipe(p.plum(), l.libs())
			.pipe(p.concat(o.mdb), l.concmdb())
			.pipe(dest(d.dist), l.multi())
			.pipe(p.uglify(), l.ugly())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.min), l.dist())
			.on(d.end, () => l.mdbjs(0));
	},
	canvasjs: function () {
		return src(s.jscanvas, l.canvasjs(1))
			.pipe(p.plum(), l.libs())
			.pipe(p.concat(o.canvas), l.conccan())
			.pipe(dest(d.dist), l.multi())
			.pipe(p.uglify(), l.ugly())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.min), l.dist())
			.on(d.end, () => l.canvasjs(0));
	},
	vendorjs: function () {
		return src(s.jsvendor, l.vendorjs(1))
			.pipe(p.plum(), l.libs())
			.pipe(p.concat(o.vendor), l.concven())
			.pipe(dest(d.dist), l.multi())
			.pipe(p.uglify(), l.ugly())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.min), l.dist())
			.on(d.end, () => l.vendorjs(0));
	},
	libjs: function () {
		return src(s.jslibs, l.libjs(1))
			.pipe(p.plum(), l.libs())
			.pipe(p.concat(o.libs), l.conclibs())
			.pipe(dest(d.dist))
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.uglify(), l.ugly())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.libjs(0));
	},
	corejs: function () {
		return src(s.jscore, l.corejs(1))
			.pipe(p.plum(), l.libs())
			.pipe(p.concat(o.core), l.conccore())
			.pipe(dest(d.dist))
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.uglify(), l.ugly())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.corejs(0));
	},
	concatjs: function () {
		return src(s.concatjs, l.concatjs(1))
			.pipe(p.plum(), l.concmin())
			.pipe(p.concat(o.concat), l.concjsc())
			.pipe(dest(d.dist), l.multi())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.min), l.dist())
			.on(d.end, () => l.concatjs(0));
	},
	buildjs: function () {
		return src(s.buildjs, l.buildjs(1))
			.pipe(p.plum(), l.concjs())
			.pipe(p.concat(o.desjs), l.concjsb())
			.pipe(dest(d.shopify), l.multi())
			.pipe(p.uglify(), l.ugly())
			.pipe(p.rname(o.min), l.rname())
			.pipe(dest(d.shopify), l.dist())
			.on(d.end, () => l.buildjs(0));
	},
	cleanjs: function () {
		return src(s.cleanjs, l.cleanjs(1))
			.pipe(p.clean(), l.clean())
			.on(d.end, () => l.cleanjs(0));
	},
};

auto.generateTasks();
