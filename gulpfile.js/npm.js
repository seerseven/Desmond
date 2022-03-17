// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');
const wait = require('gulp-wait');

const npm = {
	node: function () {
		return src('./npm').pipe(shell('cd npm && npm publish'));
	},
	json: function () {
		return src('./app')
			.pipe(wait(2500))
			.pipe(shell('cd app && npm i -D --no-audit @seerseven/desmond@latest'));
	},
};

exports.node = npm.node;
exports.json = npm.json;
