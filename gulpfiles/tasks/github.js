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
	commit: function () {
		return src(s.addall, l.sassy(1))
			.pipe(p.plum(), l.sass())
			.pipe(p.git.add())
			.pipe(p.git.commit(undefined, o.args))
			.on(d.end, () => l.sassy(0));
	},
	schema: function () {
		return src(s.schema, l.schema(1))
			.pipe(p.plum(), l.sass())
			.pipe(p.sass(o.expand))
			.pipe(p.rname(o.schema))
			.pipe(dest(d.schema), l.scss())
			.on(d.end, () => l.schema(0));
	},
	cts: function () {
		return src(s.cts, l.cts(1))
			.pipe(p.plum(), l.sass())
			.pipe(p.sass(o.expand))
			.pipe(p.rname(o.cts))
			.pipe(dest(d.cts), l.scss())
			.on(d.end, () => l.cts(0));
	},
	index: function () {
		return src(s.files, l.files(1))
			.pipe(p.plum(), l.sass())
			.pipe(p.gendex)
			.pipe(dest('src/sass/abstracts/functions'), l.scss())
			.on(d.end, () => l.files(0));
	},
	listfiles: function () {
		return src(s.files, l.files(1))
			.pipe(p.plum(), l.sass())
			.pipe(p.filelist)
			.pipe(p.rname(o.json))
			.pipe(dest(d.sass), l.scss())
			.on(d.end, () => l.files(0));
	},
};

auto.generateTasks();
