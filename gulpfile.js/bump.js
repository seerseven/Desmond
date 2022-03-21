'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const bumpVersion = require('gulp-bump');
const plumber = require('gulp-plumber');

//Define Src and Dest Filepaths
const app = './';

const bump = {
	app: function () {
		return src('app/package.json')
			.pipe(plumber())
			.pipe(bumpVersion({ type: 'patch' }))
			.pipe(dest('app'));
	},
	npm: function () {
		return src('npm/package.json')
			.pipe(plumber())
			.pipe(bumpVersion({ type: 'patch' }))
			.pipe(dest('npm'));
	},
	des: function () {
		return src('./package.json')
			.pipe(plumber())
			.pipe(bumpVersion({ type: 'patch' }))
			.pipe(dest('./'));
	},
	all: function () {
		return bump.app(), bump.npm(), bump.des();
	},
};
bump.app.displayName = 'App : Bump App Package Version #';
bump.npm.displayName = 'Npm : Bump NPM Package Version #';
bump.des.displayName = 'Des : Bump Desmond Package Version #';
bump.all.displayName = 'Bump : All Package Version Numbers';

task('version', series(bump.all));

exports.app = series(bump.app);
exports.npm = series(bump.npm);
exports.des = series(bump.des);
exports.bump = series(bump.all);
