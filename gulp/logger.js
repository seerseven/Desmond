'use strict';

const { series, parallel, watch, src, dest } = require('gulp');
const bump = require('gulp-bump');
const plumber = require('gulp-plumber');

//Define Src and Dest Filepaths
const app = './';

function core() {
	return src('jarvis-core/package.json')
		.pipe(plumber())
		.pipe(bump({ type: 'patch' }))
		.pipe(dest('jarvis-core'));
}

function git() {
	return src('jarvis-git/package.json')
		.pipe(plumber())
		.pipe(bump({ type: 'patch' }))
		.pipe(dest('jarvis-git'));
}

function npm() {
	return src('jarvis-npm/package.json')
		.pipe(plumber())
		.pipe(bump({ type: 'patch' }))
		.pipe(dest('jarvis-npm'));
}

function master() {
	return src('./package.json')
		.pipe(plumber())
		.pipe(bump({ type: 'patch' }))
		.pipe(dest('./'));
}

exports.core = core;
exports.npm = npm;
exports.git = git;
exports.master = master;
