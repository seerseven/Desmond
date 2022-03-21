// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');
const nodemon = 'app/node_modules/@seerseven/desmond/src/*.js';
const ver = require('./bump.js');

const npm = {
	merge: function () {
		return src(nodemon).pipe(dest('npm/src'));
	},
	publish: function () {
		return src('./npm').pipe(shell('cd npm && npm publish'));
	},
	install: function () {
		return src('./app').pipe(
			shell(
				'cd C:/Users/Seerseven/Mithrasatori/Desmond/app && npm install --save-dev --no-audit @seerseven/desmond@latest'
			)
		);
	},
	hey: function () {
		return src('./').pipe(shell('echo hello world'));
	},
};

npm.merge.displayName = 'Merge : Merge @seerseven Package from Node_Modules';
npm.publish.displayName = 'Publish : Publish @seerseven Package to NPM';
npm.install.displayName = 'Install : Install @seerseven NPM Package';

exports.publish = series(npm.publish);
exports.install = series(npm.install);
exports.merge = series(npm.merge);

exports.package = series(ver.npm, npm.merge, npm.publish);
exports.npmpackage = series(ver.npm, npm.merge, npm.publish, npm.install);
