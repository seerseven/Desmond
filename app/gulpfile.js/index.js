'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const bump = require('gulp-bump');
const plumber = require('gulp-plumber');
const prompt = require('gulp-prompt');

const css = require('./styles.js');
const js = require('./scripts.js');
const mediaTasks = require('./assets.js');
const gitTasks = require('./git.js');
const sassTasks = require('./sass.js');

exports.img = mediaTasks.img;
exports.vid = mediaTasks.vid;
exports.save = gitTasks.gitSave;
exports.send = gitTasks.gitSend;
exports.scss = sassTasks.scss;
exports.cts = sassTasks.cts;
exports.list = sassTasks.list;

//CSS TASKS
exports.csshopify = css.shopify;
exports.csmdb = css.mdb;
exports.csnotion = css.notion;
exports.cstheme = css.theme;
exports.csbuild = css.build;
exports.csclean = css.clean;

//JS TASKS
exports.jsshopify = js.shopify;
exports.jsquery = js.query;
exports.jslibs = js.libs;
exports.jscore = js.core;
exports.jstheme = js.theme;
exports.jsbuild = js.build;
exports.jsclean = js.clean;

task('css', parallel(css.shopify, css.mdb, css.theme));

const styles = task('css');

exports.media = series(mediaTasks.img, mediaTasks.vid);

// exports.default = function () {
// 	// series(mediaTasks.img, mediaTasks.vid);
// 	watch('src/build/*.css', series(cssTasks.css));
// 	watch('src/build/*.js', jsTasks.js);
// 	watch('src/vendors/*.js', parallel(jsTasks.lib));
// 	watch(
// 		'theme/assets/*.min.*',
// 		{ delay: 3500 },
// 		series(gitTasks.gitSave, gitTasks.gitSend)
// 	);
// };

exports.default = function () {
	watch('src/build/*.css', styles);
};
