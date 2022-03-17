const { src, series } = require('gulp');
const git = require('gulp-git');
const push = require('gulp-git-push');
const gitignore = require('gulp-gitignore');

//Define Src and Dest Filepaths
const app = './';

const get = {
	save: function () {
		return src([app + '*'])
			.pipe(gitignore())
			.pipe(git.add())
			.pipe(git.commit('gulp commit'));
	},
	send: function (done) {
		git.push('origin', 'master', function (err) {
			if (err) throw err;
		});
		done();
	},
};

exports.save = get.save;
exports.send = get.send;
