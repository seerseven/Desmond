// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const shell = require('gulp-shell');

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
const tasks = {
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
};

//Exports
exports.img = tasks.img;
exports.vid = tasks.vid;
