'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const $ = require('../config/require.js');
const c = require('./chalk.js');
var fs = require('fs');
const start = c.start();
const s = start;
//Variables

const vault = 'state/tholos/archives';
const NONODE = '!app/node_modules/**';
const NOMOD = '!./node_modules/**';
const NOAPP = '!./app/**';
const NONPM = '!./npm/**';
const NOSTATE = '!./state/**';
var zp = '.zip';
var base = 'state/tholos/';

const v = ' Archive:Core ';
const v1 = ' Archive:App ';
const v2 = ' Archive:Npm ';
const v3 = ' Archive:Pro ';
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
	if (val === 'app') {
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

const dez = {
	copy: function () {
		start;
		const folders = [desName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		c.logger(' Desmond: ', 'Created Backup Core Folder', '#6db91c', 2);
		c.empty();
		return src(['./**/*', NOMOD, NOAPP, NONPM, NOSTATE])
			.pipe(dest(desName))
			.on('end', () => {
				c.frey();
				c.end(v, 'Desmond(core) Files Copied... ', '#6db91c', 2);
				c.frey();
			});
	},
	zip: function () {
		start;
		return src([desName + '/**/*', desName + '/.*/**/*'])
			.pipe($.zip(desZipName))
			.pipe(dest(vault))
			.on('end', () => {
				c.frey();
				c.end(v, 'Core Files Zipped & Archived... ', '#6db91c', 2);
				c.frey();
			});
	},
	clean: function () {
		start;
		return src(desName)
			.pipe($.clean())
			.on('end', () => {
				c.frey();
				c.end(v, 'Directory Cleansed, Residuals Deleted... ', '#6db91c', 2);
				c.frey();
				c.empty();
				c.desmond('#6db91c');
			});
	},
};

const app = {
	copy: function () {
		start;
		const folders = [appName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		c.logger(' Desmond: ', 'Created Backup App Folder', c.thex, 2);
		c.empty();
		return src(['app/**/*', NONODE, 'app/.*/**/*'])
			.pipe(dest(appName))
			.on('end', () => {
				c.frey();
				c.end(v1, 'Desmond(app) Files Copied... ', c.thex, 2);
				c.frey();
			});
	},
	zip: function () {
		start;
		return src([appName + '/**/*', appName + '/.*/**/*'])
			.pipe($.zip(appZipName))
			.pipe(dest(vault))
			.on('end', () => {
				c.frey();
				c.end(v1, 'App Files Zipped & Archived... ', c.thex, 2);
				c.frey();
			});
	},
	clean: function () {
		start;
		return src(appName)
			.pipe($.clean())
			.on('end', () => {
				c.frey();
				c.end(v1, 'Directory Cleansed, Residuals Deleted... ', c.thex, 2);
				c.frey();
				c.empty();
				c.desmond(c.thex);
			});
	},
};

const node = {
	copy: function () {
		start;
		const folders = [npmName];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		c.logger(' Desmond: ', 'Created Backup NPM Folder', '#e4329b', 2);
		c.empty();
		return src('npm/**/*')
			.pipe(dest(npmName))
			.on('end', () => {
				c.frey();
				c.end(v2, 'Desmond(npm) Files Copied... ', '#e4329b', 2);
				c.frey();
			});
	},
	zip: function () {
		start;
		return src([npmName + '/**/*'])
			.pipe($.zip(npmZipName))
			.pipe(dest(vault))
			.on('end', () => {
				c.frey();
				c.end(v2, 'NPM Files Zipped & Archived... ', '#e4329b', 2);
				c.frey();
			});
	},
	clean: function () {
		start;
		return src(npmName)
			.pipe($.clean())
			.on('end', () => {
				c.frey();
				c.end(v2, 'Directory Cleansed, Residuals Deleted... ', '#e4329b', 2);
				c.frey();
				c.empty();
				c.desmond('#e4329b');
			});
	},
};

const project = {
	zip: function () {
		start;
		return src([
			'state/tholos/**/*',
			'!state/tholos/archives/**',
			'!state/tholos/themes/**',
		])
			.pipe($.zip(archZipName))
			.pipe(dest(vault))
			.on('end', () => {
				c.frey();
				c.end(v3, 'Project Folders Zipped & Archived... ', c.ahex);
				c.frey();
			});
	},
	clean: function () {
		start;
		return src([npmName, appName, desName])
			.pipe($.clean())
			.on('end', () => {
				c.frey();
				c.end(v3, 'Directory Cleansed, Residuals Deleted... ', c.ahex);
				c.frey();
				c.empty();
				c.desmond(c.ahex);
			});
	},
};

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

exports.des = series(c.br, dez.copy, dez.zip, dez.clean);
exports.app = series(c.br, app.copy, app.zip, app.clean);
exports.npm = series(c.br, node.copy, node.zip, node.clean);
exports.project = series(
	parallel(dez.copy, app.copy, node.copy),
	project.zip,
	project.clean
);

// dez.copy.displayName = 'Des(copy)      : Copy Desmond Files for Backup';
// dez.zip.displayName = 'Des(zip)       : Zip Desmond Files & Archive';
// dez.clean.displayName = 'Des(clean)     : Clean File Leftovers';
// app.copy.displayName = 'App(Copy)      : Copy App Files for Backup';
// app.zip.displayName = 'App(zip)       : Zip App Files & Archive';
// app.clean.displayName = 'App(clean)     : Clean File Leftovers';
// node.copy.displayName = 'Npm(copy)      : Copy NPM Files for Backup';
// node.zip.displayName = 'Npm(zip)       : Zip NPM Files & Archive';
// node.clean.displayName = 'Npm(clean)     : Clean File Leftovers';
// project.zip.displayName = 'Project(zip)   : Zip Project Folders & Archive';
// project.clean.displayName = 'Project(clean) : Clean Project File Leftovers';
