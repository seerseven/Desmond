'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
var fs = require('fs');

//Variables

const tholos = 'state/tholos';
const vault = 'state/tholos/archives';
const themevault = 'state/tholos/themes';

const NONODE = '!app/node_modules/**';
const NOMOD = '!./node_modules/**';
const NOAPP = '!./app/**';
const NONPM = '!./npm/**';
const NOSTATE = '!./state/**';
const NOTHEME = '!app/shopify/themes/**';
const NOLOCK = '!app/package-lock.json';
const nodemon = 'app/node_modules/@seerseven/desmond/src/*.js';
var months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
var days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min = d.getMinutes();

var ampm = 'am';
if (hr > 12) {
	hr -= 12;
	ampm = 'pm';
}
var strhr = hr.toString();
var strmin = min.toString();
var ti = strhr + strmin;
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();
var x = '' + hr + ampm + '-' + date + month + year;
var sh = '' + ti + ampm + '-' + date + month + year;
var caps = x.toUpperCase();
var shCaps = sh.toUpperCase();
var base = 'state/tholos/';
var app = 'APP-';
var npm = 'NPM-';
var shop = 'THEME-V00-';
var arch = 'ARCHIVE-';
var des = 'DES-';
var zp = '.zip';

//Folder Names with Timestamp
function dirName(val) {
	if (val === 'app') {
		var full = base + app + caps;
	}
	if (val === 'npm') {
		var full = base + npm + caps;
	}
	if (val === 'shop') {
		var full = base + shop + shCaps;
	}
	if (val === 'arch') {
		var full = base + arch + caps;
	}
	if (val === 'des') {
		var full = base + des + caps;
	}
	return full;
}
function zipName(val) {
	if (val === 'app') {
		var full = app + caps + zp;
	}
	if (val === 'npm') {
		var full = npm + caps + zp;
	}
	if (val === 'shop') {
		var full = shop + shCaps + zp;
	}
	if (val === 'arch') {
		var full = arch + caps + zp;
	}
	if (val === 'des') {
		var full = des + caps + zp;
	}
	return full;
}
var appName = dirName('app');
var npmName = dirName('npm');
var shopName = dirName('shop');
var desName = dirName('des');
var appZipName = zipName('app');
var npmZipName = zipName('npm');
var shopZipName = zipName('shop');
var archZipName = zipName('arch');
var desZipName = zipName('des');

const desmond = {
	copy: function () {
		const folders = [desName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		return src(['./**/*', NOMOD, NOAPP, NONPM, NOSTATE]).pipe(dest(desName));
	},
	zip: function () {
		return src([desName + '/**/*', desName + '/.*/**/*'])
			.pipe(zip(desZipName))
			.pipe(dest(vault));
	},
	rem: function () {
		return src(desName).pipe(clean());
	},
};

const theme = {
	copy: function () {
		const folders = [appName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		return src(['app/**/*', NONODE, 'app/.*/**/*']).pipe(dest(appName));
	},
	zip: function () {
		return src([appName + '/**/*', appName + '/.*/**/*'])
			.pipe(zip(appZipName))
			.pipe(dest(vault));
	},
	rem: function () {
		return src(appName).pipe(clean());
	},
};

const node = {
	copy: function () {
		const folders = [npmName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		return src('npm/**/*').pipe(dest(npmName));
	},
	zip: function () {
		return src([npmName + '/**/*'])
			.pipe(zip(npmZipName))
			.pipe(dest(vault));
	},
	rem: function () {
		return src(npmName).pipe(clean());
	},
};

const shopify = {
	copy: function () {
		const folders = [shopName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		return src(['app/shopify/**/*', NOTHEME]).pipe(dest(shopName));
	},
	zip: function () {
		return src([shopName + '/**/*'])
			.pipe(zip(shopZipName))
			.pipe(dest(themevault));
	},
	rem: function () {
		return src(shopName).pipe(clean());
	},
};

const archive = {
	zip: function () {
		return src([
			'state/tholos/**/*',
			'!state/tholos/archives/**',
			'!state/tholos/themes/**',
		])
			.pipe(zip(archZipName))
			.pipe(dest(vault));
	},
	rem: function () {
		return src([npmName, appName, desName]).pipe(clean());
	},
	merge: function () {
		return src(nodemon).pipe(dest('npm/src'));
	},
};

exports.dcopy = desmond.copy;
exports.dzip = desmond.zip;
exports.drem = desmond.rem;

exports.tcopy = theme.copy;
exports.tzip = theme.zip;
exports.trem = theme.rem;

exports.ncopy = node.copy;
exports.nzip = node.zip;
exports.nrem = node.rem;

exports.scopy = shopify.copy;
exports.szip = shopify.zip;
exports.srem = shopify.rem;

exports.merge = archive.merge;
exports.zip = archive.zip;
exports.rem = archive.rem;

exports.copy = parallel(desmond.copy, theme.copy, node.copy);
exports.shopifytheme = series(shopify.copy, shopify.zip, shopify.rem);
