const { src, series } = require('gulp');
const git = require('gulp-git');
const push = require('gulp-git-push');
const gitignore = require('gulp-gitignore');
const chalk = require('./chalk.js');
const cmd = require('./chalk.js');
const v = ' Git: ';

const get = {
	save: function () {
		const s = chalk.start();
		chalk.logger(' Add ', 'All Files & Changes...', chalk.ghex);
		return src([
			'./*',
			'!./node_modules/**',
			'!./state/**',
			'!app/node_modules/**',
			'!./package-lock.json',
			'!./app/package-lock.json',
		])
			.pipe(git.add())
			.pipe(
				git.commit(undefined, {
					args: '-m "gulp commit"',
					disableMessageRequirement: true,
				}),
				chalk.logger(' Commit ', 'All Files & Changes...', chalk.ghex),
				chalk.frey(),
				chalk.end(v, 'Saved Changes to Local Repo... ', chalk.ghex, s),
				chalk.frey()
			);
	},
	send: function (done) {
		const s = chalk.start();
		git.push('origin', 'master', function (err) {
			if (err) throw err;
		});
		chalk.frey();
		chalk.end(v, 'Git Push Origin Master... ', chalk.ghex, s);
		chalk.frey();
		done();
		chalk.desmond(chalk.ghex);
	},
};
// get.save.displayName = 'Commit : Git Add, Commit All';
// get.send.displayName = 'Push   : Gip Push Origin Master';
exports.commit = series(get.save);
exports.shove = series(get.send);
exports.deploy = series(get.save, get.send);
