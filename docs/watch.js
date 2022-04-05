const { series, parallel, watch, src, dest } = require('gulp');
const css = require('./styles.js');
const js = require('./scripts.js');
const ass = require('./assets.js');
const sass = require('./sass.js');
const chalk = require('./chalk.js');

//Watch Tasks
const task = {
	cssshopify: css.shopify,
	csstheme: css.theme,
	cssmdb: css.mdb,
	jsshopify: js.shopify,
	jstheme: js.theme,
	jsmods: js.jsmods,
	jslibs: js.jslibs,
	media: ass.ass,
	sort: ass.sortbuild,
};

// Watch files
function watchFiles() {
	watch(['src/build/*.css', 'src/build/*.js'], task.sort);
	watch('src/build/shopify/shopify.css', task.cssshopify);
	watch('src/build/theme/theme.css', task.csstheme);
	watch('src/build/shopify/shopify.js', task.jsshopify);
	watch('src/build/theme/theme.js', task.jstheme);
	// watch('src/build/vendors/mdb.css', task.cssmdb);
	// watch(['src/js/libs/*.js', '!src/js/libs/shopify.js'], task.jslibs);
	// watch('src/assets/img/**/*', ass.img);
	// (err) => {
	// 	if (err) {
	// 		console.error('error', err);
	// 	}
	// 	done();
	// };
}
watchFiles.displayName = 'Watchfiles : Watch Files for Changes';

exports.files = series(watchFiles);
// gulp.on('task_stop', function(evt) {
//   if (evt.task == 'foo') {
//     // do stuff after task foo has finished
//   }
// });

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
