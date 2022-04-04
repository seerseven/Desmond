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

const logs = {
	conc: function () {
		setLog(x.concat, x.concat, ' Concat CSS');
	},
	clean: function () {
		setLog(x.concat, x.concat, ' Finding Residual Sources');
	},
	sass: function () {
		setLog(x.pink, x.dpink, ' Compile SASS');
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
	rname: function () {
		setLog(x.blue, x.dblue, ' Rename File');
	},
	dist: function () {
		setLog(x.lteal, x.dteal, ' Distribute Build');
	},
};

exports.start = taskStart;
exports.end = taskEnd;
exports.time = timeStart;
exports.log = taskLog;
exports.dist = logs.dist;
exports.sass = logs.sass;
exports.nano = logs.nano;
exports.post = logs.post;
exports.multi = logs.multi;
exports.rname = logs.rname;
exports.conc = logs.conc;
exports.clean = logs.clean;
exports.shopify = css.shopify;
exports.mdb = css.mdb;
exports.note = css.notion;
exports.theme = css.theme;
exports.build = css.build;
exports.cleancss = css.clean;
