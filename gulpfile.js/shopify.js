// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
var fs = require('fs');
const chalk = require('./chalk.js');
const v = ' Shopify: ';

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
	var sh = '' + ti + ampm + '-' + date + month + year;
	var shCaps = sh.toUpperCase();
	var shop = 'THEME-V00-';
	return shop + shCaps;
}
const themevault = 'state/tholos/themes';
const NOTHEME = '!app/shopify/themes/**';
var base = 'state/tholos/';
var zp = '.zip';
var themeName = folderNamer();
var folder = base + themeName;
var zipper = themeName + zp;

const shopify = {
	copy: function () {
		chalk.desmond(chalk.shex);
		const s = chalk.start();
		const folders = [folder];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		chalk.dir();
		chalk.desmond(chalk.shex);
		chalk.break();
		chalk.frey();
		return src(['app/shopify/**/*', NOTHEME])
			.pipe(dest(folder))
			.on('end', () => {
				chalk.end(v, 'Files Copied... ', chalk.shex, s);
			});
	},
	zip: function () {
		chalk.frey();
		const s = chalk.start();
		return src([folder + '/**/*'])
			.pipe(zip(zipper))
			.pipe(dest(themevault))
			.on('end', () => {
				chalk.end(v, 'Zipped & Archived... ', chalk.shex, s);
			});
	},
	clean: function () {
		chalk.frey();
		const s = chalk.start();
		return src(folder)
			.pipe(clean())
			.on('end', () => {
				chalk.end(v, 'Files Deleted & Directory Cleansed... ', chalk.shex, s);
				chalk.frey();
			});
	},
	push: function () {
		chalk.break();
		chalk.desmond(chalk.shex);
		const s = chalk.start();
		return src('app/shopify')
			.pipe(shell('cd app/shopify && echo y && echo y | shopify theme push'))
			.on('end', () => {
				chalk.desmond(chalk.shex);
				chalk.end(v, 'Theme Pushed Successfully... ', chalk.shex, s);
				chalk.desmond(chalk.shex);
			});
	},
	unpub: function () {
		chalk.break();
		chalk.desmond(chalk.shex);
		const s = chalk.start();
		return src('app/shopify')
			.pipe(shell('cd app/shopify && shopify theme push --unpublished'))
			.on('end', () => {
				chalk.desmond(chalk.shex);
				chalk.end(v, 'Theme Pushed Successfully... ', chalk.shex, s);
				chalk.desmond(chalk.shex);
			});
	},
	pull: function () {
		chalk.break();
		chalk.desmond(chalk.shex);
		const s = chalk.start();
		return src('app/shopify')
			.pipe(shell('cd app/shopify && echo y && echo y | shopify theme pull'))
			.on('end', () => {
				chalk.desmond(chalk.shex);
				chalk.end(v, 'Theme Pulled Successfully... ', chalk.shex, s);
				chalk.desmond(chalk.shex);
			});
	},
	serve: function () {
		chalk.empty();
		chalk.desmond(chalk.shex);
		const s = chalk.start();
		return src('app/shopify')
			.pipe(shell('shopify login --store seerseven.myshopify.com'))
			.pipe(shell('cd app/shopify && shopify theme serve'))
			.on('end', () => {
				chalk.end(v, 'Logged into Shopify Local Theme... ', chalk.shex, s);
				chalk.desmond(chalk.shex);
			});
	},
	links: function () {
		chalk.empty();
		const s = chalk.start();
		chalk.url();
		return src('app/shopify').on('end', () => {
			chalk.desmond(chalk.shex);
			chalk.end(v, 'Displayed Links... ', chalk.shex, s);
			chalk.desmond(chalk.shex);
		});
	},
};

shopify.copy.displayName =
	'Shopify(copy)  : Copy Shopify Theme Files for Backup';
shopify.zip.displayName = 'Shopify(zip)   : Zip Shopify Theme Files & Archive';
shopify.clean.displayName = 'Shopify(clean) : Clean Theme File Leftovers';
shopify.push.displayName = 'Shopify(shove)  : Push Local Changes to Live Theme';

exports.copy = series(shopify.copy);
exports.links = series(shopify.links);
exports.serve = series(shopify.serve);
exports.pull = series(shopify.pull);
exports.unpub = series(shopify.unpub);
exports.zip = series(shopify.zip);
exports.clean = series(shopify.clean);
exports.shove = series(shopify.push, shopify.links);
exports.theme = series(
	shopify.copy,
	shopify.zip,
	shopify.clean,
	shopify.push,
	shopify.links
);
