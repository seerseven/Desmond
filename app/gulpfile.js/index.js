'use strict';

const { series, parallel, watch, src, dest } = require('gulp');
const bump = require('gulp-bump');
const plumber = require('gulp-plumber');
const prompt = require('gulp-prompt');

const cssTasks = require('./styles.js');
const jsTasks = require('./scripts.js');
const gitTasks = require('./git.js');
const sassTasks = require('./sass.js');
const del = require('del');

//Define Src and Dest Filepaths
const app = './';

function ver() {
	return src([app + 'package.json'])
		.pipe(plumber())
		.pipe(bump({ type: 'patch' }))
		.pipe(dest(app));
}

// Clean assets (returns a promise)
// function clean() {
// 	return del('shopify/assets/notion.min.css');
// }

// exports.clean = clean;
exports.css = cssTasks.css;
exports.js = jsTasks.js;
exports.lib = jsTasks.lib;
exports.save = gitTasks.gitSave;
exports.send = gitTasks.gitSend;
// exports.deploy = series(gitTasks.gitSave, gitTasks.gitSend);
exports.scss = sassTasks.scss;
exports.ver = ver;

exports.default = function () {
	watch('src/build/*.css', series(cssTasks.css, cssTasks.shop));
	watch('src/build/*.js', jsTasks.js);
	watch('src/vendors/*.js', parallel(jsTasks.lib, jsTasks.shop));
	// watch(
	// 	'theme/assets/*.min.*',
	// 	{ delay: 3500 },
	// 	series(gitTasks.gitSave, gitTasks.gitSend)
	// );
};
