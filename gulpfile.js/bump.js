'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const bumpVersion = require('gulp-bump');
const plumber = require('gulp-plumber');
const chalk = require('./chalk.js');
const cmd = require('./chalk.js');
const v = ' Bump: ';
const app = './';

const bump = {
	app: function () {
		chalk.desmond(chalk.bhex);
		const s = chalk.start();

		return src('app/package.json')
			.pipe(plumber())
			.pipe(bumpVersion({ type: 'patch' }))
			.pipe(dest('app'))
			.on('end', () => {
				chalk.empty();
				chalk.frey();
				chalk.end(v, 'App Version... ', chalk.bhex, s);
				chalk.frey();
			});
	},
	npm: function () {
		const s = chalk.start();
		return src('npm/package.json')
			.pipe(plumber())
			.pipe(bumpVersion({ type: 'patch' }))
			.pipe(dest('npm'))
			.on('end', () => {
				chalk.frey();
				chalk.end(v, 'Npm Version... ', chalk.bhex, s);
				chalk.frey();
			});
	},
	des: function () {
		const s = chalk.start();
		return src('./package.json')
			.pipe(plumber())
			.pipe(bumpVersion({ type: 'patch' }))
			.pipe(dest('./'))
			.on('end', () => {
				chalk.frey();
				chalk.end(v, 'Core Version... ', chalk.bhex, s);
				chalk.frey();
				chalk.empty();
			});
	},
	all: function () {
		const s = chalk.start();
		return (
			chalk.break(),
			bump.app(),
			bump.npm(),
			bump.des().on('end', () => {
				chalk.end(v, 'All Package Versions... ', chalk.bhex, s);
				chalk.desmond(chalk.bhex);
			})
		);
	},
};

bump.app.displayName = 'App : Bump App Package Version #';
bump.npm.displayName = 'Npm : Bump NPM Package Version #';
bump.des.displayName = 'Des : Bump Desmond Package Version #';
bump.all.displayName = 'Bump : All Package Version Numbers';

exports.app = series(cmd.br, bump.app);
exports.npm = series(cmd.br, bump.npm);
exports.des = series(cmd.br, bump.des);
exports.bump = series(cmd.br, bump.all);
