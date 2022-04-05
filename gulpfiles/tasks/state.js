const { series, parallel, src, dest, task } = require('gulp');
var fs = require('fs');

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
const b = conf.directories;
const r = conf.paths.clean;
const o = conf.plugins.opts;
const l = log;

module.exports = {
	savenpm: function () {
		[b.node].forEach((dir) => fs.mkdirSync(dir));
		return src(s.arcnode, l.node(1))
			.pipe(p.plum(), l.copy())
			.pipe(p.zip(b.nodezip), l.zip())
			.pipe(dest(d.vault), l.rem())
			.on(d.end, () => l.node(0));
	},
	savedes: function () {
		[b.des].forEach((dir) => fs.mkdirSync(dir));
		return src(s.arcproject, l.ject(1))
			.pipe(p.plum(), l.copy())
			.pipe(p.zip(b.deszip), l.zip())
			.pipe(dest(d.vault), l.rem())
			.on(d.end, () => l.ject(0));
	},
	savetheme: function () {
		[b.shop].forEach((dir) => fs.mkdirSync(dir));
		return src(s.arctheme, l.sho(1))
			.pipe(p.plum(), l.copy())
			.pipe(p.zip(b.shopzip), l.zip())
			.pipe(dest(d.themevault), l.rem())
			.on(d.end, () => l.sho(0));
	},
	archive: function () {
		[b.arc].forEach((dir) => fs.mkdirSync(dir));
		return src(s.archive, l.arc(1))
			.pipe(p.plum(), l.copy())
			.pipe(p.zip(b.arczip), l.zip())
			.pipe(dest(d.vault), l.rem())
			.on(d.end, () => l.arc(0));
	},
	backup: function () {
		[b.back].forEach((dir) => fs.mkdirSync(dir));
		return src(s.backup, l.bak(1))
			.pipe(p.plum(), l.copy())
			.pipe(dest(b.back), l.rem())
			.on(d.end, () => l.bak(0));
	},
	sync: function () {
		return src(s.nodemon, l.merge(1))
			.pipe(p.plum(), l.copy())
			.pipe(dest(d.npm))
			.on(d.end, () => l.merge(0));
	},
	cleanstage: function () {
		return src(r.rem).pipe(p.clean());
	},
};

auto.generateTasks();
