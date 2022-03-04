'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const plumber = require('gulp-plumber');
const gulpCopy = require('gulp-copy');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
var fs = require('fs');

//Variables

const tholos = 'jarvis-vault/tholos';
const vault = 'jarvis-vault/tholos/archives';

const NONODE = '!jarvis-core/node_modules/**';
const NOLOCK = '!jarvis-core/package-lock.json';

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
var base = 'jarvis-vault/tholos/';
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
		var full = base + npm + caps;
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
		var full = npm + caps + zp;
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
	return src(['jarvis-core/**/*', NONODE, 'jarvis-core/.*/**/*']).pipe(
		dest(coreName)
	);
}
function cZip() {
	return src([coreName + '/**/*', coreName + '/.*/**/*'])
		.pipe(zip(coreZipName))
		.pipe(dest(tholos));
}
function cClean() {
	return src(coreName).pipe(clean());
}

//Git STEP 1 COPY Files2
function gCopy() {
	return src(['jarvis-git/**/*', 'jarvis-git/.*/**/*']).pipe(dest(gitName));
}
function gZip() {
	return src([gitName + '/**/*', gitName + '/.*/**/*'])
		.pipe(zip(gitZipName))
		.pipe(dest(tholos));
}
function gClean() {
	return src(gitName).pipe(clean());
}

//NPM STEP 1 COPY Files2
function nCopy() {
	return src('jarvis-npm/**/*').pipe(dest(npmName));
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
	return src(['jarvis-vault/tholos/**/*', '!jarvis-vault/tholos/archives/**'])
		.pipe(zip(archZipName))
		.pipe(dest(vault));
}
function burn() {
	return src([
		'jarvis-vault/tholos/**/*',
		'!jarvis-vault/tholos/archives/**',
	]).pipe(clean());
}

//Merge Main Workspace with Git Master and Push to Origin
//Git STEP 1 COPY Files2
function merge() {
	return src(['jarvis-core/**/*', NONODE, NOLOCK, 'jarvis-core/.*/**/*']).pipe(
		dest('jarvis-git')
	);
}

exports.nclean = nClean;
exports.nzip = nZip;
exports.ncopy = nCopy;
exports.gcopy = gCopy;
exports.gzip = gZip;
exports.gclean = gClean;
exports.ccopy = cCopy;
exports.czip = cZip;
exports.cclean = cClean;
exports.mkdir = mkdir;
exports.arc = arc;
exports.burn = burn;
exports.merge = merge;
