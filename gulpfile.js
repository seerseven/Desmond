'use strict';

const { series, parallel, src, dest, watch } = require('gulp');
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

//CLEAN TASKS
exports.node = tasks.arc.node;
exports.merge = tasks.arc.merge;
exports.app = tasks.arc.des;
exports.theme = tasks.arc.theme;
exports.arc = tasks.arc.arc;
exports.freeze = tasks.arc.vault;

//BUMP TASKS
exports.bump = tasks.bump.version;

//SORT TASKS
exports.sort = tasks.sort.esbuild;

//GIT TASKS
exports.save = tasks.git.save;
exports.push = tasks.git.push;
exports.git = tasks.git.git;
exports.deploy = tasks.git.git;

exports.default = function () {
	watch(['src/build/*.css', 'src/build/*.js'], tasks.sort.esbuild);
	watch('src/build/shopify/shopify.css', tasks.css.shopify);
	watch('src/build/theme/theme.css', tasks.css.theme);
	watch('src/build/shopify/shopify.js', tasks.js.shopify);
	watch('src/build/theme/theme.js', tasks.js.theme);
};

// watch('src/build/vendors/mdb.css', task.cssmdb);
// watch(['src/js/libs/*.js', '!src/js/libs/shopify.js'], task.jslibs);
// watch('src/assets/img/**/*', ass.img);
// (err) => {
// 	if (err) {
// 		console.error('error', err);
// 	}
// 	done();
// };
