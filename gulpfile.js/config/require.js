const bumpVersion = require('gulp-bump');
const zip = require('gulp-zip');
const git = require('gulp-git');
const push = require('gulp-git-push');
const ignore = require('gulp-gitignore');
const mithrandir = require('gulp-plumber');
const clean = require('gulp-clean');
const shell = require('gulp-shell');

exports.bump = bumpVersion;
exports.zip = zip;
exports.shell = shell;
exports.push = push;
exports.git = git;
exports.ignore = ignore;
exports.clean = clean;
exports.mithrandir = mithrandir;
