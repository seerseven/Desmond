const { task, series, watch, src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const clean = require('gulp-clean');

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
		return src([v.build + 'shopify.js'])
			.pipe(plumber())
			.pipe(dest(v.jsLibs))
			.pipe(dest(v.srcDist))
			.pipe(dest(v.shopDist))
			.pipe(uglify())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist));
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
		return src(v.fLibs)
			.pipe(plumber())
			.pipe(concat('libs.js'))
			.pipe(dest(v.srcDist))
			.pipe(dest(v.shopDist))
			.pipe(uglify())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist));
	},
	core: function () {
		return src(v.fCore)
			.pipe(plumber())
			.pipe(concat('core.js'))
			.pipe(dest(v.srcDist))
			.pipe(dest(v.shopDist))
			.pipe(uglify())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist));
	},
	theme: function () {
		return src([v.build + 'theme.js'])
			.pipe(plumber())
			.pipe(dest(v.srcDist))
			.pipe(dest(v.shopDist))
			.pipe(uglify())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist));
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
