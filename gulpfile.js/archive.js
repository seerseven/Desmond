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

//Make New Dirctories for Backup Files
function mkdir(cb) {
	const folders = [appName, npmName, desName];
	folders.forEach((dir) => {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
			console.log('📁  folder created:', dir);
		}
	});
	cb();
}

function desDir(cb) {
	const folders = [desName];
	folders.forEach((dir) => {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
			console.log('📁  folder created:', dir);
		}
	});
	cb();
}

//Git STEP 1 COPY Files2
function desCopy() {
	return src(['./**/*', NOMOD, NOAPP, NONPM, NOSTATE]).pipe(dest(desName));
}
function desZip() {
	return src([desName + '/**/*', desName + '/.*/**/*'])
		.pipe(zip(desZipName))
		.pipe(dest(tholos));
}
function desClean() {
	return src(desName).pipe(clean());
}

//Git STEP 1 COPY Files2
function appCopy() {
	return src(['app/**/*', NONODE, 'app/.*/**/*']).pipe(dest(appName));
}
function appZip() {
	return src([appName + '/**/*', appName + '/.*/**/*'])
		.pipe(zip(appZipName))
		.pipe(dest(tholos));
}
function appClean() {
	return src(appName).pipe(clean());
}

//NPM STEP 1 COPY Files2
function nodeCopy() {
	return src('npm/**/*').pipe(dest(npmName));
}
function nodeZip() {
	return src([npmName + '/**/*'])
		.pipe(zip(npmZipName))
		.pipe(dest(tholos));
}
function nodeClean() {
	return src(npmName).pipe(clean());
}

//NPM STEP 1 COPY Files2

function shopifyDir(cb) {
	const folders = [shopName];
	folders.forEach((dir) => {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
			console.log('📁  folder created:', dir);
		}
	});
	cb();
}

function shopifyCopy() {
	return src(['app/shopify/**/*', NOTHEME]).pipe(dest(shopName));
}
function shopifyZip() {
	return src([shopName + '/**/*'])
		.pipe(zip(shopZipName))
		.pipe(dest(tholos));
}
function shopifyClean() {
	return src(shopName).pipe(clean());
}
function shopifyArc() {
	return src([
		'state/tholos/**/*',
		'!state/tholos/archives/**',
		'!state/tholos/themes/**',
	]).pipe(dest(themevault));
}
function shopifyBurn() {
	return src([
		'state/tholos/**/*',
		'!state/tholos/archives/**',
		'!state/tholos/themes/**',
	]).pipe(clean());
}

//Once All Folders are Zipped
//Compile One Master ZIP Archive
function arc() {
	return src([
		'state/tholos/**/*',
		'!state/tholos/archives/**',
		'!state/tholos/themes/**',
	])
		.pipe(zip(archZipName))
		.pipe(dest(vault));
}
function burn() {
	return src([
		'state/tholos/**/*',
		'!state/tholos/archives/**',
		'!state/tholos/themes/**',
	]).pipe(clean());
}

//Merge Main Workspace with Git Master and Push to Origin
//Git STEP 1 COPY Files2
function merge() {
	return src(nodemon).pipe(dest('npm/src'));
}
exports.desdir = desDir;
exports.desclean = desClean;
exports.deszip = desZip;
exports.descopy = desCopy;

exports.nodeclean = nodeClean;
exports.nodezip = nodeZip;
exports.nodecopy = nodeCopy;

exports.shopifydir = shopifyDir;
exports.shopifyclean = shopifyClean;
exports.shopifyzip = shopifyZip;
exports.shopifycopy = shopifyCopy;
exports.shopifyarc = shopifyArc;
exports.shopifyburn = shopifyBurn;

exports.appcopy = appCopy;
exports.appzip = appZip;
exports.appclean = appClean;
exports.mkdir = mkdir;
exports.arc = arc;
exports.burn = burn;
exports.merge = merge;
