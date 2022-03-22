'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
var fs = require('fs');
const version = require('./bump.js');
const c = require('chalk');
const log = require('fancy-log');
const { performance } = require('perf_hooks');

//Variables
const vault = 'state/tholos/archives';
const NONODE = '!app/node_modules/**';
const NOMOD = '!./node_modules/**';
const NOAPP = '!./app/**';
const NONPM = '!./npm/**';
const NOSTATE = '!./state/**';
var zp = '.zip';
var base = 'state/tholos/';
const f = {
	app: 'APP-',
	npm: 'NPM-',
	arch: 'ARCHIVE-',
	des: 'DES-',
};
function folderNamer() {
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
	var caps = x.toUpperCase();
	return caps;
}
var timeDate = folderNamer();
function dirName(val) {
	if (val === 'app') {
		var full = base + f.app + timeDate;
	}
	if (val === 'npm') {
		var full = base + f.npm + timeDate;
	}
	if (val === 'arch') {
		var full = base + f.arch + timeDate;
	}
	if (val === 'des') {
		var full = base + f.des + timeDate;
	}
	return full;
}
function zipName(val) {
	if (val === 'appp') {
		var full = f.app + timeDate + zp;
	}
	if (val === 'npm') {
		var full = f.npm + timeDate + zp;
	}
	if (val === 'arch') {
		var full = f.arch + timeDate + zp;
	}
	if (val === 'des') {
		var full = f.des + timeDate + zp;
	}
	return full;
}
var appName = dirName('app');
var npmName = dirName('npm');
var desName = dirName('des');
var appZipName = zipName('app');
var npmZipName = zipName('npm');
var archZipName = zipName('arch');
var desZipName = zipName('des');

function start() {
	const str = performance.now();
	return str;
}
function end(a, n, x, s) {
	const e = performance.now();
	var done = e - s;
	done = done.toFixed(2);
	log(
		c.bold[a](n),
		c.bold.cyan.italic(`${x} in ${c.bold.yellow(`${done}`)} ms`)
	);
	return done;
}

const dez = {
	copy: function () {
		const s = start();
		const folders = [desName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		log(c.bold.cyan.italic('Core Folder Created'));
		return src(['./**/*', NOMOD, NOAPP, NONPM, NOSTATE])
			.pipe(dest(desName))
			.on('end', () => {
				end('magenta', 'Core', 'Files Copied', s);
			});
	},
	zip: function () {
		const s = start();
		return src([desName + '/**/*', desName + '/.*/**/*'])
			.pipe(zip(desZipName))
			.pipe(dest(vault))
			.on('end', () => {
				end('blue', 'Core', 'Files Zipped & Archived', s);
			});
	},
	clean: function () {
		const s = start();
		return src(desName)
			.pipe(clean())
			.on('end', () => {
				end('yellow', 'Core', 'Files & Folders Removed | Directory Cleaned', s);
			});
	},
};

const app = {
	copy: function () {
		const s = start();
		const folders = [appName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		log(c.bold.cyan.italic('App Folder Created'));
		return src(['app/**/*', NONODE, 'app/.*/**/*'])
			.pipe(dest(appName))
			.on('end', () => {
				end('magenta', 'App', 'Files Copied', s);
			});
	},
	zip: function () {
		const s = start();
		return src([appName + '/**/*', appName + '/.*/**/*'])
			.pipe(zip(appZipName))
			.pipe(dest(vault))
			.on('end', () => {
				end('blue', 'App', 'Files Zipped & Archived', s);
			});
	},
	clean: function () {
		const s = start();
		return src(appName)
			.pipe(clean())
			.on('end', () => {
				end('yellow', 'App', 'Files & Folders Removed | Directory Cleaned', s);
			});
	},
};

const node = {
	copy: function () {
		const s = start();
		const folders = [npmName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		log(c.bold.cyan.italic('Node Folder Created'));
		return src('npm/**/*')
			.pipe(dest(npmName))
			.on('end', () => {
				end('magenta', 'Node', 'Files Copied', s);
			});
	},
	zip: function () {
		const s = start();
		return src([npmName + '/**/*'])
			.pipe(zip(npmZipName))
			.pipe(dest(vault))
			.on('end', () => {
				end('blue', 'Node', 'Files Zipped & Archived', s);
			});
	},
	clean: function () {
		const s = start();
		return src(npmName)
			.pipe(clean())
			.on('end', () => {
				end('yellow', 'App', 'Files & Folders Removed | Directory Cleaned', s);
			});
	},
};

const project = {
	zip: function () {
		const s = start();
		return src([
			'state/tholos/**/*',
			'!state/tholos/archives/**',
			'!state/tholos/themes/**',
		])
			.pipe(zip(archZipName))
			.pipe(dest(vault))
			.on('end', () => {
				end('blue', 'Project', 'Files Zipped & Archived', s);
			});
	},
	clean: function () {
		const s = start();
		return src([npmName, appName, desName])
			.pipe(clean())
			.on('end', () => {
				end(
					'yellow',
					'Project',
					'Files & Folders Removed | Directory Cleaned',
					s
				);
			});
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
