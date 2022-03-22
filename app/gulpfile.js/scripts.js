const { task, series, watch, src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const clean = require('gulp-clean');
const chalk = require('./chalk.js');
const log = require('./chalk.js');
const c = require('./chalk.js');
const z = ' JSX: ';

//Main Variables
const v = {
	build: 'src/build/',
	jsLibs: 'src/js/libs/',
	srcDist: 'src/dist',
	paraDist: 'parallax/assets',
	shopDist: 'shopify/assets',
	dist: ['parallax/assets', 'shopify/assets'],
	clean: [
		'shopify/assets/*.js',
		'!shopify/assets/*.css',
		'!shopify/assets/desmond.js',
		'!shopify/assets/desmond.min.js',
	],
	fQuery: ['jquery.js', 'jqueryUI.js'],
	fLibs: ['three.js', 'vanta.js', 'aos.js', 'rellax.js'],
	fCore: ['jquery.js', 'jqueryUI.js', 'popper.js', 'mdball.js'],
	fBuild: ['shopify.js', 'core.js', 'libs.js', 'theme.js'],
};
v.fQuery = v.fQuery.map((i) => v.jsLibs + i);
v.fLibs = v.fLibs.map((i) => v.jsLibs + i);
v.fCore = v.fCore.map((i) => v.jsLibs + i);
v.fBuild = v.fBuild.map((i) => v.srcDist + i);

const js = {
	shopify: function () {
		c.logger(' JSX ', 'COMPILE SHOPIFY JS  ( module )', c.yell);
		const s = chalk.start();
		log.cmd('Compile MODULES to JS', c.lpurp);
		return src([v.build + 'shopify/shopify.js'])
			.pipe(plumber())
			.pipe(dest(v.jsLibs), log.cmd('Dist Unminified JS', c.lpink))
			.pipe(dest(v.srcDist))
			.pipe(dest(v.shopDist))
			.pipe(uglify(), log.cmd('Rename, Minify & Build', c.teal))
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist))
			.on('end', () => {
				chalk.end(z, 'SHOPIFY.MIN.JS', c.cyan, s);
				chalk.desmond(c.yell);
			});
	},
	query: function () {
		return src(v.fQuery)
			.pipe(plumber())
			.pipe(concat('jQuery.js'))
			.pipe(uglify())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.paraDist));
	},
	libs: function () {
		c.logger(' JSX ', 'COMPILE LIBS JS  ( lib )', c.oj);
		const s = chalk.start();
		log.cmd('Compile MODULES to JS', c.lpurp);
		return src(v.fLibs)
			.pipe(plumber())
			.pipe(concat('libs.js'), log.cmd('Concatenate JS Libraries', c.pink))
			.pipe(dest(v.srcDist), log.cmd('Dist Unminified JS', c.lpink))
			.pipe(dest(v.shopDist))
			.pipe(uglify(), log.cmd('Rename, Minify & Build', c.teal))
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist))
			.on('end', () => {
				chalk.end(z, 'LIBS.MIN.JS', c.cyan, s);
				chalk.desmond(c.oj);
			});
	},
	core: function () {
		c.logger(' JSX ', 'COMPILE CORE JS  ( lib )', c.oj);
		const s = chalk.start();
		log.cmd('Compile LIBS to JS', c.lpurp);
		return src(v.fCore)
			.pipe(plumber())
			.pipe(concat('core.js'), log.cmd('Concatenate JS Libraries', c.pink))
			.pipe(dest(v.srcDist), log.cmd('Dist Unminified JS', c.lpink))
			.pipe(dest(v.shopDist))
			.pipe(uglify(), log.cmd('Rename, Minify & Build', c.teal))
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist))
			.on('end', () => {
				chalk.end(z, 'CORE.MIN.JS', c.cyan, s);
				chalk.desmond(c.oj);
			});
	},
	theme: function () {
		c.logger(' JSX ', 'COMPILE THEME JS  ( module )', c.yell);
		const s = chalk.start();
		log.cmd('Compile MODULES to JS', c.lpurp);
		return src([v.build + 'theme/theme.js'])
			.pipe(plumber())
			.pipe(dest(v.srcDist), log.cmd('Dist Unminified JS', c.lpink))
			.pipe(dest(v.shopDist))
			.pipe(uglify(), log.cmd('Rename, Minify & Build', c.teal))
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist))
			.on('end', () => {
				chalk.end(z, 'THEME.MIN.JS', c.cyan, s);
				chalk.desmond(c.yell);
			});
	},
	build: function () {
		return src(v.fBuild)
			.pipe(plumber())
			.pipe(concat('desmond.js'))
			.pipe(dest(v.shopDist))
			.pipe(uglify())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.dist));
	},
	clean: function () {
		return src(v.clean).pipe(clean());
	},
};

exports.shopify = js.shopify;
exports.query = js.query;
exports.libs = js.libs;
exports.core = js.core;
exports.theme = js.theme;
exports.build = js.build;
exports.clean = js.clean;

exports.jsmods = parallel(js.shopify, js.theme);
exports.jslibs = parallel(js.libs, js.core);
