const { series, parallel, src, dest, task } = require('gulp');

//require
const conf = require('../config/config');
const log = require('../config/cmd');
const auto = {
	generateTasks: function () {
		const exportsArray = Object.keys(module.exports);
		exportsArray.map((element) => {
			return task(element, module.exports[element]);
		});
	},
};

//config
const img = conf.assets.imgs;
const vid = conf.assets.vids;
const x = conf.colors;
const p = conf.plugins;
const s = conf.paths.input;
const d = conf.paths.output;
const o = conf.plugins.opts;
const l = log;

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
module.exports = {
	vid: function () {
		return src(s.video).pipe(
			p.shell([vid.ff + file.input + ' ' + file.output])
		);
	},

	img: function () {
		return src([img.logo, img.gif, img.jpg, img.png, img.svg])
			.pipe(p.plum())
			.pipe(
				p.imagemin([
					imagemin.gifsicle({ interlaced: true }),
					imagemin.mozjpeg({ quality: 75, progressive: true }),
					imagemin.optipng({ optimizationLevel: 5 }),
					imagemin.svgo({
						plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
					}),
				])
			)
			.pipe(dest(d.shopify))
			.pipe(dest(d.dist));
	},
};

auto.generateTasks();
