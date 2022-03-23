// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');
const nodemon = 'app/node_modules/@seerseven/desmond/src/*.js';
const ver = require('./bump.js');
const chalk = require('./chalk.js');
const cmd = require('./chalk.js');
const v = ' NPM: ';

//Define Src and Dest Filepaths

const npm = {
	merge: function () {
		const s = chalk.start();
		return src(nodemon)
			.pipe(dest('npm/src'))
			.on('end', () => {
				chalk.frey();
				chalk.end(v, 'Files Merged... ', chalk.nhex, s);
				chalk.frey();
			});
	},
	publish: function () {
		const s = chalk.start();
		return src('./npm')
			.pipe(shell('cd npm && npm publish'))
			.on('end', () => {
				chalk.frey();
				chalk.end(v, 'Package Published... ', chalk.nhex, s);
				chalk.frey();
			});
	},
	install: function () {
		const s = chalk.start();
		return src('./app')
			.pipe(
				shell(
					'cd app && npm install -f --save-dev --no-audit @seerseven/desmond@latest'
				)
			)
			.on('end', () => {
				chalk.frey();
				chalk.end(v, 'Package Installed... ', chalk.nhex, s);
				chalk.frey();
			});
	},
};

npm.merge.displayName = 'Merge : Merge @seerseven Package from Node_Modules';
npm.publish.displayName = 'Publish : Publish @seerseven Package to NPM';
npm.install.displayName = 'Install : Install @seerseven NPM Package';

exports.publish = series(chalk.br, npm.publish);
exports.install = series(chalk.br, npm.install);
exports.merge = series(chalk.br, npm.merge);

exports.package = series(ver.npm, npm.merge, npm.publish);
exports.npmpackage = series(ver.npm, npm.merge, npm.publish, npm.install);
