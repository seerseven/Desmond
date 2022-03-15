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
var app = 'APP-';
var npm = 'NPM-';
var arch = 'ARCHIVE-';
var zp = '.zip';

//Folder Names with Timestamp
function dirName(val) {
	if (val === 'app') {
		var full = base + app + caps;
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
	if (val === 'app') {
		var full = app + caps + zp;
	}
	if (val === 'npm') {
		var full = npm + caps + zp;
	}
	if (val === 'arch') {
		var full = arch + caps + zp;
	}
	return full;
}
var appName = dirName('app');
var npmName = dirName('npm');
var appZipName = zipName('app');
var npmZipName = zipName('npm');
var archZipName = zipName('arch');

//Make New Dirctories for Backup Files
function mkdir(cb) {
	const folders = [appName, npmName];
	folders.forEach((dir) => {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
			console.log('📁  folder created:', dir);
		}
	});
	cb();
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

exports.nodeclean = nodeClean;
exports.nodezip = nodeZip;
exports.nodecopy = nodeCopy;

exports.appcopy = appCopy;
exports.appzip = appZip;
exports.appclean = appClean;
exports.mkdir = mkdir;
exports.arc = arc;
exports.burn = burn;
exports.merge = merge;
