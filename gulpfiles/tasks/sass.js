const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

const scss = {
	scss: function () {
		return src('src/sass/abstracts/utilities/schema/schema.scss')
			.pipe(plumber())
			.pipe(sass({ outputStyle: 'expanded' }))
			.pipe(rename({ basename: 'sche-ma', extname: '.scss' }))
			.pipe(dest('src/sass/abstracts/utilities/schema'));
	},
	cssTOscss: function () {
		return src('src/sass/abstracts/utilities/schema/schema.scss')
			.pipe(plumber())
			.pipe(sass({ outputStyle: 'expanded' }))
			.pipe(rename({ basename: 'sche-ma', extname: '.scss' }))
			.pipe(dest('src/sass/abstracts/utilities/schema'));
	},
	filelist: function () {
		return src('src/sass/shopify/*.scss')
			.pipe(plumber())
			.pipe(require('gulp-filelist')('index.json'))
			.pipe(rename({ prefix: '_', extname: '.scss' }))
			.pipe(dest('src/sass/shopify'));
	},
};

exports.scss = scss.scss;
exports.cts = scss.cssTOscss;
exports.list = scss.filelist;
