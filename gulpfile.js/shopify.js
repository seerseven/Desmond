// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
var fs = require('fs');
const c = require('ansi-colors');
const log = require('fancy-log');
const { performance } = require('perf_hooks');

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

const shopify = {
	copy: function () {
		const s = start();
		const folders = [folder];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		log(c.bold.cyan.italic('Theme Folder Created'));
		return src(['app/shopify/**/*', NOTHEME])
			.pipe(dest(folder))
			.on('end', () => {
				end('green', 'Shopify', 'Files Copied', s);
			});
	},
	zip: function () {
		const s = start();
		return src([folder + '/**/*'])
			.pipe(zip(zipper))
			.pipe(dest(themevault))
			.on('end', () => {
				end('blue', 'Shopify', 'Files Zipped & Archived', s);
			});
	},
	clean: function () {
		const s = start();
		return src(folder)
			.pipe(clean())
			.on('end', () => {
				end(
					'magenta',
					'Shopify',
					'Files & Folders Removed | Directory Cleaned',
					s
				);
			});
	},
	push: function () {
		const s = start();
		return src('app/shopify')
			.pipe(shell('cd app/shopify && echo y && echo y | shopify theme push'))
			.on('end', () => {
				end('yellow', 'Shopify', 'Theme Pushed', s);
			});
	},
};

shopify.copy.displayName =
	'Shopify(copy)  : Copy Shopify Theme Files for Backup';
shopify.zip.displayName = 'Shopify(zip)   : Zip Shopify Theme Files & Archive';
shopify.clean.displayName = 'Shopify(clean) : Clean Theme File Leftovers';
shopify.push.displayName = 'Shopify(shove)  : Push Local Changes to Live Theme';

exports.copy = series(shopify.copy);
exports.zip = series(shopify.zip);
exports.clean = series(shopify.clean);
exports.shove = series(shopify.push);
exports.theme = series(shopify.copy, shopify.zip, shopify.clean, shopify.push);
