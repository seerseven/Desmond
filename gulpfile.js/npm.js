// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');

const npm = {
	node: function () {
		return src('./npm').pipe(shell('cd npm && npm publish'));
	},
	json: function () {
		return src('./app').pipe(
			shell(
				'cd C:/Users/Seerseven/Mithrasatori/Desmond/app && npm install --save-dev --no-audit @seerseven/desmond@latest'
			)
		);
	},
};

exports.node = npm.node;
exports.json = npm.json;
