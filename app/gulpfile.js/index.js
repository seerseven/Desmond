'use strict';

const { series, parallel, watch, src, dest } = require('gulp');
const bump = require('gulp-bump');
const plumber = require('gulp-plumber');
const prompt = require('gulp-prompt');

const cssTasks = require('./styles.js');
const jsTasks = require('./scripts.js');
const mediaTasks = require('./assets.js');
const gitTasks = require('./git.js');
const sassTasks = require('./sass.js');

exports.css = cssTasks.css;
exports.img = mediaTasks.img;
exports.vid = mediaTasks.vid;
exports.js = jsTasks.js;
exports.lib = jsTasks.lib;
exports.save = gitTasks.gitSave;
exports.send = gitTasks.gitSend;
// exports.deploy = series(gitTasks.gitSave, gitTasks.gitSend);
exports.scss = sassTasks.scss;

exports.media = series(mediaTasks.img, mediaTasks.vid);

exports.default = function () {
	// series(mediaTasks.img, mediaTasks.vid);
	watch('src/build/*.css', series(cssTasks.css));
	watch('src/build/*.js', jsTasks.js);
	watch('src/vendors/*.js', parallel(jsTasks.lib));
	// watch(
	// 	'theme/assets/*.min.*',
	// 	{ delay: 3500 },
	// 	series(gitTasks.gitSave, gitTasks.gitSend)
	// );
};
