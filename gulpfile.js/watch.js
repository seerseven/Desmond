const { series, parallel, watch, src, dest } = require('gulp');
const zip = require('./archive.js');
const ver = require('./bump.js');
const shop = require('./shopify.js');
const git = require('./git.js');
const npx = require('./npm.js');

//Watch Tasks
const task = {
	theme: series(shop.theme),
	deploy: series(git.deploy),
	npmpackage: series(ver.npm, npx.package),
	archive: series(zip.project),
};

// Watch files
function watchFiles() {
	// Watch Main README.md / Commit Changes / Push Changes
	watch('./README.md', task.deploy);
	// Watch Shopify Log.md / Zip Theme / Archive Theme
	watch('app/shopify/LOG.md', task.theme);
	// Watch State Log.md / Archive Project
	watch('state/LOG.md', task.backup);
	// Watch Node_Modules / Merge / Publish
	watch('app/node_modules/@seerseven/desmond/src/*.js', task.node);
}
watchFiles.displayName = 'Watchfiles : Watch Files for Changes';

exports.files = series(watchFiles);
