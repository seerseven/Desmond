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
const sh = conf.shell;
const l = log;

module.exports = {
	publish: function () {
		return src(s.npm, l.publish(1))
			.pipe(p.shell(sh.publish))
			.on(d.end, () => l.publish(0));
	},
	install: function () {
		start;
		return src(s.app, l.install(1))
			.pipe(p.shell(sh.install))
			.on(d.end, () => l.install(0));
	},
	updatecli: function () {
		return src(s.shopify, l.cli(1))
			.pipe(p.shell(sh.cli))
			.on(d.end, () => l.cli(0));
	},
	serve: function () {
		return src(s.shopify, l.themeserve(1))
			.pipe(p.shell(sh.login))
			.pipe(p.shell(sh.serve))
			.on(d.end, () => {
				l.links(), l.themeserve(0);
			});
	},
	unpublished: function () {
		return src(s.shopify, l.themeunpub(1))
			.pipe(p.shell(sh.unpublished))
			.on(d.end, () => l.themeunpub(0));
	},
	themepull: function () {
		return src(s.shopify, l.themepull(1))
			.pipe(p.shell(sh.pull))
			.on(d.end, () => l.themepull(0));
	},
	themepush: function () {
		return src(s.shopify, l.themepush(1))
			.pipe(shell(sh.push))
			.on(d.end, () => l.themepush(0));
	},
};

auto.generateTasks();
