'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
var fs = require('fs');
const version = require('./bump.js');

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
var appp = 'APP-';
var npm = 'NPM-';
var shop = 'THEME-V00-';
var arch = 'ARCHIVE-';
var des = 'DES-';
var zp = '.zip';

//Folder Names with Timestamp
function dirName(val) {
	if (val === 'appp') {
		var full = base + appp + caps;
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
	if (val === 'appp') {
		var full = appp + caps + zp;
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
var appName = dirName('appp');
var npmName = dirName('npm');
var shopName = dirName('shop');
var desName = dirName('des');
var appZipName = zipName('appp');
var npmZipName = zipName('npm');
var shopZipName = zipName('shop');
var archZipName = zipName('arch');
var desZipName = zipName('des');

const dez = {
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
	clean: function () {
		return src(desName).pipe(clean());
	},
};

const app = {
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
	clean: function () {
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
	clean: function () {
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
	clean: function () {
		return src(shopName).pipe(clean());
	},
};

const project = {
	zip: function () {
		return src([
			'state/tholos/**/*',
			'!state/tholos/archives/**',
			'!state/tholos/themes/**',
		])
			.pipe(zip(archZipName))
			.pipe(dest(vault));
	},
	clean: function () {
		return src([npmName, appName, desName]).pipe(clean());
	},
};

dez.copy.displayName = 'Des(copy)      : Copy Desmond Files for Backup';
dez.zip.displayName = 'Des(zip)       : Zip Desmond Files & Archive';
dez.clean.displayName = 'Des(clean)     : Clean File Leftovers';
app.copy.displayName = 'App(Copy)      : Copy App Files for Backup';
app.zip.displayName = 'App(zip)       : Zip App Files & Archive';
app.clean.displayName = 'App(clean)     : Clean File Leftovers';
node.copy.displayName = 'Npm(copy)      : Copy NPM Files for Backup';
node.zip.displayName = 'Npm(zip)       : Zip NPM Files & Archive';
node.clean.displayName = 'Npm(clean)     : Clean File Leftovers';
project.zip.displayName = 'Project(zip)   : Zip Project Folders & Archive';
project.clean.displayName = 'Project(clean) : Clean Project File Leftovers';

exports.dezcopy = dez.copy;
exports.dezzip = dez.zip;
exports.dezclean = dez.clean;

exports.appcopy = app.copy;
exports.appzip = app.zip;
exports.appclean = app.clean;

exports.nodecopy = node.copy;
exports.nodezip = node.zip;
exports.nodeclean = node.clean;

exports.projectzip = project.zip;
exports.projectclean = project.clean;

exports.desmond = series(dez.copy, dez.zip, dez.clean);
exports.app = series(app.copy, app.zip, app.clean);
exports.npm = series(node.copy, node.zip, node.clean);
exports.theme = series(
	parallel(dez.copy, app.copy, node.copy),
	project.zip,
	project.clean
);
exports.project = series(
	version.bump,
	parallel(dez.copy, app.copy, node.copy),
	project.zip,
	project.clean
);
