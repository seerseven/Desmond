const { src, series } = require('gulp');
const git = require('gulp-git');
const push = require('gulp-git-push');
const gitignore = require('gulp-gitignore');
const chalk = require('./chalk.js');
const cmd = require('./chalk.js');
const v = ' Git: ';

const get = {
	save: function () {
		chalk.desmond(chalk.ghex);
		const s = chalk.start();
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
				})
			)
			.on('end', () => {
				chalk.frey();
				chalk.end(v, 'Git Add & Commit... ', chalk.dhex, s);
				chalk.frey();
			});
	},
	send: function (done) {
		git
			.push('origin', 'master', function (err) {
				if (err) throw err;
			})
			.on('end', () => {
				chalk.frey();
				chalk.end(v, 'Git Push Origin Master... ', chalk.dhex, s);
				chalk.frey();
			});
		done();
		chalk.desmond(chalk.ghex);
	},
};
get.save.displayName = 'Commit : Git Add, Commit All';
get.send.displayName = 'Push   : Gip Push Origin Master';
exports.commit = series(get.save);
exports.shove = series(get.send);
exports.deploy = series(get.save, get.send);
