const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat-css');

const v = {
	build: 'src/build/',
	srcDist: 'src/dist',
	paraDist: 'parallax/assets',
	shopDist: 'shopify/assets',
	dist: ['parallax/assets', 'shopify/assets'],
	clean: [
		'shopify/assets/*.css',
		'!shopify/assets/*.js',
		'!shopify/assets/desmond.css',
		'!shopify/assets/desmond.min.css',
	],
};

const f = {
	build: function () {
		var fBuild = ['shopify.css', 'mdb.css', 'theme.css'];
		fBuild = fBuild.map((i) => v.srcDist + i);
		return fBuild;
	},
};

const css = {
	shopify: function () {
		return src([v.build + 'shopify.css'])
			.pipe(plumber())
			.pipe(postcss())
			.pipe(dest(v.srcDist))
			.pipe(cssnano())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist));
	},
	mdb: function () {
		return src([v.build + 'mdb.css'])
			.pipe(plumber())
			.pipe(postcss())
			.pipe(dest(v.srcDist))
			.pipe(cssnano())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist));
	},
	notion: function () {
		return src([v.build + 'notion.css'])
			.pipe(plumber())
			.pipe(postcss())
			.pipe(cssnano())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.paraDist));
	},
	theme: function () {
		return src([v.build + 'theme.css'])
			.pipe(plumber())
			.pipe(postcss())
			.pipe(dest(v.srcDist))
			.pipe(cssnano())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist))
			.pipe(dest(v.paraDist));
	},
	build: function () {
		return src(f.build)
			.pipe(plumber())
			.pipe(concat('desmond.css'))
			.pipe(dest(v.dist))
			.pipe(cssnano())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.dist));
	},
	clean: function () {
		return src(v.clean).pipe(clean());
	},
};

exports.shopify = css.shopify;
exports.mdb = css.mdb;
exports.notion = css.notion;
exports.theme = css.theme;
exports.build = css.build;
exports.clean = css.clean;
