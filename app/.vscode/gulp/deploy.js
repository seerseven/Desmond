'use strict';

const { src, dest, parallel, watch, series } = require('gulp');

const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const bump = require('gulp-bump');
const git = require('gulp-git');
const push = require('gulp-git-push');
const gitignore = require('gulp-gitignore');

function deliver() {
	return src('theme/assets/*')
		.pipe(plumber())
		.pipe(rename({ prefix: 'dist-' }))
		.pipe(dest('docs'));
}

function version() {
	return src('./package.json')
		.pipe(plumber())
		.pipe(bump({ type: 'patch' }))
		.pipe(dest('./'));
}

//Watch Theme Folder For Files
function watchAssets() {
	watch('theme/assets/*', parallel(deliver, version));
}

function deploy() {
	return src('./*')
		.pipe(plumber())
		.pipe(gitignore())
		.pipe(git.add())
		.pipe(git.commit('bump version'))
		.pipe(push({ repository: 'origin', refspec: 'HEAD' }));
}

//Watch Docs Folder For Files
function watchDev() {
	watch('../docs', deploy);
}

//Build Complex Tasks
const watchTheme = series(watchAssets, watchDev);
const buildTasks = series(parallel(deliver, version), deploy);

exports.buildTasks = buildTasks;
exports.watchTheme = watchTheme;
