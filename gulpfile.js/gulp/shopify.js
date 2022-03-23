// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const $ = require('../config/require.js');
var fs = require('fs');
const c = require('./chalk.js');
const v = ' Shopify: ';
const start = c.start();
const s = start;
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
		c.desmond(c.shex);
		start;
		const folders = [folder];
		folders.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		c.dir();
		c.desmond(c.shex);
		c.break();
		c.frey();
		return src(['app/shopify/**/*', NOTHEME])
			.pipe(dest(folder))
			.on('end', () => {
				c.end(v, 'Files Copied... ', c.shex);
			});
	},
	zip: function () {
		c.frey();
		start;
		return src([folder + '/**/*'])
			.pipe($.zip(zipper))
			.pipe(dest(themevault))
			.on('end', () => {
				c.end(v, 'Zipped & Archived... ', c.shex);
			});
	},
	clean: function () {
		c.frey();
		start;
		return src(folder)
			.pipe($.clean())
			.on('end', () => {
				c.end(v, 'Files Deleted & Directory Cleansed... ', c.shex);
				c.frey();
			});
	},
	push: function () {
		c.break();
		c.desmond(c.shex);
		start;
		return src('app/shopify')
			.pipe(shell('cd app/shopify && echo y && echo y | shopify theme push'))
			.on('end', () => {
				c.desmond(c.shex);
				c.end(v, 'Theme Pushed Successfully... ', c.shex);
				c.desmond(c.shex);
			});
	},
	unpub: function () {
		c.break();
		c.desmond(c.shex);
		start;
		return src('app/shopify')
			.pipe($.shell('cd app/shopify && shopify theme push --unpublished'))
			.on('end', () => {
				c.desmond(c.shex);
				c.end(v, 'Theme Pushed Successfully... ', c.shex);
				c.desmond(c.shex);
			});
	},
	pull: function () {
		c.break();
		c.desmond(c.shex);
		start;
		return src('app/shopify')
			.pipe($.shell('cd app/shopify && echo y && echo y | shopify theme pull'))
			.on('end', () => {
				c.desmond(c.shex);
				c.end(v, 'Theme Pulled Successfully... ', c.shex);
				c.desmond(c.shex);
			});
	},
	serve: function () {
		c.empty();
		c.desmond(c.shex);
		start;
		return src('app/shopify')
			.pipe($.shell('shopify login --store seerseven.myshopify.com'))
			.pipe($.shell('cd app/shopify && shopify theme serve'))
			.on('end', () => {
				c.end(v, 'Logged into Shopify Local Theme... ', c.shex);
				c.desmond(c.shex);
			});
	},
	links: function () {
		c.empty();
		start;
		c.url();
		return src('app/shopify');
	},
	devlinks: function () {
		c.empty();
		start;
		c.dev();
		return src('app/shopify');
	},
};

shopify.copy.displayName =
	'Shopify(copy)  : Copy Shopify Theme Files for Backup';
shopify.zip.displayName = 'Shopify(zip)   : Zip Shopify Theme Files & Archive';
shopify.clean.displayName = 'Shopify(clean) : Clean Theme File Leftovers';
shopify.push.displayName = 'Shopify(shove)  : Push Local Changes to Live Theme';

exports.copy = series(shopify.copy);
exports.links = series(shopify.links);
exports.devlinks = series(shopify.devlinks);
exports.serve = series(shopify.serve);
exports.pull = series(shopify.pull);
exports.unpub = series(shopify.unpub);
exports.zip = series(shopify.zip);
exports.clean = series(shopify.clean);
exports.shove = series(shopify.push, shopify.links);
exports.deslinks = series(shopify.devlinks, shopify.links);
exports.theme = series(
	shopify.copy,
	shopify.zip,
	shopify.clean,
	shopify.push,
	shopify.links
);
