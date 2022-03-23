// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const $ = require('../config/require.js');
const ver = require('./bump.js');
const c = require('./chalk.js');
const start = c.start();
const nodemon = 'app/node_modules/@seerseven/desmond/src/*.js';
const v = ' NPM: ';

const npm = {
	merge: function () {
		start;
		return src(nodemon)
			.pipe(dest('npm/src'))
			.on('end', () => {
				c.frey();
				c.end(v, 'Files Merged... ', c.nhex);
				c.frey();
			});
	},
	publish: function () {
		start;
		return src('./npm')
			.pipe($.shell('cd npm && npm publish'))
			.on('end', () => {
				c.frey();
				c.end(v, 'Package Published... ', c.nhex);
				c.frey();
			});
	},
	install: function () {
		start;
		return src('./app')
			.pipe(
				$.shell(
					'cd app && npm install -f --save-dev --no-audit @seerseven/desmond@latest'
				)
			)
			.on('end', () => {
				c.frey();
				c.end(v, 'Package Installed... ', c.nhex);
				c.frey();
			});
	},
};

npm.merge.displayName = 'Merge : Merge @seerseven Package from Node_Modules';
npm.publish.displayName = 'Publish : Publish @seerseven Package to NPM';
npm.install.displayName = 'Install : Install @seerseven NPM Package';

exports.publish = series(c.br, npm.publish);
exports.install = series(c.br, npm.install);
exports.merge = series(c.br, npm.merge);

exports.package = series(ver.npm, npm.merge, npm.publish);
exports.npmpackage = series(ver.npm, npm.merge, npm.publish, npm.install);
