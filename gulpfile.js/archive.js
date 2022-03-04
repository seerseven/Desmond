'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
var fs = require('fs');

//Variables

const tholos = 'state/tholos';
const vault = 'state/tholos/archives';

const NONODE = '!app/node_modules/**';
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

var ampm = 'am';
if (hr > 12) {
	hr -= 12;
	ampm = 'pm';
}
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();
var x = '' + hr + ampm + '-' + date + month + year;
var caps = x.toUpperCase();
var base = 'state/tholos/';
var core = 'CORE-';
var git = 'GIT-';
var npm = 'NPM-';
var arch = 'ARCHIVE-';
var zp = '.zip';

//Folder Names with Timestamp
function dirName(val) {
	if (val === 'core') {
		var full = base + core + caps;
	}
	if (val === 'git') {
		var full = base + git + caps;
	}
	if (val === 'npm') {
		var full = base + npm + caps;
	}
	if (val === 'arch') {
		var full = base + arch + caps;
	}
	return full;
}
function zipName(val) {
	if (val === 'core') {
		var full = core + caps + zp;
	}
	if (val === 'git') {
		var full = git + caps + zp;
	}
	if (val === 'npm') {
		var full = npm + caps + zp;
	}
	if (val === 'arch') {
		var full = arch + caps + zp;
	}
	return full;
}
var coreName = dirName('core');
var gitName = dirName('git');
var npmName = dirName('npm');
var archName = dirName('arch');
var coreZipName = zipName('core');
var gitZipName = zipName('git');
var npmZipName = zipName('npm');
var archZipName = zipName('arch');

//Make New Dirctories for Backup Files
function mkdir(cb) {
	const folders = [coreName, gitName, npmName];
	folders.forEach((dir) => {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
			console.log('📁  folder created:', dir);
		}
	});
	cb();
}

//Git STEP 1 COPY Files2
function cCopy() {
	return src(['app/**/*', NONODE, 'app/.*/**/*']).pipe(dest(coreName));
}
function cZip() {
	return src([coreName + '/**/*', coreName + '/.*/**/*'])
		.pipe(zip(coreZipName))
		.pipe(dest(tholos));
}
function cClean() {
	return src(coreName).pipe(clean());
}

//NPM STEP 1 COPY Files2
function nCopy() {
	return src('npm/**/*').pipe(dest(npmName));
}
function nZip() {
	return src([npmName + '/**/*'])
		.pipe(zip(npmZipName))
		.pipe(dest(tholos));
}
function nClean() {
	return src(npmName).pipe(clean());
}

//Once All Folders are Zipped
//Compile One Master ZIP Archive
function arc() {
	return src(['state/tholos/**/*', '!state/tholos/archives/**'])
		.pipe(zip(archZipName))
		.pipe(dest(vault));
}
function burn() {
	return src(['state/tholos/**/*', '!state/tholos/archives/**']).pipe(clean());
}

//Merge Main Workspace with Git Master and Push to Origin
//Git STEP 1 COPY Files2
function merge() {
	return src(nodemon).pipe(dest('npm/src'));
}

exports.nclean = nClean;
exports.nzip = nZip;
exports.ncopy = nCopy;

exports.ccopy = cCopy;
exports.czip = cZip;
exports.cclean = cClean;
exports.mkdir = mkdir;
exports.arc = arc;
exports.burn = burn;
exports.merge = merge;
