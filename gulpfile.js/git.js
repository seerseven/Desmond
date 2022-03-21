const { src, series } = require('gulp');
const git = require('gulp-git');
const push = require('gulp-git-push');
const gitignore = require('gulp-gitignore');

//Define Src and Dest Filepaths
const app = './';

const get = {
	save: function () {
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
			);
	},
	send: function (done) {
		git.push('origin', 'master', function (err) {
			if (err) throw err;
		});
		done();
	},
};
get.save.displayName = '[Commit] : Git Add, Commit All';
get.send.displayName = '[Push] : Gip Push Origin Master';
exports.save = get.save;
exports.send = get.send;
exports.deploy = series(get.save, get.send);
