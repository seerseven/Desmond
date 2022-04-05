const { series, watch, src, dest, parallel } = require('gulp');
const { performance } = require('perf_hooks');
//require

const conf = require('./config');
const x = conf.colors;
const v = conf.variables;
const c = conf.plugins.chalk;
const p = conf.plugins;

function log(insert) {
	return console.log(insert);
}
function bar(clr) {
	return `${c.hex(clr).dim(v.border)}`;
}
function darkbar() {
	return log(bar(x.dgrey));
}
function taskTag(tagText, clr, bgc) {
	return `${c
		.hex(clr)
		.bgHex(bgc)
		.bold('   ' + tagText + '   ')}`;
}
function taskTitle(titleText, bgc) {
	return `${c.hex(bgc).italic.bold('  ' + titleText)}`;
}

function taskDone(bgclr, tag) {
	return `${c.hex(x.mith).bgHex(bgclr).bold(tag)}`;
}
const check = `${c.hex(x.mill).bold('   ✓')}`;
const compile = `${c.white.italic.dim(`....compiled in:`)}`;
function taskOutput(output) {
	return `${c.hex(x.text).italic(`${' ' + output + '...'}`)}`;
}
function setOutput(output, clr) {
	return `${c.hex(clr).italic(`${'  ' + output}`)}`;
}
function duration(rate) {
	return `${c.hex(x.mill).italic.bold(`${rate}s`)}`;
}

function taskLog(mess, clr) {
	const message = `${c.hex(clr).italic(`${mess}`)}`;
	const check = `${c.hex(x.grey).bold('           ✓ ')}`;
	taskLogMessage = log(check + message);
	return taskLogMessage;
}
function taskFooter(output, rate, clr) {
	const out = taskOutput(output);
	const secs = duration(rate);
	const done = taskDone(clr);
	footer = log(done + check + out + compile + secs);
	return footer;
}
function taskHeader(tagText, titleText, clr, bgc) {
	const tag = taskTag(tagText, clr, bgc);
	const title = taskTitle(titleText, bgc);
	header = log(tag + title);
	return header;
}

function timeStart() {
	let s = performance.now();
	return s;
}
const time = timeStart();
const time2 = timeStart();
function timeEnd() {
	const e = performance.now();
	var ms = e - time;
	var sec = ms.toFixed(2);
	var done = sec / 1000.0;
	done = done.toFixed(2);
	return done;
}
function timeEnd2() {
	const e = performance.now();
	var ms = e - time2;
	var sec = ms.toFixed(2);
	var done = sec / 1000.0;
	done = done.toFixed(2);
	return done;
}

function taskStart(titleText, clr = '#ffffff') {
	log(bar(hex));
	taskHeader(tag, titleText, clr, hex);
	log(bar(hex));
}

function taskEnd(def) {
	done = timeEnd();
	taskFooter(def, done, hex);
	log(bar(hex));
}
//! ------- FUNCTIONS FOR NAMED(SET) TASKS --------//

//$    Log Functions     //
function setLog(clr, bgclr, mess) {
	// rate = timeEnd2();
	const message = `${c.hex(clr).italic(`${' ' + mess}`)}`;
	const check = `${c.hex(clr).bgHex(bgclr).bold('[   ✓   ]')}`;
	const check2 = `${c.hex(x.grey).bold('           ✓')}`;
	const check3 = `${c.hex(clr).bold('[   ✓   ]')}`;
	// const secs = duration(rate);
	taskLogMessage = log(check3 + message);
	return taskLogMessage;
}

//$   Main END Functions   //
//#region

function setTag(tag, tagColor, dark) {
	return `${c
		.hex(tagColor)
		.bgHex(dark)
		.bold('   ' + tag + '   ')}`;
}
function setTitle(pre, main, lite) {
	const pretask = `${c.hex(lite).italic.bold('  ' + pre)}`;
	const maintask = `${c.hex(lite).italic.bold(' ' + main + ' ')}`;
	title = pretask + maintask;
	return title;
}
function callOut(tag, pre, main, dark, lite, tagColor) {
	const settag = setTag(tag, tagColor, dark);
	const settitle = setTitle(pre, main, lite);
	callout = settag + settitle;
	return callout;
}
//#endregion

//$   Alt END Functions   //
//#region
function setCheck(dark) {
	return `${c.hex(dark).bold('[   ✓   ]')}`;
}
function setTask(main, lite) {
	const settask = `${c.hex(lite).italic.bold('  ' + main + ' ')}`;
	title = settask;
	return title;
}
function checkOut(main, dark, lite) {
	const setcheck = setCheck(dark);
	const settask = setTask(main, lite);
	checkout = setcheck + settask;
	return checkout;
}
function setBlock(main, bg, clr) {
	const setblock = `${c
		.hex(clr)
		.bgHex(bg)
		.bold(' ' + main + ' ')}`;
	title = setblock;
	return title;
}
//#endregion

//$   END Functions Compile Time   //
function compTime(rate) {
	const comp = `${c.white.italic.dim(`..compiled in:`)}`;
	const secs = duration(rate);
	comptime = comp + secs;
	return comptime;
}
function blockCompTime(lite, rate) {
	const comp = `${c.hex(lite).italic(` compiled in: `)}`;
	const secs = duration(rate);
	comptime = comp + secs;
	return comptime;
}

//$   Start Functions   //
//#region
function start(tag, pre, main, dark, lite, tagColor) {
	const callout = callOut(tag, pre, main, dark, lite, tagColor);
	thestart = log(callout);
	return thestart;
}
function theStart(tag, pre, main, dark, lite, tagColor) {
	log(bar(dark));
	start(tag, pre, main, dark, lite, tagColor);
	log(bar(dark));
}
//#endregion
//$   End Functions   //
//#region
function end(tag, pre, main, dark, lite, tagColor, rate) {
	const callout = callOut(tag, pre, main, dark, lite, tagColor);
	const comptime = compTime(rate);
	theend = log(callout + comptime);
	return theend;
}
function theEnd(tag, pre, main, dark, lite, tagColor) {
	rate = timeEnd();
	end(tag, pre, main, dark, lite, tagColor, rate);
	log(bar(dark));
}
//#endregion
//$   Alt End Functions   //
//#region
function altEnd(main, dark, lite, rate) {
	const checkout = checkOut(main, dark, lite);
	const comptime = compTime(rate);
	theend = log(checkout + comptime);
	return theend;
}
function thealtEnd(main, dark, lite) {
	rate = timeEnd();
	log(bar(x.dark));
	altEnd(main, dark, lite, rate);
	log(bar(dark));
}
//#endregion
//$   Block End Functions   //
//#region
function blockEnd(main, bg, lite, clr, rate) {
	const setblock = setBlock(main, bg, clr);
	const comptime = blockCompTime(lite, rate);
	blockend = log(setblock + comptime);
	return blockend;
}
function theblockEnd(main, bg, dark, lite, clr) {
	rate = timeEnd();
	log(bar(x.dark));
	blockEnd(main, bg, lite, clr, rate);
	log(bar(dark));
	log(bar(x.dark));
}
//#endregion

//! ---------SHOPIFY TASKS --------//

const css = {
	shopify: function (type) {
		if (type === 1) {
			theStart('CSS', 'COMPILE', 'SHOPIFY.CSS', x.dshopify, x.shopify, x.mith);
		}
		if (type === 0) {
			thealtEnd('SHOPIFY.MIN.CSS', x.dshopify, x.shopify);
			// theEnd('CSS', 'FINISHED', 'SHOPIFY.MIN.CSS', x.shopify, x.shopify, x.mith);
		}
	},
	mdb: function (type) {
		if (type === 1) {
			theStart('CSS', 'COMPILE', 'MDB5.CSS', x.mdb, x.mdbl, x.mith);
		}
		if (type === 0) {
			// theblockEnd('MDB5.MIN.CSS', x.dark, x.mdb, x.grey, x.mith);
			thealtEnd('MDB5.MIN.CSS', x.mdb, x.mdbl);
		}
	},
	notion: function (type) {
		if (type === 1) {
			theStart('CSS', 'COMPILE', 'NOTION.CSS', x.note, x.notel, x.dark);
		}
		if (type === 0) {
			thealtEnd('NOTION.MIN.CSS', x.note, x.notel);
		}
	},
	theme: function (type) {
		if (type === 1) {
			theStart('CSS', 'COMPILE', 'THEME.CSS', x.theme, x.themel, x.mith);
		}
		if (type === 0) {
			thealtEnd('THEME.MIN.CSS', x.theme, x.themel);
		}
	},
	build: function (type) {
		if (type === 1) {
			theStart('CSS', 'MERGE', 'CSS SOURCES', x.build, x.buildl, x.dark);
		}
		if (type === 0) {
			thealtEnd('DESMOND.MIN.CSS', x.build, x.buildl);
		}
	},
	clean: function (type) {
		if (type === 1) {
			theStart('CSS', 'REMOVE', 'DEVELOPMENT CSS', x.dred, x.red, x.dark);
		}
		if (type === 0) {
			thealtEnd('FILES DELETED', x.dred, x.red);
		}
	},
};

const scss = {
	sass: function (type) {
		if (type === 1) {
			theStart('SASS', 'COMPILE', 'ENTRYPOINTS.SCSS', x.dsass, x.sass, x.mith);
		}
		if (type === 0) {
			thealtEnd('SCSS CONVERTED TO CSS', x.dsass, x.sass);
		}
	},
	schema: function (type) {
		if (type === 1) {
			theStart('SASS', 'RENAME', 'SCSS SCHEMA', x.dsass, x.sass, x.mith);
		}
		if (type === 0) {
			thealtEnd('SCHEMA RENAMED', x.dsass, x.sass);
		}
	},
	cts: function (type) {
		if (type === 1) {
			theStart(
				'SASS',
				'CONVERT',
				'.CSS FILES to .SCSS',
				x.dsass,
				x.sass,
				x.mith
			);
		}
		if (type === 0) {
			thealtEnd('CSS FILES CONVERTED TO SCSS', x.dsass, x.sass);
		}
	},
	files: function (type) {
		if (type === 1) {
			theStart(
				'SASS',
				'GENERATE ',
				'JSON FILELIST FROM SCSS',
				x.dsass,
				x.sass,
				x.mith
			);
		}
		if (type === 0) {
			thealtEnd('FILELIST GENERATED', x.dsass, x.sass);
		}
	},
};
const js = {
	shopify: function (type) {
		if (type === 1) {
			theStart('JSX', 'COMPILE', 'SHOPIFY.JS', x.dshopjs, x.shopjs, x.mith);
		}
		if (type === 0) {
			thealtEnd('SHOPIFY.MIN.JS', x.dshopjs, x.shopjs);
			// theEnd('CSS', 'FINISHED', 'SHOPIFY.MIN.CSS', x.shopify, x.shopify, x.mith);
		}
	},
	lib: function (type) {
		if (type === 1) {
			theStart('JSX', 'COMPILE', 'LIB.JS', x.libjs, x.dlibjs, x.mith);
		}
		if (type === 0) {
			thealtEnd('LIB.MIN.CSS', x.libjs, x.dlibjs);
		}
	},
	core: function (type) {
		if (type === 1) {
			theStart('JSX', 'COMPILE', 'CORE.JS', x.corejs, x.dcorejs, x.mith);
		}
		if (type === 0) {
			thealtEnd('CORE.MIN.CSS', x.corejs, x.dcorejs);
		}
	},
	query: function (type) {
		if (type === 1) {
			theStart('JSX', 'COMPILE', 'JQUERY.JS', x.djquery, x.jquery, x.mith);
		}
		if (type === 0) {
			thealtEnd('QUERY.JS & QUERY.MIN.JS', x.djquery, x.jquery);
		}
	},
	mdb: function (type) {
		if (type === 1) {
			theStart('JSX', 'COMPILE', 'MDB.JS', x.dmdbjs, x.mdbjs, x.mith);
		}
		if (type === 0) {
			thealtEnd('MDB.JS & MDB.MIN.JS', x.dmdbjs, x.mdbjs);
		}
	},
	canvas: function (type) {
		if (type === 1) {
			theStart('JSX', 'COMPILE', 'CANVAS.JS', x.dcanvas, x.canvas, x.dark);
		}
		if (type === 0) {
			thealtEnd('CANVAS.JS & CANVAS.MIN.JS', x.dcanvas, x.canvas);
		}
	},
	vendor: function (type) {
		if (type === 1) {
			theStart('JSX', 'COMPILE', 'VENDOR.JS', x.dvendor, x.vendor, x.dark);
		}
		if (type === 0) {
			thealtEnd('VENDOR.JS & VENDOR.MIN.JS', x.dvendor, x.vendor);
		}
	},
	theme: function (type) {
		if (type === 1) {
			theStart('JSX', 'COMPILE', 'THEME.JS', x.dthemejs, x.themejs, x.mith);
		}
		if (type === 0) {
			thealtEnd('THEME.MIN.JS', x.dthemejs, x.themejs);
		}
	},
	concat: function (type) {
		if (type === 1) {
			theStart('JSX', 'CONCAT', 'MINIFIED JS', x.buildl, x.dbuild, x.dark);
		}
		if (type === 0) {
			thealtEnd('CONCAT.(MIN).JS', x.buildl, x.dbuild);
		}
	},
	build: function (type) {
		if (type === 1) {
			theStart('JSX', 'MERGE', 'JS SOURCES', x.dbuild, x.build, x.dark);
		}
		if (type === 0) {
			thealtEnd('DESMOND.MIN.JS', x.dbuild, x.build);
		}
	},
	clean: function (type) {
		if (type === 1) {
			theStart('JSX', 'REMOVE', 'DEVELOPMENT JS', x.dredl, x.redl, x.mith);
		}
		if (type === 0) {
			thealtEnd('FILES DELETED', x.dredl, x.redl);
		}
	},
};

const git = {
	save: function (type) {
		if (type === 1) {
			theStart('GIT', 'ADD', '& COMMIT CHANGES', x.purp, x.purp, x.mith);
		}
		if (type === 0) {
			thealtEnd('LOCAL CHANGES SAVED', x.purp, x.purp);
		}
	},
	push: function (type) {
		if (type === 1) {
			theStart('GIT', 'PUSH', 'CHANGES TO REMOTE', x.git2, x.git2, x.mith);
		}
		if (type === 0) {
			thealtEnd('SYNCED ORIGIN MASTER', x.git2, x.git2);
		}
	},
	pull: function (type) {
		if (type === 1) {
			theStart(
				'SASS',
				'CONVERT',
				'.CSS FILES to .SCSS',
				x.dsass,
				x.sass,
				x.mith
			);
		}
		if (type === 0) {
			thealtEnd('CSS FILES CONVERTED TO SCSS', x.dsass, x.sass);
		}
	},
};

const shell = {
	publish: function (type) {
		if (type === 1) {
			theStart('SHELL', 'PUBLISH', 'NPM PACKAGE', x.redsh, x.redsh, x.mith);
		}
		if (type === 0) {
			thealtEnd('PACKAGE PUBLISHED!!', x.redsh, x.redsh);
		}
	},
	install: function (type) {
		if (type === 1) {
			theStart(
				'SHELL',
				'COMPILE',
				'ENTRYPOINTS.SCSS',
				x.build,
				x.build,
				x.mith
			);
		}
		if (type === 0) {
			thealtEnd('@DESMOND SUCCESSFULLY INSTALLED', x.build, x.build);
		}
	},
	serve: function (type) {
		if (type === 1) {
			theStart(
				'SHELL',
				'SERVE',
				'SHOPIFY DEVELOPMENT THEME',
				x.lblue,
				x.lblue,
				x.mith
			);
		}
		if (type === 0) {
			thealtEnd('THEME AVAILABLE ON LOCALHOST', x.lblue, x.lblue);
		}
	},
	push: function (type) {
		if (type === 1) {
			theStart(
				'SHELL',
				'PUSH',
				'SHOPIFY THEME (LIVE)',
				x.shopjs,
				x.shopjs,
				x.mith
			);
		}
		if (type === 0) {
			thealtEnd('THEME SUCCESSFULLY PUSHED', x.shopjs, x.shopjs);
		}
	},
	pull: function (type) {
		if (type === 1) {
			theStart('SHELL', 'PULL', '(LIVE) SHOPIFY THEME', x.bump, x.bump, x.mith);
		}
		if (type === 0) {
			thealtEnd('THEME SUCCESSFULLY PUSHED', x.bump, x.bump);
		}
	},
	unpublished: function (type) {
		if (type === 1) {
			theStart(
				'SHELL',
				'PUSH',
				'SHOPIFY THEME UNPUBLISHED',
				x.redl,
				x.redl,
				x.mith
			);
		}
		if (type === 0) {
			thealtEnd('THEME SUCCESSFULLY PUSHED', x.redl, x.redl);
		}
	},
	cli: function (type) {
		if (type === 1) {
			theStart('SHELL', 'SHOPIFY', 'CLI UPDATE', x.mith, x.mith, x.dark);
		}
		if (type === 0) {
			thealtEnd('GEMS UPDATED: SHOPIFY-CLI', x.mith, x.mith);
		}
	},
};

const state = {
	node: function (type) {
		if (type === 1) {
			theStart('STATE', 'ARCHIVE', 'NPM PACKAGE', x.arc, x.arc, x.mith);
		}
		if (type === 0) {
			thealtEnd('NPM PACKAGE ARCHIVED', x.arc, x.arc);
		}
	},
	ject: function (type) {
		if (type === 1) {
			theStart('ARC', 'ARCHIVE', 'BASE PROJECT FILES', x.bump, x.bump, x.mith);
		}
		if (type === 0) {
			thealtEnd('PROJECT ARCHIVED', x.bump, x.bump);
		}
	},
	sho: function (type) {
		if (type === 1) {
			theStart('ARC', 'SHOPIFY', 'THEME SAVE', x.green, x.green, x.mith);
		}
		if (type === 0) {
			thealtEnd('SHOPIFY THEME SAVED', x.green, x.green);
		}
	},
	arc: function (type) {
		if (type === 1) {
			theStart('ARC', 'ARCHIVE', 'DESMOND FILES', x.build, x.build, x.mith);
		}
		if (type === 0) {
			thealtEnd('PROJECT ARCHIVED', x.build, x.build);
		}
	},
	bak: function (type) {
		if (type === 1) {
			theStart('ARC', 'DEEP', 'FREEZE FILES', x.dep, x.dep, x.mith);
		}
		if (type === 0) {
			thealtEnd('NPM PACKAGE ARCHIVED', x.dep, x.dep);
		}
	},
	merge: function (type) {
		if (type === 1) {
			theStart('ARC', 'MERGE', 'NODE MODULE FILES', x.dpink, x.dpink, x.mith);
		}
		if (type === 0) {
			thealtEnd('MODULES SYNCED', x.dpink, x.dpink);
		}
	},
};
const admin = {
	clean: function (type) {
		if (type === 1) {
			theStart('CLEAN', 'DELETE', 'SOURCE FILES', x.drem, x.rem, x.rem);
		}
		if (type === 0) {
			thealtEnd('ALL FILES REMOVED', x.drem, x.rem);
		}
	},
	sort: function (type) {
		if (type === 1) {
			theStart(
				'SORT',
				'MOVE',
				'COMPILED FILES ON BUILD',
				x.dyell,
				x.yell,
				x.yell
			);
		}
		if (type === 0) {
			thealtEnd('BUILD FILES SORTED', x.dyell, x.yell);
		}
	},
};
const bump = {
	theme: function (type) {
		if (type === 1) {
			theStart('BUMP', 'THEME', 'PACKAGE.JSON', x.dbump1, x.bump1, x.mith);
		}
		if (type === 0) {
			thealtEnd('PACKAGE.JSON', x.dbump1, x.bump1);
			// theEnd('CSS', 'FINISHED', 'SHOPIFY.MIN.CSS', x.shopify, x.shopify, x.mith);
		}
	},
	npm: function (type) {
		if (type === 1) {
			theStart('BUMP', 'NPM', 'PACKAGE.JSON', x.dbump2, x.bump2, x.mith);
		}
		if (type === 0) {
			thealtEnd('PACKAGE.JSON', x.dbump2, x.bump2);
			// theEnd('CSS', 'FINISHED', 'SHOPIFY.MIN.CSS', x.shopify, x.shopify, x.mith);
		}
	},
};
const logs = {
	concss: function () {
		setLog(x.concat, x.concat, ' Compile StyleSheets');
	},
	concjs: function () {
		setLog(x.concat, x.concat, ' Compile Scripts');
	},
	concmin: function () {
		setLog(x.concat, x.concat, ' Compile Minified Scripts');
	},
	clean: function () {
		setLog(x.concat, x.concat, ' Finding Residual Sources');
	},
	sass: function () {
		setLog(x.pink, x.dpink, ' Compile SASS');
	},
	scss: function () {
		setLog(x.rem, x.drem, ' Sassy Magic');
	},
	modules: function () {
		setLog(x.mods, x.dmods, ' Compile Modules');
	},
	libs: function () {
		setLog(x.libs, x.dlibs, ' Compile Libs');
	},
	jslibs: function () {
		setLog(x.libjs, x.dlibjs, ' Concat Canvas + Vendor');
	},
	jscore: function () {
		setLog(x.libjs, x.dlibjs, ' Concat Jquery + MDB5');
	},
	jsqry: function () {
		setLog(x.grey, x.dgrey, ' Concat jQuery + jQueryUI');
	},
	jsmdb: function () {
		setLog(x.grey, x.dgrey, ' Concat Popper + MDB5');
	},
	jscanvas: function () {
		setLog(x.grey, x.dgrey, ' Concat ImagePicker + Fabric + Three');
	},
	jsvendor: function () {
		setLog(x.grey, x.dgrey, ' Concat Download + Email + Vanta + AOS + Rellax');
	},
	jsconcat: function () {
		setLog(x.grey, x.dgrey, ' Concat Query + MDB5 + Canvas + Vendor');
	},
	jsbuild: function () {
		setLog(x.grey, x.dgrey, ' Concat Shopify + Core + Libs + Theme');
	},
	cssbuild: function () {
		setLog(x.grey, x.dgrey, ' Concat Shopify + MDB5 + Theme');
	},
	post: function () {
		setLog(x.purp, x.dpurp, ' Process PostCSS');
	},
	multi: function () {
		setLog(x.yell, x.dyell, ' Sort Build');
	},
	nano: function () {
		setLog(x.ojay, x.dojay, ' Minify Styles');
	},
	ugly: function () {
		setLog(x.ugly, x.dugly, ' Uglify Scripts');
	},
	rname: function () {
		setLog(x.blue, x.dblue, ' Rename File');
	},
	dist: function () {
		setLog(x.lteal, x.dteal, ' Distribute Build');
	},
	remesb: function () {
		setLog(x.build, x.build, ' Removed Build Assets');
	},
	remmin: function () {
		setLog(x.purp, x.purp, ' Removed Minified Assets');
	},
	remdist: function () {
		setLog(x.pink, x.pink, ' Removed Dist Assets');
	},
	remlax: function () {
		setLog(x.teal, x.teal, ' Removed Parallax Assets');
	},
	remshop: function () {
		setLog(x.text, x.text, ' Removed Shopify Assets');
	},
	shopifyFiles: function () {
		setLog(x.teal, x.teal, ' Moved Shopify JS / CSS');
	},
	themeFiles: function () {
		setLog(x.sass, x.sass, ' Moved Theme JS / CSS');
	},
	vendorFiles: function () {
		setLog(x.text, x.text, ' Moved MDB & Notion CSS');
	},
	devlinks: function () {
		setLog(x.text, x.text, " admin: 'https://seerseven.myshopify.com/admin'");
		setLog(
			x.text,
			x.text,
			" customize: 'https://tinyurl.com/seerseven-theme-editor'"
		);
		setLog(x.text, x.text, " local: 'http://127.0.0.1:9292'");
		setLog(
			x.text,
			x.text,
			" preview: 'https://tinyurl.com/seerseven-theme-preview'"
		);
	},
	copy: function () {
		setLog(x.text, x.text, ' Copying Files');
	},
	zip: function () {
		setLog(x.teal, x.teal, ' Creating Zip Archive');
	},
	rem: function () {
		setLog(x.yell, x.yell, ' Cleaning Stage');
	},
};

exports.start = taskStart;
exports.end = taskEnd;
exports.time = timeStart;
exports.log = taskLog;
//Log Tasks

exports.copy = logs.copy;
exports.zip = logs.zip;
exports.rem = logs.rem;
exports.dist = logs.dist;
exports.sass = logs.sass;
exports.scss = logs.scss;
exports.mods = logs.modules;
exports.libs = logs.libs;
exports.nano = logs.nano;
exports.ugly = logs.ugly;
exports.post = logs.post;
exports.multi = logs.multi;
exports.rname = logs.rname;
exports.concss = logs.concss;
exports.concjs = logs.concjs;
exports.concmin = logs.concmin;
exports.conclibs = logs.jslibs;
exports.concqry = logs.jsqry;
exports.concmdb = logs.jsmdb;
exports.conccan = logs.jscanvas;
exports.concven = logs.jsvendor;
exports.conccore = logs.jscore;
exports.concjsc = logs.jsconcat;
exports.concjsb = logs.jsbuild;
exports.conccsb = logs.cssbuild;
exports.clean = logs.clean;
exports.remesb = logs.remesb;
exports.remmin = logs.remmin;
exports.remdist = logs.remdist;
exports.remshop = logs.remshop;
exports.remlax = logs.remlax;
exports.sfiles = logs.shopifyFiles;
exports.tfiles = logs.themeFiles;
exports.vfiles = logs.vendorFiles;
exports.links = logs.devlinks;

//Admin Tasks
exports.remall = admin.clean;
exports.sort = admin.sort;

//State Tasks
exports.node = state.node;
exports.ject = state.ject;
exports.sho = state.sho;
exports.arc = state.arc;
exports.bak = state.bak;
exports.merge = state.merge;

//Shell Tasks
exports.publish = shell.publish;
exports.install = shell.install;
exports.themeserve = shell.serve;
exports.themepush = shell.push;
exports.themepull = shell.pull;
exports.themeunpub = shell.unpublished;
exports.cli = shell.cli;

// CSS Tasks
exports.shopifycss = css.shopify;
exports.mdbcss = css.mdb;
exports.notecss = css.notion;
exports.themecss = css.theme;
exports.buildcss = css.build;
exports.cleancss = css.clean;

// SASS Tasks
exports.sassy = scss.sass;
exports.schema = scss.schema;
exports.cts = scss.cts;
exports.files = scss.files;

// GIT Tasks
exports.save = git.save;
exports.push = git.push;

// JS Tasks
exports.shopifyjs = js.shopify;
exports.themejs = js.theme;
exports.libjs = js.lib;
exports.queryjs = js.query;
exports.mdbjs = js.mdb;
exports.canvasjs = js.canvas;
exports.vendorjs = js.vendor;
exports.corejs = js.core;
exports.concatjs = js.concat;
exports.buildjs = js.build;
exports.cleanjs = js.clean;

//Bump Tasks
exports.themeb = bump.theme;
exports.npmb = bump.npm;
