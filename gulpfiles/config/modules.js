const { series, parallel, src, dest } = require('gulp');
const bump = require('../tasks/bump');
const css = require('../tasks/css');
module.exports = {
	bump: {
		npm: bump.npm,
		main: bump.main,
		ver: series(bump.main, bump.npm),
	},
	css: {
		shopify: css.shopify,
		mdb: css.mdb,
		notion: css.notion,
		theme: css.theme,
		build: css.build,
		clean: css.clean,
	},
};
