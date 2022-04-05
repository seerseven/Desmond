const { series, parallel, src, dest } = require('gulp');
const bump = require('../tasks/bump');
const css = require('../tasks/styles');
const js = require('../tasks/scripts');
const cln = require('../tasks/clean');
const scss = require('../tasks/sass');
const git = require('../tasks/git');
const sort = require('../tasks/sort');
const sh = require('../tasks/shell');
const arc = require('../tasks/state');
module.exports = {
	bump: {
		version: series(bump.themebump, bump.npmbump),
	},
	scss: {
		cts: scss.cts,
	},
	shell: {
		publish: sh.publish,
	},
	arc: {
		node: series(arc.savenpm, arc.cleanstage),
		merge: series(arc.sync, arc.cleanstage),
		des: series(arc.savedes, arc.cleanstage),
		theme: series(arc.savetheme, arc.cleanstage),
		arc: series(arc.archive, arc.cleanstage),
		vault: series(arc.backup, arc.cleanstage),
	},
	sort: {
		esbuild: series(
			sort.sortstart,
			sort.sortshopify,
			sort.sorttheme,
			sort.sortvendors,
			cln.cleanbuild,
			sort.sortend
		),
	},
	git: {
		save: series(git.gitsave, git.saveend),
		push: series(git.gitpush, git.pushend),
		git: series(git.gitsave, git.saveend, git.gitpush, git.pushend),
	},
	css: {
		shopify: css.shopifycss,
		theme: css.themecss,
		mdb: css.mdbcss,
		all: parallel(css.shopifycss, css.mdbcss, css.themecss),
		build: series(css.buildcss, css.cleancss),
	},
	js: {
		shopify: js.shopifyjs,
		theme: js.themejs,
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
