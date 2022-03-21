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

// task('deploy', series(dep.save, dep.send));
task('theme', series(arc.shopifytheme, shop.pushtheme));
task('vault', series(ver.version, arc.copy, arc.zip, arc.rem));
task('npm', series(arc.merge, ver.npm, npm.node));

// Watch files
function watcher() {
	// Watch the Main README.md for changes / Git Commit Changes / Git Push Changes
	watch('./README.md', task('deploy'));
	// Watch the Shopify Log.md for changes / Zip Shopify Theme / Archive Shopify
	watch('app/shopify/LOG.md', task('theme'));
	watch('state/LOG.md', task('vault'));
	watch('app/node_modules/@seerseven/desmond/src/*.js', task('npm'));
}
watcher.displayName = 'Watcher : Watch Files for Changes';

// export tasks
exports.deploy = dep.deploy;
exports.default = series(watcher);

// const deploy = series(dep.save, dep.send);

// function deploy() {
// 	get.save();
// 	get.send();
// }

// task('theme', series(arc.shopifytheme, shop.pushtheme));
// task('vault', series(ver.version, arc.copy, arc.zip, arc.rem));
// task('npm', series(arc.merge, ver.npm, npm.node));

// // Watch files
// function watchFiles() {
// 	// Watch the Main README.md for changes / Git Commit Changes / Git Push Changes
// 	watch('./README.md', task('deploy'));
// 	// Watch the Shopify Log.md for changes / Zip Shopify Theme / Archive Shopify
// 	watch('app/shopify/LOG.md', task('theme'));
// 	watch('state/LOG.md', task('vault'));
// 	watch('app/node_modules/@seerseven/desmond/src/*.js', task('npm'));
// }

// function bump(cb) {
// 	series(ver.master, ver.core, ver.npm);
// 	cb();
// }
// bump.displayName = '[Bump] : Bump Version Number of All Package.jsons';

// // define complex tasks
// const watcher = series(bump);

// // export tasks
// exports.default = watcher;
