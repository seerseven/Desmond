'use strict';

const { series, parallel, watch, src, dest } = require('gulp');
const bumpVersion = require('gulp-bump');
const plumber = require('gulp-plumber');
const c = require('ansi-colors');
const log = require('fancy-log');
const { performance } = require('perf_hooks');

//Define Src and Dest Filepaths
const app = './';
function start(n, b) {
	// log(c.bold.blue(n), c.bold.cyan.italic(b));
	const str = performance.now();
	return str;
}
function end(n, s) {
	const e = performance.now();
	var done = e - s;
	done = done.toFixed(2);
	log(
		c.bold.blue(n),
		c.bold.cyan.italic(`Version Bumped in ${c.bold.yellow(`${done}`)} ms`)
	);
	return done;
}
const bump = {
	app: function () {
		var n = 'APP';
		const s = start(n, 'Bump Package Version');
		return src('app/package.json')
			.pipe(plumber())
			.pipe(bumpVersion({ type: 'patch' }))
			.pipe(dest('app'))
			.on('end', () => {
				end(n, s);
			});
	},
	npm: function () {
		var n = 'NPM';
		const s = start(n, 'Bump Package Version');
		return src('npm/package.json')
			.pipe(plumber())
			.pipe(bumpVersion({ type: 'patch' }))
			.pipe(dest('npm'))
			.on('end', () => {
				end(n, s);
			});
	},
	des: function () {
		var n = 'DES';
		const s = start(n, 'Bump Package Version');
		return src('./package.json')
			.pipe(plumber())
			.pipe(bumpVersion({ type: 'patch' }))
			.pipe(dest('./'))
			.on('end', () => {
				end(n, s);
			});
	},
	all: function () {
		var n = 'Bump';
		const sa = start(n, 'Package Versions');
		return (
			bump.app(),
			bump.npm(),
			bump.des().on('end', () => {
				end(n, sa);
			})
		);
	},
};
bump.app.displayName = 'App : Bump App Package Version #';
bump.npm.displayName = 'Npm : Bump NPM Package Version #';
bump.des.displayName = 'Des : Bump Desmond Package Version #';
bump.all.displayName = 'Bump : All Package Version Numbers';

exports.app = series(bump.app);
exports.npm = series(bump.npm);
exports.des = series(bump.des);
exports.bump = series(bump.all);
