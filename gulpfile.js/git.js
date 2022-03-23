const { src, series } = require('gulp');
const $ = require('./require.js');
const chalk = require('./chalk.js');
const cmd = require('./chalk.js');
const v = ' Git: ';
const start = chalk.start();

const git = {
	save: function () {
		start;
		chalk.logger(' Add ', 'All Files & Changes...', chalk.ghex);
		return src([
			'./*',
			'!./node_modules/**',
			'!./state/**',
			'!app/node_modules/**',
			'!./package-lock.json',
			'!./app/package-lock.json',
		])
			.pipe($.git.add())
			.pipe(
				$.git.commit(undefined, {
					args: '-m "gulp commit"',
					disableMessageRequirement: true,
				}),
				chalk.logger(' Commit ', 'All Files & Changes...', chalk.ghex),
				chalk.frey(),
				chalk.end(v, 'Saved Changes to Local Repo... ', chalk.ghex, start),
				chalk.frey()
			);
	},
	send: function (done) {
		start;
		chalk.logger(' Push ', 'All Files & Changes...', chalk.ghex);
		$.git.push('origin', 'master', function (err) {
			if (err) throw err;
		});
		chalk.frey();
		chalk.end(
			v,
			'Branch is Up to Date with Origin/Master... ',
			chalk.ghex,
			start
		);
		chalk.frey();
		done();
	},
};
// get.save.displayName = 'Commit : Git Add, Commit All';
// get.send.displayName = 'Push   : Gip Push Origin Master';
exports.commit = series(git.save);
exports.shove = series(git.send);
exports.deploy = series(git.save, git.send);
