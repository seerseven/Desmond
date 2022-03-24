const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat-css');
const notify = require('gulp-notify');
const noop = require('gulp-noop');
const chalk = require('./chalk.js');
const log = require('./chalk.js');
const c = require('./chalk.js');
const z = ' CSS: ';

const v = {
	build: 'src/build/',
	srcDist: 'src/dist',
	paraDist: 'parallax/assets',
	shopDist: 'shopify/assets',
	dist: ['parallax/assets', 'shopify/assets'],
	clean: [
		'shopify/assets/*.css',
		'!shopify/assets/*.js',
		'!shopify/assets/desmond.css',
		'!shopify/assets/desmond.min.css',
	],
};

const f = {
	build: function () {
		var fBuild = ['shopify.css', 'mdb.css', 'theme.css'];
		fBuild = fBuild.map((i) => v.srcDist + i);
		return fBuild;
	},
};

const css = {
	shopify: function () {
		c.logger(' CSS ', 'COMPILE SHOPIFY CSS', c.blue);
		const s = chalk.start();
		log.cmd('Compile SASS to CSS', c.pink);
		return src([v.build + 'shopify/shopify.css'])
			.pipe(plumber())
			.pipe(dest(v.srcDist), log.cmd('Dist Unminified CSS', c.yell))
			.pipe(dest(v.shopDist))
			.pipe(cssnano(), log.cmd('Rename, Minify & Build', c.teal))
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist))
			.on('end', () => {
				chalk.end(z, 'SHOPIFY.MIN.CSS', c.cyan, s);
				chalk.desmond(chalk.bhex);
			});
	},
	mdb: function () {
		c.logger(' CSS ', 'COMPILE MDB CSS', c.blue);
		const s = chalk.start();
		log.cmd('Compile SASS to CSS', c.pink);
		return src([v.build + 'vendors/mdb.css'])
			.pipe(plumber())
			.pipe(dest(v.srcDist), log.cmd('Dist Unminified CSS', c.yell))
			.pipe(dest(v.shopDist))
			.pipe(cssnano(), log.cmd('Rename, Minify & Build', c.teal))
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist))
			.on('end', () => {
				chalk.end(z, 'MDB.MIN.CSS', c.cyan, s);
				chalk.desmond(chalk.bhex);
			});
	},
	notion: function () {
		return src([v.build + 'vendors/notion.css'])
			.pipe(plumber())
			.pipe(postcss())
			.pipe(cssnano())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.paraDist));
	},
	theme: function () {
		c.logger(' CSS ', 'COMPILE THEME CSS', c.blue);
		const s = chalk.start();
		log.cmd('Compile SASS to CSS', c.pink);
		return src([v.build + 'theme/theme.css'])
			.pipe(plumber())
			.pipe(postcss(), log.cmd('Process POST to CSS', c.purp))
			.pipe(dest(v.srcDist), log.cmd('Dist Unminified CSS', c.yell))
			.pipe(dest(v.shopDist))
			.pipe(cssnano(), log.cmd('Rename, Minify & Build', c.teal))
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.shopDist))
			.pipe(dest(v.paraDist))
			.on('end', () => {
				chalk.end(z, 'THEME.MIN.CSS', c.cyan, s);
				chalk.desmond(chalk.bhex);
			});
	},
	build: function () {
		return src(f.build)
			.pipe(plumber())
			.pipe(concat('desmond.css'))
			.pipe(dest(v.dist))
			.pipe(cssnano())
			.pipe(rename({ suffix: '.min' }))
			.pipe(dest(v.dist));
	},
	clean: function () {
		return src(v.clean).pipe(clean());
	},
};

exports.shopify = css.shopify;
exports.mdb = css.mdb;
exports.notion = css.notion;
exports.theme = css.theme;
exports.build = css.build;
exports.clean = css.clean;

exports.css = parallel(css.shopify, css.theme);

// var _gulpsrc = gulp.src;
// gulp.src = function () {
// 	return _gulpsrc.apply(gulp, arguments).pipe(
// 		plumber({
// 			errorHandler: function (err) {
// 				notify.onError({
// 					title: 'Gulp Error',
// 					message: 'Error: <%= error.message %>',
// 					sound: 'Bottle',
// 				})(err);
// 				this.emit('end');
// 			},
// 		})
// 	);
// };
