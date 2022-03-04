'use strict';

const { series, parallel, watch, src, dest } = require('gulp');
const bump = require('gulp-bump');
const plumber = require('gulp-plumber');
const gulpCopy = require('gulp-copy');
const arch = require('./archive.js');
const ver = require('./logger.js');
// const gitTasks = require('./git.js');

exports.merge = arch.merge;
exports.dir = arch.mkdir;
exports.verCore = ver.core;
exports.verNpm = ver.npm;
exports.verMaster = ver.master;
// exports.save = gitTasks.gitSave;
// exports.send = gitTasks.gitSend;
// // exports.deploy = series(gitTasks.gitSave, gitTasks.gitSend);
exports.arc = arch.arc;
exports.burn = arch.burn;
exports.ncopy = arch.ncopy;

exports.ccopy = arch.ccopy;
exports.czip = arch.czip;
exports.cclean = arch.cclean;

exports.vault = series(
	arch.mkdir,
	parallel(arch.ncopy, arch.ccopy),
	parallel(arch.nzip, arch.czip),
	parallel(arch.nclean, arch.cclean),
	arch.arc,
	arch.burn
);

exports.vers = parallel(ver.core, ver.npm, ver.master);

exports.watch = function () {
	watch('test', core);
};
