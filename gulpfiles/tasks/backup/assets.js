// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const shell = require('gulp-shell');
const clean = require('gulp-clean');
const wait = require('gulp-wait');
const chalk = require('./chalk.js');
const log = require('./chalk.js');
const c = require('./chalk.js');
const z = ' SORT: ';

const NOSHOP = '!src/build/shopify/**';
const NOTHEME = '!src/build/theme/**';
const NOVEN = '!src/build/vendors/**';

//Define Main Variables
const v = {
	dist: 'parallax/assets',
	shopify: 'shopify/assets',
	video: 'src/assets/video',
	images: 'src/assets/img',
	ff: 'ffmpeg ',
};
//Grab any Videos and Convert for Web
const vids = {
	in: function () {
		var vidsIN = ['ras.mp4', 'das.mp4'];
		vidsIN = vidsIN.map((i) => '-i ' + v.video + '/' + i);
		const vidsINjoin = vidsIN.join();
		const vidsINstring = vidsINjoin.replace(/,/g, ' ');
		return vidsINstring;
	},

	out: function () {
		var plusOne = (function (n) {
			return function () {
				n += 1;
				return n.toString();
			};
		})(-1);
		const oFormat = '.mkv';
		var vidsOUT = ['ras', 'das'];
		vidsOUT = vidsOUT.map(
			(i) => '-map ' + plusOne() + ' ' + v.dist + '/' + i + oFormat
		);
		const vidsOUTjoin = vidsOUT.join();
		const vidsOUTstring = vidsOUTjoin.replace(/,/g, ' ');
		return vidsOUTstring;
	},
};
//Video Input /  Output Functions
const file = {
	input: vids.in(),
	output: vids.out(),
};
//Define Image Source Folders
var imgs = {
	logo: v.images + '/logo/*.{JPG,jpg,png,gif,svg}',
	jpg: v.images + '/jpg/*.{JPG,jpg}',
	png: v.images + '/png/*.png',
	svg: v.images + '/svg/*.svg',
	gif: v.images + '/gif/*.gif',
};
//Main Tasks
const assets = {
	vid: function () {
		return src(v.video).pipe(shell([v.ff + file.input + ' ' + file.output]));
	},

	img: function () {
		return src([imgs.logo, imgs.gif, imgs.jpg, imgs.png, imgs.svg])
			.pipe(plumber())
			.pipe(
				imagemin([
					imagemin.gifsicle({ interlaced: true }),
					imagemin.mozjpeg({ quality: 75, progressive: true }),
					imagemin.optipng({ optimizationLevel: 5 }),
					imagemin.svgo({
						plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
					}),
				])
			)
			.pipe(dest(v.shopify))
			.pipe(dest(v.dist));
	},
	theme: function () {
		c.logger(' GULP ', 'IS SORTING BUILD FILES', c.pink);
		log.cmd('theme.js / shopify.css', c.yell);
		return src(['src/build/theme.js', 'src/build/theme.css'], {
			allowEmpty: true,
		})
			.pipe(plumber())
			.pipe(dest('src/build/theme'));
	},
	shopify: function () {
		log.cmd('shopify.js / shopify.css', c.yell);
		return src(['src/build/shopify.js', 'src/build/shopify.css'], {
			allowEmpty: true,
		})
			.pipe(plumber())
			.pipe(dest('src/build/shopify'));
	},
	vendors: function () {
		log.cmd('mdb.css / notion.css', c.yell);
		return src(['src/build/notion.css', 'src/build/mdb.css'], {
			allowEmpty: true,
		})
			.pipe(plumber())
			.pipe(dest('src/build/vendors'));
	},
	clean: function () {
		const s = chalk.start();
		log.cmd('Risiduals Have Been Removed', c.pink);
		return src(['src/build/**/*', NOTHEME, NOVEN, NOSHOP], {
			allowEmpty: true,
		})
			.pipe(clean())
			.on('end', () => {
				chalk.end(z, 'BUILD FILES SORTED', c.cyan, s);
				chalk.desmond(c.pink);
			});
	},
	desmond: function () {
		chalk.empty();
		chalk.devlinks();
		chalk.empty();
		c.logger(
			' DESMOND ',
			'BUILT PROJECT ASSETS AND WATCHES FOR CHANGES',
			c.des
		);
		return src(['./'], {
			allowEmpty: true,
		}).pipe(plumber());
	},
};

//Exports
exports.img = assets.img;
exports.vid = assets.vid;
exports.desmond = assets.desmond;
exports.mvtheme = assets.theme;
exports.mvshop = assets.shopify;
exports.cleanbuild = assets.clean;
exports.mvven = assets.vendors;
exports.ass = series(assets.img, assets.vid);
exports.sortbuild = series(
	parallel(assets.theme, assets.shopify, assets.vendors),
	assets.clean
);
