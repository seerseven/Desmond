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
const u = undefined;

module.exports = {
	gitsave: function () {
		return src(s.addall, l.save(1))
			.pipe(p.git.add())
			.pipe(p.git.commit(u, o.args))
			.pipe(p.wait(1000));
	},
	saveend: function () {
		return src(s.addall).on(d.end, () => l.save(0));
	},
	gitpush: function (done) {
		l.push(1);
		p.git.push('origin', 'master', function (err) {
			if (err) throw err;
		}),
			p.wait(1000);
		done();
	},
	pushend: function () {
		return src(s.addall).on(d.end, () => l.push(0));
	},
	// pull: function (done) {
	// 	p.git.pull('origin', 'master', {args: '--rebase'}, function (err) {
	//     if (err) throw err;
	//   })
	//   done();
	// },
};

auto.generateTasks();
