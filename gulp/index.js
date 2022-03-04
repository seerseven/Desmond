'use strict';

const { series, parallel, watch, src, dest } = require('gulp');
const bump = require('gulp-bump');
const plumber = require('gulp-plumber');
const gulpCopy = require('gulp-copy');
const arch = require('./archive.js');
const loggerTasks = require('./logger.js');
const gitTasks = require('./git.js');

exports.merge = arch.merge;
exports.dir = arch.mkdir;
exports.rar = arch.archive;
exports.logCore = loggerTasks.core;
exports.logNpm = loggerTasks.npm;
exports.logGit = loggerTasks.git;
exports.logMaster = loggerTasks.master;
exports.save = gitTasks.gitSave;
exports.send = gitTasks.gitSend;
// exports.deploy = series(gitTasks.gitSave, gitTasks.gitSend);
exports.arc = arch.arc;
exports.burn = arch.burn;
exports.ncopy = arch.ncopy;
exports.gcopy = arch.gcopy;
exports.gzip = arch.gzip;
exports.gclean = arch.gclean;
exports.ccopy = arch.ccopy;
exports.czip = arch.czip;
exports.cclean = arch.cclean;

exports.vault = series(
	arch.mkdir,
	parallel(arch.ncopy, arch.gcopy, arch.ccopy),
	parallel(arch.nzip, arch.gzip, arch.czip),
	parallel(arch.nclean, arch.gclean, arch.cclean),
	arch.arc,
	arch.burn
);

exports.watch = function () {
	watch('test', core);
};
