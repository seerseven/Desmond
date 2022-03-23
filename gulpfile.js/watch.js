const { series, parallel, watch, src, dest } = require('gulp');
const zip = require('./gulp/archive.js');
const ver = require('./gulp/bump.js');
const shop = require('./gulp/shopify.js');
const git = require('./gulp/git.js');
const npx = require('./gulp/npm.js');
const chalk = require('./gulp/chalk.js');

//Watch Tasks
const task = {
	theme: series(shop.theme),
	deploy: series(git.deploy),
	npmpackage: series(ver.npm, npx.package),
	archive: series(zip.project),
};

function watcherWoman() {
	const s = chalk.start();
	chalk.watcher();
	return src('app/shopify');
}

// Watch files
function watchFiles() {
	watch('./README.md', task.deploy);
	watch('app/shopify/LOG.md', task.theme);
	watch('state/LOG.md', task.backup);
	watch('app/node_modules/@seerseven/desmond/src/*.js', task.node);
}
watchFiles.displayName = 'Watchfiles : Watch Files for Changes';

exports.files = series(watchFiles);
exports.status = series(watcherWoman);
