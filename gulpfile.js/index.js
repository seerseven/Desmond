'use strict';

const { series, parallel, watch, src, dest } = require('gulp');
const arc = require('./archive.js');
const ver = require('./logger.js');

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

exports.theme = series(
	arc.shopifydir,
	arc.shopifycopy,
	arc.shopifyzip,
	arc.shopifyclean,
	arc.shopifyarc,
	arc.shopifyburn
);

exports.vault = series(
	arc.mkdir,
	parallel(arc.nodecopy, arc.appcopy),
	parallel(arc.nodezip, arc.appzip),
	parallel(arc.nodeclean, arc.appclean),
	arc.arc,
	arc.burn
);

exports.vers = parallel(ver.core, ver.npm, ver.master);
