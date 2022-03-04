'use strict';

const { src, dest, parallel, watch } = require('gulp');

const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

//Define Src and Dest Filepaths
const buildURL = '../src/build/';
const vendorURL = '../src/js/vendors/';
const scriptURL = '..src/scripts/';
const minURL = '../theme/assets';
const all = '**/*.js';

//List Javascript Vendors in Bundle Order
var vendors = ['jquery', 'jqueryUI', 'aos', 'rellax'];

//Itterate Through Vendor Array adding Filepath Strings
vendors = vendors.map((i) => scriptURL + i);

//Move, Minify, and Rename Bundled Modules
function moduleJS() {
	return src([buildURL + all])
		.pipe(plumber())
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(minURL));
}
//Watch Build Folder For Files
function watchModJS() {
	watch([buildURL + '*.js'], moduleJS);
}

//Move, Minify, and Rename Bundled Vendors
function vendorJS() {
	return src(vendors)
		.pipe(plumber())
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(minURL));
}

//Watch Vendor Folder For Files
function watchVenJS() {
	watch([vendorURL + '*.js'], vendorJS);
}

//Build Complex Tasks
const watchScripts = parallel(watchModJS, watchVenJS);
const jsTasks = parallel(moduleJS, vendorJS);

exports.jsTasks = jsTasks;
exports.watchScripts = watchScripts;
