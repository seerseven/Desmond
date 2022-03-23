'use strict';
const { series, parallel, watch, src, dest, task } = require('gulp');
const $ = require('../config/require.js');
const c = require('./chalk.js');
const v = ' Bump: ';
const start = c.start();
const s = start;
const bump = {
	app: function () {
		c.desmond(c.bhex);
		start;
		return src('app/package.json')
			.pipe($.plumber())
			.pipe($.bump({ type: 'patch' }))
			.pipe(dest('app'))
			.on('end', () => {
				c.empty();
				c.frey();
				c.end(v, 'App Version... ', c.bhex);
				c.frey();
			});
	},
	npm: function () {
		start;
		return src('npm/package.json')
			.pipe($.plumber())
			.pipe($.bump({ type: 'patch' }))
			.pipe(dest('npm'))
			.on('end', () => {
				c.frey();
				c.end(v, 'Npm Version... ', c.bhex);
				c.frey();
			});
	},
	des: function () {
		start;
		return src('./package.json')
			.pipe($.plumber())
			.pipe($.bump({ type: 'patch' }))
			.pipe(dest('./'))
			.on('end', () => {
				c.frey();
				c.end(v, 'Core Version... ', c.bhex);
				c.frey();
				c.empty();
			});
	},
	all: function () {
		start;
		return (
			c.break(),
			bump.app(),
			bump.npm(),
			bump.des().on('end', () => {
				c.end(v, 'All Package Versions... ', c.bhex);
				c.desmond(c.bhex);
			})
		);
	},
};
bump.app.displayName = 'App : Bump App Package Version #';
bump.npm.displayName = 'Npm : Bump NPM Package Version #';
bump.des.displayName = 'Des : Bump Desmond Package Version #';
bump.all.displayName = 'Bump : All Package Version Numbers';

exports.app = series(c.br, bump.app);
exports.npm = series(c.br, bump.npm);
exports.des = series(c.br, bump.des);
exports.bump = series(c.br, bump.all);
