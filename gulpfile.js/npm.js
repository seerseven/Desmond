// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');
const nodemon = 'app/node_modules/@seerseven/desmond/src/*.js';
const ver = require('./bump.js');
const c = require('ansi-colors');
const log = require('fancy-log');
const { performance } = require('perf_hooks');

//Define Src and Dest Filepaths
const app = './';
function start() {
	const str = performance.now();
	return str;
}
function end(a, n, x, s) {
	const e = performance.now();
	var done = e - s;
	done = done.toFixed(2);
	log(
		c.bold[a](n),
		c.bold.cyan.italic(`${x} in ${c.bold.yellow(`${done}`)} ms`)
	);
	return done;
}

const npm = {
	merge: function () {
		const s = start();
		return src(nodemon)
			.pipe(dest('npm/src'))
			.on('end', () => {
				end('green', 'NPM', 'Files Merged', s);
			});
	},
	publish: function () {
		const s = start();
		return src('./npm')
			.pipe(shell('cd npm && npm publish'))
			.on('end', () => {
				end('magenta', 'NPM', 'Package Published', s);
			});
	},
	install: function () {
		const s = start();
		return src('./app')
			.pipe(
				shell(
					'cd C:/Users/Seerseven/Mithrasatori/Desmond/app && npm install --save-dev --no-audit @seerseven/desmond@latest'
				)
			)
			.on('end', () => {
				end('red', 'NPM', 'Package Installed', s);
			});
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
