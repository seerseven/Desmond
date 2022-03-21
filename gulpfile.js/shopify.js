// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
var fs = require('fs');

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
		const folders = [folder];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		return src(['app/shopify/**/*', NOTHEME]).pipe(dest(folder));
	},
	zip: function () {
		return src([folder + '/**/*'])
			.pipe(zip(zipper))
			.pipe(dest(themevault));
	},
	clean: function () {
		return src(folder).pipe(clean());
	},
	push: function () {
		return src('app/shopify').pipe(
			shell('cd app/shopify && echo y && echo y | shopify theme push')
		);
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
