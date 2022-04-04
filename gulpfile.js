'use strict';

const { series, parallel, src, dest } = require('gulp');
const tasks = require('./gulpfiles/config/modules');

//JS TASKS
exports.jsx = tasks.js.all;
exports.jlib = tasks.js.lib;
exports.jmod = tasks.js.mod;
exports.jcore = tasks.js.core;
exports.jsbuild = tasks.js.build;

//CSS TASKS
exports.css = tasks.css.all;
exports.cssbuild = tasks.css.build;

//CLEAN TASKS
exports.clean = tasks.clean.all;

//GIT TASKS
exports.save = tasks.git.save;
exports.push = tasks.git.push;
exports.git = tasks.git.git;

exports.default = tasks.css.mdb;

// const config = require('./gulp.config');

// config.map((config) => {
// 	return task(config.name, job[config.name]);
// });

// //Require
// const css = require('./styles.js');
// const js = require('./scripts.js');
// const ass = require('./assets.js');
// const sass = require('./sass.js');
// const watch = require('./watch.js');

// //Sass Tasks
// exports.scss = sass.scss;
// exports.cts = sass.cts;
// exports.list = sass.list;

// //Assets Tasks
// exports.img = ass.img;
// exports.vid = ass.vid;
// exports.mvtheme = ass.mvtheme;
// exports.mvshop = ass.mvshop;
// exports.mvven = ass.mvven;
// exports.cleanbuild = ass.cleanbuild;

// //CSS TASKS
// exports.csshopify = css.shopify;
// exports.csmdb = css.mdb;
// exports.csnotion = css.notion;
// exports.cstheme = css.theme;
// exports.csbuild = css.build;
// exports.csclean = css.clean;

// //JS TASKS
// exports.jsshopify = js.shopify;
// exports.jsquery = js.query;
// exports.jslibs = js.libs;
// exports.jscore = js.core;
// exports.jstheme = js.theme;
// exports.jsbuild = js.build;
// exports.jsclean = js.clean;

// //Consts
// exports.default = series(ass.desmond, watch.files);
// exports.sortfiles = ass.sortbuild;
// exports.desmond = ass.desmond;