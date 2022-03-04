'use strict';

const { src, dest, series, watch } = require('gulp');

const plumber = require('gulp-plumber');
const cssnano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

//Define Src and Dest Filepaths
const buildURL = '../src/build';
const postURL = '../src/styles';
const minURL = '../theme/assets';
const all = '/**/*.css';

//Run Compiled Sass Through PostCSS
function postCSS() {
	return src([buildURL + all])
		.pipe(plumber())
		.pipe(postcss())
		.pipe(dest(postURL));
}

//Watch Build Folder for Changes
function watchPCSS() {
	watch([buildURL + all], postCSS);
}

//Move, Minify and Rename Processed CSS
function minCSS() {
	return src([postURL + all])
		.pipe(plumber())
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(minURL));
}

//Watch Process CSS Folder for Changes
function watchCSS() {
	watch([postURL + all], minCSS);
}

const watchStyles = series(watchPCSS, watchCSS);
const cssTasks = series(postCSS, minCSS);

exports.cssTasks = cssTasks;
exports.watchStyles = watchStyles;
