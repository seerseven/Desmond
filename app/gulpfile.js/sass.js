const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

function scss() {
	return src('src/sass/abstracts/utilities/schema/schema.scss')
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(rename({ basename: 'sche-ma', extname: '.scss' }))
		.pipe(dest('src/sass/abstracts/utilities/schema'));
}

function cssTOscss() {
	return src('shopify/assets/*.css')
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(rename({ prefix: '_', extname: '.scss' }))
		.pipe(dest('src/sass/shopify'));
}

function filelist() {
	return src('src/sass/shopify/*.scss')
		.pipe(plumber())
		.pipe(require('gulp-filelist')('index.json'))
		.pipe(rename({ prefix: '_', extname: '.scss' }))
		.pipe(dest('src/sass/shopify'));
}

exports.scss = scss;
exports.cts = cssTOscss;
exports.list = filelist;
