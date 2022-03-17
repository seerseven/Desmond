'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const arc = require('./archive.js');
const ver = require('./logger.js');
const shop = require('./shopify.js');
const dep = require('./git.js');

exports.desdir = arc.desdir;
exports.desclean = arc.desclean;
exports.deszip = arc.deszip;
exports.descopy = arc.descopy;

exports.merge = arc.merge;
exports.dir = arc.mkdir;
exports.verCore = ver.core;
exports.verNpm = ver.npm;
exports.verMaster = ver.master;
exports.arc = arc.arc;
exports.burn = arc.burn;
exports.nodecopy = arc.nodecopy;

exports.appcopy = arc.appcopy;
exports.appzip = arc.appzip;
exports.appclean = arc.appclean;

exports.shopdir = arc.shopifydir;
exports.shopcopy = arc.shopifycopy;
exports.shopzip = arc.shopifyzip;
exports.shopclean = arc.shopifyclean;
exports.shoparc = arc.shopifyarc;
exports.shopburn = arc.shopifyburn;
exports.pushtheme = shop.pushtheme;
exports.save = dep.save;
exports.send = dep.send;

exports.theme = series(
	arc.shopifydir,
	arc.shopifycopy,
	arc.shopifyzip,
	arc.shopifyclean,
	arc.shopifyarc,
	arc.shopifyburn,
	shop.pushtheme
);

exports.vault = series(
	parallel(ver.core, ver.npm, ver.master),
	arc.mkdir,
	parallel(arc.descopy, arc.nodecopy, arc.appcopy),
	parallel(arc.deszip, arc.nodezip, arc.appzip),
	parallel(arc.desclean, arc.nodeclean, arc.appclean),
	arc.arc,
	arc.burn
);

exports.vers = parallel(ver.core, ver.npm, ver.master);

task('deploy', series(dep.save, dep.send));
const deploy = task('deploy');

exports.default = function () {
	watch('./README.md', deploy);
	watch('app/node_modules/@seerseven/desmond/src/*.js', arc.merge);
};
