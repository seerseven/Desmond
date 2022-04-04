const { series, parallel, src, dest } = require('gulp');
const bump = require('../tasks/bump');
const css = require('../tasks/styles');
const js = require('../tasks/scripts');
const cln = require('../tasks/clean');
const scss = require('../tasks/sass');
const git = require('../tasks/github');
module.exports = {
	bump: {
		version: series(bump.themebump, bump.npmbump),
	},
	scss: {
		cts: scss.cts,
	},
	git: {
		save: series(git.gitsave, git.saveend),
		push: git.gitpush,
	},
	css: {
		all: parallel(css.shopifycss, css.mdbcss, css.themecss),
		build: series(css.buildcss, css.cleancss),
	},
	js: {
		all: series(
			parallel(js.shopifyjs, js.themejs),
			parallel(js.queryjs, js.mdbjs, js.canvasjs, js.vendorjs),
			parallel(js.corejs, js.libjs)
		),
		lib: series(js.canvasjs, js.vendorjs, js.libjs),
		core: series(js.queryjs, js.mdbjs, js.corejs),
		mod: parallel(js.shopifyjs, js.themejs),
		build: series(js.concatjs, js.buildjs, js.cleanjs),
	},
	clean: {
		all: series(
			cln.cleanstart,
			cln.cleanbuild,
			cln.cleanmin,
			cln.cleandist,
			cln.cleanparallax,
			cln.cleanshopify,
			cln.cleanend
		),
	},
};
