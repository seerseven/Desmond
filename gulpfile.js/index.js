'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const arc = require('./archive.js');
const ver = require('./logger.js');
const shop = require('./shopify.js');
const dep = require('./git.js');
const npm = require('./npm.js');

//Archive Desmond Core Files
exports.dcopy = arc.dcopy;
exports.dzip = arc.dzip;
exports.drem = arc.drem;

//Archive Main APP Folder
exports.tcopy = arc.tcopy;
exports.tzip = arc.tzip;
exports.trem = arc.trem;

//Archive NPM Package Folder
exports.ncopy = arc.ncopy;
exports.nzip = arc.nzip;
exports.nrem = arc.nrem;

//Archive Shopify Theme
exports.scopy = arc.scopy;
exports.szip = arc.szip;
exports.srem = arc.srem;

//Archive ALL at Once
exports.merge = arc.merge;
exports.zip = arc.zip;
exports.rem = arc.rem;

//Version Bump Package.JSON Files
exports.verCore = ver.core;
exports.verNpm = ver.npm;
exports.verMaster = ver.master;

//Git Add, Commit & Push
exports.pushtheme = shop.pushtheme;
exports.save = dep.save;
exports.send = dep.send;

//Git Add, Commit & Push
exports.node = npm.node;
exports.json = npm.json;
exports.hey = npm.hey;

exports.vers = ver.version;

task('deploy', series(dep.save, dep.send));

const deploy = task('deploy');
deploy.description = 'Build the project';
exports.deploy = deploy;

task('theme', series(arc.shopifytheme, shop.pushtheme));
task('vault', series(ver.version, arc.copy, arc.zip, arc.rem));
task('npm', series(arc.merge, ver.npm, npm.node));

exports.default = function () {
	// Watch the Main README.md for changes / Git Commit Changes / Git Push Changes
	watch('./README.md', task('deploy'));
	// Watch the Shopify Log.md for changes / Zip Shopify Theme / Archive Shopify Theme
	watch('app/shopify/LOG.md', task('theme'));
	watch('state/LOG.md', task('vault'));
	watch('app/node_modules/@seerseven/desmond/src/*.js', task('npm'));
};
