const { src, series } = require('gulp');
const $ = require('../config/require.js');
const c = require('./chalk.js');
const v = ' Git: ';
const start = c.start();
const s = start;
const git = {
	save: function () {
		start;
		c.logger(' Add ', 'All Files & Changes...', c.ghex);
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
				})
			)
			.on('end', () => {
				c.logger(' Commit ', 'All Files & Changes...', c.ghex),
					c.frey(),
					c.end(v, 'Saved Changes to Local Repo... ', c.ghex),
					c.frey();
			});
	},
	send: function (done) {
		start;
		c.logger(' Push ', 'All Files & Changes...', c.ghex);
		$.git
			.push('origin', 'master', function (err) {
				if (err) throw err;
			})
			.on('end', () => {
				c.frey();
				c.end(v, 'Branch is Up to Date with Origin/Master... ', c.ghex);
				c.frey();
			});
		done();
	},
};
// get.save.displayName = 'Commit : Git Add, Commit All';
// get.send.displayName = 'Push   : Gip Push Origin Master';
exports.commit = series(git.save);
exports.shove = series(git.send);
exports.deploy = series(git.save, git.send);
