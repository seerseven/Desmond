'use strict';

const { series, parallel, watch, src, dest } = require('gulp');
const bump = require('gulp-bump');
const plumber = require('gulp-plumber');

//Define Src and Dest Filepaths
const app = './';

function core() {
	return src('app/package.json')
		.pipe(plumber())
		.pipe(bump({ type: 'patch' }))
		.pipe(dest('app'));
}

function npm() {
	return src('npm/package.json')
		.pipe(plumber())
		.pipe(bump({ type: 'patch' }))
		.pipe(dest('npm'));
}

function master() {
	return src('./package.json')
		.pipe(plumber())
		.pipe(bump({ type: 'patch' }))
		.pipe(dest('./'));
}

exports.core = core;
exports.npm = npm;
exports.master = master;

exports.version = parallel(core, npm, master);
