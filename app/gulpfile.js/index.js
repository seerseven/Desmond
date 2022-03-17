'use strict';

const { series, parallel, watch, src, dest, task } = require('gulp');
const bump = require('gulp-bump');
const plumber = require('gulp-plumber');
const prompt = require('gulp-prompt');

//Require
const css = require('./styles.js');
const js = require('./scripts.js');
const assets = require('./assets.js');
const sass = require('./sass.js');

//Sass Tasks
exports.scss = sass.scss;
exports.cts = sass.cts;
exports.list = sass.list;

//Assets Tasks
exports.img = assets.img;
exports.vid = assets.vid;

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

//Tasks
task('css', parallel(css.shopify, css.theme));
task('js:libs', parallel(js.libs, js.core));
task('js:mods', parallel(js.shopify, js.theme));
task('assets', series(assets.img, assets.vid));

//Consts
const styles = task('css');
const jslibs = task('js:libs');
const jsmods = task('js:mods');
const media = task('assets');

exports.default = function () {
	watch('src/build/*.css', styles);
	watch('src/build/*.js', jsmods);
	watch(['src/js/libs/*.js', '!src/js/libs/shopify.js'], jslibs);
	watch('src/assets/img/**/*', assets.img);
};
